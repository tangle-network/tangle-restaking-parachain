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
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Autogenerated weights for bifrost_asset_registry
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-09-14, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! HOSTNAME: `bifrost-jenkins`, CPU: `Intel(R) Xeon(R) CPU E5-26xx v4`
//! WASM-EXECUTION: Compiled, CHAIN: Some("bifrost-kusama-local"), DB CACHE: 1024

// Executed Command:
// target/release/bifrost
// benchmark
// pallet
// --chain=bifrost-kusama-local
// --steps=50
// --repeat=20
// --pallet=bifrost_asset_registry
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --output=./pallets/asset-registry/src/weights.rs
// --template=./weight-template/pallet-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions needed for bifrost_asset_registry.
pub trait WeightInfo {
	fn register_native_asset() -> Weight;
	fn update_native_asset() -> Weight;
	fn register_token_metadata() -> Weight;
	fn register_Lst_metadata() -> Weight;
	fn register_vstoken_metadata() -> Weight;
	fn register_vsbond_metadata() -> Weight;
	fn register_location() -> Weight;
	fn force_set_location() -> Weight;
	fn update_currency_metadata() -> Weight;
}

// For backwards compatibility and tests
impl WeightInfo for () {
	/// Storage: AssetRegistry LocationToCurrencyIds (r:1 w:1)
	/// Proof Skipped: AssetRegistry LocationToCurrencyIds (max_values: None, max_size: None, mode: Measured)
	/// Storage: AssetRegistry CurrencyIdToLocations (r:1 w:1)
	/// Proof Skipped: AssetRegistry CurrencyIdToLocations (max_values: None, max_size: None, mode: Measured)
	/// Storage: AssetRegistry AssetMetadatas (r:1 w:1)
	/// Proof Skipped: AssetRegistry AssetMetadatas (max_values: None, max_size: None, mode: Measured)
	fn register_native_asset() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `118`
		//  Estimated: `3583`
		// Minimum execution time: 52_056_000 picoseconds.
		Weight::from_parts(53_012_000, 3583)
			.saturating_add(RocksDbWeight::get().reads(3_u64))
			.saturating_add(RocksDbWeight::get().writes(3_u64))
	}
	/// Storage: AssetRegistry LocationToCurrencyIds (r:1 w:1)
	/// Proof Skipped: AssetRegistry LocationToCurrencyIds (max_values: None, max_size: None, mode: Measured)
	/// Storage: AssetRegistry CurrencyIdToLocations (r:1 w:1)
	/// Proof Skipped: AssetRegistry CurrencyIdToLocations (max_values: None, max_size: None, mode: Measured)
	/// Storage: AssetRegistry AssetMetadatas (r:1 w:1)
	/// Proof Skipped: AssetRegistry AssetMetadatas (max_values: None, max_size: None, mode: Measured)
	fn update_native_asset() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `250`
		//  Estimated: `3715`
		// Minimum execution time: 59_891_000 picoseconds.
		Weight::from_parts(60_869_000, 3715)
			.saturating_add(RocksDbWeight::get().reads(3_u64))
			.saturating_add(RocksDbWeight::get().writes(3_u64))
	}
	/// Storage: AssetRegistry NextTokenId (r:1 w:1)
	/// Proof Skipped: AssetRegistry NextTokenId (max_values: Some(1), max_size: None, mode: Measured)
	/// Storage: AssetRegistry CurrencyMetadatas (r:1 w:1)
	/// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	fn register_token_metadata() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `607`
		//  Estimated: `4072`
		// Minimum execution time: 46_860_000 picoseconds.
		Weight::from_parts(48_151_000, 4072)
			.saturating_add(RocksDbWeight::get().reads(2_u64))
			.saturating_add(RocksDbWeight::get().writes(2_u64))
	}
	/// Storage: AssetRegistry CurrencyMetadatas (r:2 w:1)
	/// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	fn register_Lst_metadata() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `779`
		//  Estimated: `6719`
		// Minimum execution time: 53_699_000 picoseconds.
		Weight::from_parts(54_646_000, 6719)
			.saturating_add(RocksDbWeight::get().reads(2_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: AssetRegistry CurrencyMetadatas (r:2 w:1)
	/// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	fn register_vstoken_metadata() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `705`
		//  Estimated: `6645`
		// Minimum execution time: 52_491_000 picoseconds.
		Weight::from_parts(53_682_000, 6645)
			.saturating_add(RocksDbWeight::get().reads(2_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: AssetRegistry CurrencyMetadatas (r:2 w:1)
	/// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	fn register_vsbond_metadata() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `763`
		//  Estimated: `6703`
		// Minimum execution time: 55_589_000 picoseconds.
		Weight::from_parts(56_804_000, 6703)
			.saturating_add(RocksDbWeight::get().reads(2_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
	/// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	/// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	/// Storage: AssetRegistry LocationToCurrencyIds (r:1 w:1)
	/// Proof Skipped: AssetRegistry LocationToCurrencyIds (max_values: None, max_size: None, mode: Measured)
	/// Storage: AssetRegistry CurrencyIdToLocations (r:1 w:1)
	/// Proof Skipped: AssetRegistry CurrencyIdToLocations (max_values: None, max_size: None, mode: Measured)
	/// Storage: AssetRegistry CurrencyIdToWeights (r:0 w:1)
	/// Proof Skipped: AssetRegistry CurrencyIdToWeights (max_values: None, max_size: None, mode: Measured)
	fn register_location() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `683`
		//  Estimated: `4148`
		// Minimum execution time: 45_469_000 picoseconds.
		Weight::from_parts(48_623_000, 4148)
			.saturating_add(RocksDbWeight::get().reads(3_u64))
			.saturating_add(RocksDbWeight::get().writes(3_u64))
	}
	/// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	/// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	/// Storage: AssetRegistry LocationToCurrencyIds (r:0 w:1)
	/// Proof Skipped: AssetRegistry LocationToCurrencyIds (max_values: None, max_size: None, mode: Measured)
	/// Storage: AssetRegistry CurrencyIdToWeights (r:0 w:1)
	/// Proof Skipped: AssetRegistry CurrencyIdToWeights (max_values: None, max_size: None, mode: Measured)
	/// Storage: AssetRegistry CurrencyIdToLocations (r:0 w:1)
	/// Proof Skipped: AssetRegistry CurrencyIdToLocations (max_values: None, max_size: None, mode: Measured)
	fn force_set_location() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `683`
		//  Estimated: `4148`
		// Minimum execution time: 52_878_000 picoseconds.
		Weight::from_parts(55_012_000, 4148)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(3_u64))
	}
	/// Storage: `AssetRegistry::CurrencyMetadatas` (r:1 w:1)
	/// Proof: `AssetRegistry::CurrencyMetadatas` (`max_values`: None, `max_size`: None, mode: `Measured`)
	fn update_currency_metadata() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `409`
		//  Estimated: `3874`
		// Minimum execution time: 12_000_000 picoseconds.
		Weight::from_parts(13_000_000, 3874)
			.saturating_add(RocksDbWeight::get().reads(1_u64))
			.saturating_add(RocksDbWeight::get().writes(1_u64))
	}
}
