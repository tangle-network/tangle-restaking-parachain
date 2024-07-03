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

//! Autogenerated weights for `tangle_channel_commission`
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-12-20, STEPS: `50`, REPEAT: `20`, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! WORST CASE MAP SIZE: `1000000`
//! HOSTNAME: `bifrost-build-machine`, CPU: `Intel(R) Xeon(R) CPU E5-26xx v4`
//! WASM-EXECUTION: `Compiled`, CHAIN: `Some("bifrost-kusama-local")`, DB CACHE: 1024

// Executed Command:
// target/debug/bifrost
// benchmark
// pallet
// --pallet=tangle_channel_commission
// --chain=bifrost-kusama-local
// --extrinsic=*
// --steps=50
// --repeat=20
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --header=./HEADER-GPL3
// --output=./tangle_channel_commission.rs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]
#![allow(missing_docs)]

use frame_support::{traits::Get, weights::Weight};
use core::marker::PhantomData;

/// Weight functions for `tangle_channel_commission`.
pub struct BifrostWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> tangle_channel_commission::WeightInfo for BifrostWeight<T> {
	/// Storage: `ChannelCommission::ChannelNextId` (r:1 w:1)
	/// Proof: `ChannelCommission::ChannelNextId` (`max_values`: Some(1), `max_size`: None, mode: `Measured`)
	/// Storage: `ChannelCommission::CommissionTokens` (r:31 w:0)
	/// Proof: `ChannelCommission::CommissionTokens` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// Storage: `ChannelCommission::Channels` (r:0 w:1)
	/// Proof: `ChannelCommission::Channels` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// Storage: `ChannelCommission::ChannelCommissionTokenRates` (r:0 w:30)
	/// Proof: `ChannelCommission::ChannelCommissionTokenRates` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// The range of component `x` is `[1, 30]`.
	fn register_channel(x: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `132 + x * (24 ±0)`
		//  Estimated: `3597 + x * (2499 ±0)`
		// Minimum execution time: 687_870_000 picoseconds.
		Weight::from_parts(590_441_786, 0)
			.saturating_add(Weight::from_parts(0, 3597))
			// Standard Error: 280_698
			.saturating_add(Weight::from_parts(150_823_505, 0).saturating_mul(x.into()))
			.saturating_add(T::DbWeight::get().reads(2))
			.saturating_add(T::DbWeight::get().reads((1_u64).saturating_mul(x.into())))
			.saturating_add(T::DbWeight::get().writes(2))
			.saturating_add(T::DbWeight::get().writes((1_u64).saturating_mul(x.into())))
			.saturating_add(Weight::from_parts(0, 2499).saturating_mul(x.into()))
	}
	/// Storage: `ChannelCommission::Channels` (r:1 w:1)
	/// Proof: `ChannelCommission::Channels` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// Storage: `ChannelCommission::ChannelClaimableCommissions` (r:1 w:0)
	/// Proof: `ChannelCommission::ChannelClaimableCommissions` (`max_values`: None, `max_size`: None, mode: `Measured`)
	fn remove_channel() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `219`
		//  Estimated: `3684`
		// Minimum execution time: 923_024_000 picoseconds.
		Weight::from_parts(948_797_000, 0)
			.saturating_add(Weight::from_parts(0, 3684))
			.saturating_add(T::DbWeight::get().reads(2))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	/// Storage: `ChannelCommission::Channels` (r:1 w:1)
	/// Proof: `ChannelCommission::Channels` (`max_values`: None, `max_size`: None, mode: `Measured`)
	fn update_channel_receive_account() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `219`
		//  Estimated: `3684`
		// Minimum execution time: 459_058_000 picoseconds.
		Weight::from_parts(495_611_000, 0)
			.saturating_add(Weight::from_parts(0, 3684))
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	/// Storage: `ChannelCommission::Channels` (r:1 w:0)
	/// Proof: `ChannelCommission::Channels` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// Storage: `ChannelCommission::CommissionTokens` (r:1 w:0)
	/// Proof: `ChannelCommission::CommissionTokens` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// Storage: `ChannelCommission::ChannelCommissionTokenRates` (r:0 w:1)
	/// Proof: `ChannelCommission::ChannelCommissionTokenRates` (`max_values`: None, `max_size`: None, mode: `Measured`)
	fn set_channel_commission_token() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `284`
		//  Estimated: `3749`
		// Minimum execution time: 549_732_000 picoseconds.
		Weight::from_parts(561_049_000, 0)
			.saturating_add(Weight::from_parts(0, 3749))
			.saturating_add(T::DbWeight::get().reads(2))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	/// Storage: `ChannelCommission::CommissionTokens` (r:1 w:1)
	/// Proof: `ChannelCommission::CommissionTokens` (`max_values`: None, `max_size`: None, mode: `Measured`)
	fn set_commission_tokens() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `109`
		//  Estimated: `3574`
		// Minimum execution time: 415_042_000 picoseconds.
		Weight::from_parts(438_659_000, 0)
			.saturating_add(Weight::from_parts(0, 3574))
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	/// Storage: `ChannelCommission::Channels` (r:1 w:0)
	/// Proof: `ChannelCommission::Channels` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// Storage: `ChannelCommission::ChannelClaimableCommissions` (r:2 w:1)
	/// Proof: `ChannelCommission::ChannelClaimableCommissions` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// Storage: `Tokens::Accounts` (r:2 w:2)
	/// Proof: `Tokens::Accounts` (`max_values`: None, `max_size`: Some(118), added: 2593, mode: `MaxEncodedLen`)
	/// Storage: `AssetRegistry::CurrencyMetadatas` (r:1 w:0)
	/// Proof: `AssetRegistry::CurrencyMetadatas` (`max_values`: None, `max_size`: None, mode: `Measured`)
	/// Storage: `System::Account` (r:1 w:0)
	/// Proof: `System::Account` (`max_values`: None, `max_size`: Some(128), added: 2603, mode: `MaxEncodedLen`)
	fn claim_commissions() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `2055`
		//  Estimated: `7995`
		// Minimum execution time: 1_855_043_000 picoseconds.
		Weight::from_parts(1_928_764_000, 0)
			.saturating_add(Weight::from_parts(0, 7995))
			.saturating_add(T::DbWeight::get().reads(7))
			.saturating_add(T::DbWeight::get().writes(3))
	}
	/// Storage: `ChannelCommission::ChannelNextId` (r:1 w:0)
	/// Proof: `ChannelCommission::ChannelNextId` (`max_values`: Some(1), `max_size`: None, mode: `Measured`)
	/// The range of component `x` is `[1, 30]`.
	fn on_initialize(x: u32, ) -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `347`
		//  Estimated: `1832`
		// Minimum execution time: 0_000 picoseconds.
		Weight::from_parts(133_647_144, 0)
			.saturating_add(Weight::from_parts(0, 1832))
			// Standard Error: 66_075
			.saturating_add(Weight::from_parts(220_865, 0).saturating_mul(x.into()))
			.saturating_add(T::DbWeight::get().reads(1))
	}

	fn set_channel_lst_shares(x: u32, ) -> Weight {
		Weight::from_parts(43_239_575, 3597)
			.saturating_add(Weight::from_parts(5_355_920, 0).saturating_mul(x.into()))
			.saturating_add(T::DbWeight::get().reads(2_u64))
			.saturating_add(T::DbWeight::get().reads((1_u64).saturating_mul(x.into())))
			.saturating_add(T::DbWeight::get().writes(2_u64))
			.saturating_add(T::DbWeight::get().writes((1_u64).saturating_mul(x.into())))
			.saturating_add(Weight::from_parts(0, 2499).saturating_mul(x.into()))
	}
}
