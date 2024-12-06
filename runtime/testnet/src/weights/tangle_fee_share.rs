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

//! Autogenerated weights for tangle_fee_share
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
// --pallet=tangle_fee_share
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --output=./runtime/bifrost-kusama/src/weights/tangle_fee_share.rs
// --template=./weight-template/runtime-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions for tangle_fee_share.
pub struct TangleWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> tangle_fee_share::WeightInfo for TangleWeight<T> {
	// Storage: FeeShare AutoEra (r:1 w:0)
	// Proof Skipped: FeeShare AutoEra (max_values: Some(1), max_size: None, mode: Measured)
	fn on_initialize() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `4`
		//  Estimated: `1489`
		// Minimum execution time: 7_333 nanoseconds.
		Weight::from_parts(7_571_000, 1489)
			.saturating_add(T::DbWeight::get().reads(1))
	}
	// Storage: FeeShare DistributionNextId (r:1 w:1)
	// Proof Skipped: FeeShare DistributionNextId (max_values: Some(1), max_size: None, mode: Measured)
	// Storage: FeeShare DistributionInfos (r:0 w:1)
	// Proof Skipped: FeeShare DistributionInfos (max_values: None, max_size: None, mode: Measured)
	fn create_distribution() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `4`
		//  Estimated: `1489`
		// Minimum execution time: 37_152 nanoseconds.
		Weight::from_parts(38_371_000, 1489)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(2))
	}
	// Storage: FeeShare DistributionInfos (r:1 w:1)
	// Proof Skipped: FeeShare DistributionInfos (max_values: None, max_size: None, mode: Measured)
	fn edit_distribution() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `139`
		//  Estimated: `3604`
		// Minimum execution time: 40_063 nanoseconds.
		Weight::from_parts(40_816_000, 3604)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: FeeShare AutoEra (r:0 w:1)
	// Proof Skipped: FeeShare AutoEra (max_values: Some(1), max_size: None, mode: Measured)
	fn set_era_length() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 23_201 nanoseconds.
		Weight::from_parts(23_949_000, 0)
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: FeeShare DistributionInfos (r:1 w:0)
	// Proof Skipped: FeeShare DistributionInfos (max_values: None, max_size: None, mode: Measured)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens Accounts (r:2 w:0)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	fn execute_distribute() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1616`
		//  Estimated: `6176`
		// Minimum execution time: 78_453 nanoseconds.
		Weight::from_parts(80_732_000, 6176)
			.saturating_add(T::DbWeight::get().reads(4))
	}
	// Storage: FeeShare DistributionInfos (r:1 w:1)
	// Proof Skipped: FeeShare DistributionInfos (max_values: None, max_size: None, mode: Measured)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens Accounts (r:2 w:0)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	fn delete_distribution() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1616`
		//  Estimated: `6176`
		// Minimum execution time: 80_872 nanoseconds.
		Weight::from_parts(82_734_000, 6176)
			.saturating_add(T::DbWeight::get().reads(4))
			.saturating_add(T::DbWeight::get().writes(1))
	}
}
