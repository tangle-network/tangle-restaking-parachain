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

//! Autogenerated weights for tangle_system_maker
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
// --pallet=tangle_system_maker
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --output=./runtime/bifrost-kusama/src/weights/tangle_system_maker.rs
// --template=./weight-template/runtime-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions for tangle_system_maker.
pub struct TangleWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> tangle_system_maker::WeightInfo for TangleWeight<T> {
	// Storage: SystemMaker Infos (r:1 w:1)
	// Proof Skipped: SystemMaker Infos (max_values: None, max_size: None, mode: Measured)
	fn set_config() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `109`
		//  Estimated: `3574`
		// Minimum execution time: 32_211 nanoseconds.
		Weight::from_parts(33_399_000, 3574)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: Tokens Accounts (r:2 w:2)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: System Account (r:2 w:1)
	// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	fn charge() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1402`
		//  Estimated: `6196`
		// Minimum execution time: 122_457 nanoseconds.
		Weight::from_parts(124_486_000, 6196)
			.saturating_add(T::DbWeight::get().reads(5))
			.saturating_add(T::DbWeight::get().writes(3))
	}
	// Storage: SystemMaker Infos (r:0 w:1)
	// Proof Skipped: SystemMaker Infos (max_values: None, max_size: None, mode: Measured)
	fn close() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `0`
		//  Estimated: `0`
		// Minimum execution time: 22_412 nanoseconds.
		Weight::from_parts(22_806_000, 0)
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: Tokens Accounts (r:2 w:2)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: System Account (r:2 w:1)
	// Proof: System Account (max_values: None, max_size: Some(128), added: 2603, mode: MaxEncodedLen)
	fn payout() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1461`
		//  Estimated: `6196`
		// Minimum execution time: 114_158 nanoseconds.
		Weight::from_parts(116_409_000, 6196)
			.saturating_add(T::DbWeight::get().reads(5))
			.saturating_add(T::DbWeight::get().writes(3))
	}
	// Storage: SystemMaker Infos (r:2 w:0)
	// Proof Skipped: SystemMaker Infos (max_values: None, max_size: None, mode: Measured)
	// Storage: ParachainInfo ParachainId (r:1 w:0)
	// Proof: ParachainInfo ParachainId (max_values: Some(1), max_size: Some(4), added: 499, mode: MaxEncodedLen)
	// Storage: Tokens Accounts (r:2 w:0)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	fn on_idle() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `894`
		//  Estimated: `6834`
		// Minimum execution time: 54_792 nanoseconds.
		Weight::from_parts(55_872_000, 6834)
			.saturating_add(T::DbWeight::get().reads(5))
	}
}
