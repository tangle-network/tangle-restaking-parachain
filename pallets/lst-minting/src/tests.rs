// This file is part of Tangle.

// Copyright (C) Liebi Technologies PTE. LTD.
// SPDX-License-Identifier: GPL-3.0-or-later WITH Classpath-exception-2.0

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.

// Ensure we're `no_std` when compiling for Wasm.

#![cfg(test)]

use crate::{mock::*, *};
use frame_support::{assert_noop, assert_ok, sp_runtime::Permill, BoundedVec};

use tangle_primitives::currency::{BNC, KSM, MOVR, VBNC, VKSM, VMOVR};
use tangle_slp::primitives::MinimumsMaximums;
use xcm::v3::{prelude::*, MultiLocation};

fn init_slp<T: tangle_slp::Config>() {
	let mins_and_maxs = MinimumsMaximums::<tangle_slp::BalanceOf<T>> {
		delegator_bonded_minimum: 100_000_u32.into(),
		bond_extra_minimum: 0_u32.into(),
		unbond_minimum: 0_u32.into(),
		rebond_minimum: 0_u32.into(),
		unbond_record_maximum: 32_u32,
		validators_back_maximum: 36_u32,
		delegator_active_staking_maximum: 200_000_000_u32.into(),
		validators_reward_maximum: 0_u32,
		delegation_amount_minimum: 0_u32.into(),
		delegators_maximum: 100_u16,
		validators_maximum: 300_u16,
	};

	// Set minimums and maximums
	tangle_slp::MinimumsAndMaximums::<T>::insert(KSM, mins_and_maxs);
}

#[test]
fn mint() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		assert_ok!(LstMinting::set_minimum_mint(RuntimeOrigin::signed(ALICE), KSM, 200));
		init_slp::<Runtime>();
		pub const FEE: Permill = Permill::from_percent(5);
		assert_ok!(LstMinting::set_fees(RuntimeOrigin::root(), FEE, FEE));
		assert_noop!(
			LstMinting::mint(Some(BOB).into(), KSM, 100, BoundedVec::default(), None, vec![]),
			Error::<Runtime>::BelowMinimumMint
		);

		let validator =
			MultiLocation { parents: 100, interior: X1(Junction::from(BoundedVec::default())) };

		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			KSM,
			100000000000,
			BoundedVec::default(),
			None,
			vec![validator]
		));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			MOVR,
			100000000000000000000,
			BoundedVec::default(),
			None,
			vec![validator]
		));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			MOVR,
			100000000000000000000,
			BoundedVec::default(),
			None,
			vec![validator]
		));
		assert_eq!(LstMinting::token_pool(MOVR), 190000000000000000000);
		assert_eq!(LstMinting::token_pool(KSM), 95000000000);
		assert_eq!(LstMinting::minimum_mint(KSM), 200);
		assert_eq!(Tokens::total_issuance(VKSM), 95000001000);

		let (entrance_account, _exit_account) = LstMinting::get_entrance_and_exit_accounts();
		assert_eq!(Tokens::free_balance(KSM, &entrance_account), 95000000000);
		let fee_account: AccountId = <Runtime as Config>::FeeAccount::get();
		assert_eq!(Tokens::free_balance(KSM, &fee_account), 5000000000);
	});
}

#[test]
fn redeem() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		pub const FEE: Permill = Permill::from_percent(2);
		init_slp::<Runtime>();
		let validator =
			MultiLocation { parents: 100, interior: X1(Junction::from(BoundedVec::default())) };
		assert_ok!(LstMinting::set_fees(RuntimeOrigin::root(), FEE, FEE));
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			KSM,
			TimeUnit::Era(1)
		));
		assert_ok!(LstMinting::increase_token_pool(KSM, 1000));
		assert_ok!(LstMinting::update_ongoing_time_unit(KSM, TimeUnit::Era(1)));
		assert_ok!(LstMinting::set_minimum_redeem(RuntimeOrigin::signed(ALICE), VKSM, 90));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			KSM,
			1000,
			BoundedVec::default(),
			None,
			vec![validator]
		));
		assert_noop!(
			LstMinting::redeem(Some(BOB).into(), VKSM, 80),
			Error::<Runtime>::BelowMinimumRedeem
		);
		assert_noop!(
			LstMinting::redeem(Some(BOB).into(), KSM, 80),
			Error::<Runtime>::NotSupportTokenType
		);
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 100));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 200));
		assert_eq!(LstMinting::token_pool(KSM), 1686); // 1000 + 980 - 98 - 196
		assert_eq!(LstMinting::unlocking_total(KSM), 294); // 98 + 196
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			MOVR,
			TimeUnit::Round(1)
		));
		assert_ok!(LstMinting::update_ongoing_time_unit(MOVR, TimeUnit::Round(1)));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			MOVR,
			300000000000000000000,
			BoundedVec::default(),
			None,
			vec![validator]
		));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VMOVR, 20000000000000000000));
		assert_ok!(LstMinting::add_support_rebond_token(RuntimeOrigin::signed(ALICE), MOVR));
		assert_ok!(LstMinting::rebond(
			Some(BOB).into(),
			MOVR,
			19000000000000000000,
			vec![validator]
		));
		assert_ok!(LstMinting::set_min_time_unit(
			RuntimeOrigin::signed(ALICE),
			MOVR,
			TimeUnit::Round(1)
		));
		assert_eq!(LstMinting::min_time_unit(MOVR), TimeUnit::Round(1));
		assert_ok!(LstMinting::set_unlocking_total(RuntimeOrigin::signed(ALICE), MOVR, 1000));
		assert_eq!(LstMinting::unlocking_total(MOVR), 1000);
		let (entrance_account, _exit_account) = LstMinting::get_entrance_and_exit_accounts();
		assert_eq!(Tokens::free_balance(KSM, &entrance_account), 980);
		let mut ledger_list_origin = BoundedVec::default();
		assert_ok!(ledger_list_origin.try_push(0));
		assert_ok!(ledger_list_origin.try_push(1));
		assert_eq!(
			LstMinting::user_unlock_ledger(BOB, KSM),
			Some((294, ledger_list_origin.clone()))
		);
		assert_eq!(
			LstMinting::token_unlock_ledger(KSM, 0),
			Some((BOB, 98, TimeUnit::Era(2), RedeemType::Native))
		);
		let mut ledger_list_origin2 = BoundedVec::default();
		assert_ok!(ledger_list_origin2.try_push(0));
		assert_ok!(ledger_list_origin2.try_push(1));
		assert_eq!(
			LstMinting::time_unit_unlock_ledger(TimeUnit::Era(2), KSM),
			Some((294, ledger_list_origin2, KSM))
		);
	});
}

