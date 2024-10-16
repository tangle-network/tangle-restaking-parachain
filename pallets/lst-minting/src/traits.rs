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

use codec::{Decode, Encode};
use frame_support::pallet_prelude::Weight;
use sp_core::H160;
use sp_runtime::RuntimeDebug;

#[derive(PartialEq, Eq, Clone, Encode, Decode, RuntimeDebug, scale_info::TypeInfo)]
pub enum RedeemTo<AccountId> {
	/// Native chain.
	Native(AccountId),
	/// Astar chain.
	Astar(AccountId),
	/// Moonbeam chain.
	Moonbeam(H160),
	/// Hydradx chain.
	Hydradx(AccountId),
	/// Interlay chain.
	Interlay(AccountId),
	/// Manta chain.
	Manta(AccountId),
}

pub trait OnRedeemSuccess<AccountId, CurrencyId, Balance> {
	fn on_redeem_success(
		token_id: CurrencyId,
		to: AccountId,
		token_amount: Balance,
	) -> frame_support::pallet_prelude::Weight;

	fn on_redeemed(
		address: AccountId,
		token_id: CurrencyId,
		token_amount: Balance,
		lst_amount: Balance,
		fee: Balance,
	) -> frame_support::pallet_prelude::Weight;
}

impl<AccountId, CurrencyId, Balance> OnRedeemSuccess<AccountId, CurrencyId, Balance> for () {
	fn on_redeem_success(_token_id: CurrencyId, _to: AccountId, _token_amount: Balance) -> Weight {
		Weight::zero()
	}

	fn on_redeemed(
		_address: AccountId,
		_token_id: CurrencyId,
		_token_amount: Balance,
		_lst_amount: Balance,
		_fee: Balance,
	) -> Weight {
		Weight::zero()
	}
}
