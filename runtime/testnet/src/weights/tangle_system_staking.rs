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

//! Autogenerated weights for tangle_system_staking
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
// --pallet=tangle_system_staking
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --output=./runtime/bifrost-kusama/src/weights/tangle_system_staking.rs
// --template=./weight-template/runtime-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions for tangle_system_staking.
pub struct TangleWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> tangle_system_staking::WeightInfo for TangleWeight<T> {
	// Storage: SystemStaking TokenList (r:1 w:0)
	// Proof Skipped: SystemStaking TokenList (max_values: Some(1), max_size: None, mode: Measured)
	// Storage: SystemStaking Round (r:1 w:0)
	// Proof Skipped: SystemStaking Round (max_values: Some(1), max_size: None, mode: Measured)
	// Storage: SystemStaking TokenStatus (r:2 w:0)
	// Proof Skipped: SystemStaking TokenStatus (max_values: None, max_size: None, mode: Measured)
	fn on_initialize() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `445`
		//  Estimated: `6385`
		// Minimum execution time: 28_850 nanoseconds.
		Weight::from_parts(29_556_000, 6385)
			.saturating_add(T::DbWeight::get().reads(4))
	}
	// Storage: SystemStaking TokenStatus (r:1 w:1)
	// Proof Skipped: SystemStaking TokenStatus (max_values: None, max_size: None, mode: Measured)
	// Storage: SystemStaking TokenList (r:1 w:1)
	// Proof Skipped: SystemStaking TokenList (max_values: Some(1), max_size: None, mode: Measured)
	fn token_config() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `109`
		//  Estimated: `3574`
		// Minimum execution time: 41_759 nanoseconds.
		Weight::from_parts(42_957_000, 3574)
			.saturating_add(T::DbWeight::get().reads(2))
			.saturating_add(T::DbWeight::get().writes(2))
	}
	// Storage: SystemStaking TokenStatus (r:1 w:1)
	// Proof Skipped: SystemStaking TokenStatus (max_values: None, max_size: None, mode: Measured)
	// Storage: Farming PoolInfos (r:1 w:0)
	// Proof Skipped: Farming PoolInfos (max_values: None, max_size: None, mode: Measured)
	fn refresh_token_info() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `403`
		//  Estimated: `3868`
		// Minimum execution time: 51_852 nanoseconds.
		Weight::from_parts(53_735_000, 3868)
			.saturating_add(T::DbWeight::get().reads(2))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: SystemStaking TokenStatus (r:1 w:0)
	// Proof Skipped: SystemStaking TokenStatus (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens Accounts (r:1 w:0)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	// Storage: LstMinting TokenPool (r:1 w:0)
	// Proof: LstMinting TokenPool (max_values: None, max_size: Some(38), added: 2513, mode: MaxEncodedLen)
	// Storage: Tokens TotalIssuance (r:1 w:0)
	// Proof: Tokens TotalIssuance (max_values: None, max_size: Some(38), added: 2513, mode: MaxEncodedLen)
	fn payout() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1190`
		//  Estimated: `4655`
		// Minimum execution time: 68_013 nanoseconds.
		Weight::from_parts(69_859_000, 4655)
			.saturating_add(T::DbWeight::get().reads(4))
	}
	fn on_redeem_success() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 1_959 nanoseconds.
		Weight::from_parts(2_084_000, 0)
	}
	fn on_redeemed() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 1_994 nanoseconds.
		Weight::from_parts(2_059_000, 0)
	}
	// Storage: SystemStaking TokenList (r:1 w:1)
	// Proof Skipped: SystemStaking TokenList (max_values: Some(1), max_size: None, mode: Measured)
	// Storage: SystemStaking TokenStatus (r:0 w:1)
	// Proof Skipped: SystemStaking TokenStatus (max_values: None, max_size: None, mode: Measured)
	fn delete_token() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `169`
		//  Estimated: `1654`
		// Minimum execution time: 22_823 nanoseconds.
		Weight::from_parts(23_707_000, 1654)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(2))
	}
}