#[test]
fn rebond() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		pub const FEE: Permill = Permill::from_percent(0);
		init_slp::<Runtime>();
		assert_ok!(LstMinting::set_fees(RuntimeOrigin::root(), FEE, FEE));
		assert_ok!(LstMinting::set_unlock_duration(
			RuntimeOrigin::signed(ALICE),
			KSM,
			TimeUnit::Era(0)
		));
		let validator =
			MultiLocation { parents: 100, interior: X1(Junction::from(BoundedVec::default())) };
		assert_ok!(LstMinting::increase_token_pool(KSM, 1000));
		assert_ok!(LstMinting::update_ongoing_time_unit(KSM, TimeUnit::Era(1)));
		let mut ledger_list_origin = BoundedVec::default();
		assert_ok!(ledger_list_origin.try_push(0));
		let mut ledger_list_origin2 = BoundedVec::default();
		assert_ok!(ledger_list_origin2.try_push(0));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			KSM,
			200,
			BoundedVec::default(),
			None,
			vec![validator]
		));
		assert_ok!(LstMinting::mint(
			Some(BOB).into(),
			KSM,
			100,
			BoundedVec::default(),
			None,
			vec![validator]
		));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 200));
		assert_ok!(LstMinting::redeem(Some(BOB).into(), VKSM, 100));
		assert_eq!(
			LstMinting::token_unlock_ledger(KSM, 1),
			Some((BOB, 100, TimeUnit::Era(1), RedeemType::Native))
		);
		assert_noop!(
			LstMinting::rebond(Some(BOB).into(), KSM, 100, vec![validator]),
			Error::<Runtime>::InvalidRebondToken
		);
		assert_ok!(LstMinting::add_support_rebond_token(RuntimeOrigin::signed(ALICE), KSM));
		assert_ok!(LstMinting::rebond(Some(BOB).into(), KSM, 200, vec![validator]));
		assert_eq!(
			LstMinting::time_unit_unlock_ledger(TimeUnit::Era(1), KSM),
			Some((100, ledger_list_origin.clone(), KSM))
		);
		assert_eq!(
			LstMinting::user_unlock_ledger(BOB, KSM),
			Some((100, ledger_list_origin2.clone()))
		);
		assert_eq!(
			LstMinting::token_unlock_ledger(KSM, 0),
			Some((BOB, 100, TimeUnit::Era(1), RedeemType::Native))
		);
		assert_eq!(LstMinting::token_unlock_ledger(KSM, 1), None);
		assert_eq!(LstMinting::token_pool(KSM), 1200);
		assert_eq!(LstMinting::unlocking_total(KSM), 100); // 200 + 100 - 200
		let (entrance_account, _exit_account) = LstMinting::get_entrance_and_exit_accounts();
		assert_eq!(Tokens::free_balance(KSM, &entrance_account), 300);
	});
}

#[test]
fn recreate_currency_ongoing_time_unit_should_work() {
	ExtBuilder::default().one_hundred_for_alice_n_bob().build().execute_with(|| {
		env_logger::try_init().unwrap_or(());
		init_slp::<Runtime>();
		// set KSM ongoing time unit to be Era(1)
		OngoingTimeUnit::<Runtime>::insert(KSM, TimeUnit::Era(1));
		assert_eq!(LstMinting::ongoing_time_unit(KSM), Some(TimeUnit::Era(1)));

		// recreate_currency_ongoing_time_unit the ongoing time unit of KSM to be Round(2)
		assert_ok!(LstMinting::recreate_currency_ongoing_time_unit(
			RuntimeOrigin::signed(ALICE),
			KSM,
			TimeUnit::Round(2)
		));
		assert_eq!(LstMinting::ongoing_time_unit(KSM), Some(TimeUnit::Round(2)));
	})
}
