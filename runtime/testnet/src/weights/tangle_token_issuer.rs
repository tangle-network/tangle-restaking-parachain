// This file is part of Tangle.



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

//! Autogenerated weights for tangle_token_issuer
//!
//! THIS FILE WAS AUTO-GENERATED USING THE SUBSTRATE BENCHMARK CLI VERSION 4.0.0-dev
//! DATE: 2023-09-14, STEPS: `50`, REPEAT: 20, LOW RANGE: `[]`, HIGH RANGE: `[]`
//! HOSTNAME: `tangle-jenkins`, CPU: `Intel(R) Xeon(R) CPU E5-26xx v4`
//! WASM-EXECUTION: Compiled, CHAIN: Some("tangle-kusama-local"), DB CACHE: 1024

// Executed Command:
// target/release/tangle
// benchmark
// pallet
// --chain=tangle-kusama-local
// --steps=50
// --repeat=20
// --pallet=tangle_token_issuer
// --extrinsic=*
// --execution=wasm
// --wasm-execution=compiled
// --heap-pages=4096
// --output=./runtime/tangle-kusama/src/weights/tangle_token_issuer.rs
// --template=./weight-template/runtime-weight-template.hbs

#![cfg_attr(rustfmt, rustfmt_skip)]
#![allow(unused_parens)]
#![allow(unused_imports)]

use frame_support::{traits::Get, weights::{Weight, constants::RocksDbWeight}};
use sp_std::marker::PhantomData;

/// Weight functions for tangle_token_issuer.
pub struct TangleWeight<T>(PhantomData<T>);
impl<T: frame_system::Config> tangle_token_issuer::WeightInfo for TangleWeight<T> {
	// Storage: TokenIssuer IssueWhiteList (r:1 w:1)
	// Proof Skipped: TokenIssuer IssueWhiteList (max_values: None, max_size: None, mode: Measured)
	fn add_to_issue_whitelist() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `142`
		//  Estimated: `3607`
		// Minimum execution time: 34_320 nanoseconds.
		Weight::from_parts(35_020_000, 3607)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: TokenIssuer IssueWhiteList (r:1 w:1)
	// Proof Skipped: TokenIssuer IssueWhiteList (max_values: None, max_size: None, mode: Measured)
	fn remove_from_issue_whitelist() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `220`
		//  Estimated: `3685`
		// Minimum execution time: 34_889 nanoseconds.
		Weight::from_parts(36_249_000, 3685)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: TokenIssuer TransferWhiteList (r:1 w:1)
	// Proof Skipped: TokenIssuer TransferWhiteList (max_values: None, max_size: None, mode: Measured)
	fn add_to_transfer_whitelist() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `142`
		//  Estimated: `3607`
		// Minimum execution time: 33_724 nanoseconds.
		Weight::from_parts(34_537_000, 3607)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: TokenIssuer TransferWhiteList (r:1 w:1)
	// Proof Skipped: TokenIssuer TransferWhiteList (max_values: None, max_size: None, mode: Measured)
	fn remove_from_transfer_whitelist() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `220`
		//  Estimated: `3685`
		// Minimum execution time: 35_235 nanoseconds.
		Weight::from_parts(35_823_000, 3685)
			.saturating_add(T::DbWeight::get().reads(1))
			.saturating_add(T::DbWeight::get().writes(1))
	}
	// Storage: TokenIssuer IssueWhiteList (r:1 w:0)
	// Proof Skipped: TokenIssuer IssueWhiteList (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens Accounts (r:1 w:1)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens TotalIssuance (r:1 w:1)
	// Proof: Tokens TotalIssuance (max_values: None, max_size: Some(38), added: 2513, mode: MaxEncodedLen)
	fn issue() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1870`
		//  Estimated: `5335`
		// Minimum execution time: 104_659 nanoseconds.
		Weight::from_parts(106_259_000, 5335)
			.saturating_add(T::DbWeight::get().reads(4))
			.saturating_add(T::DbWeight::get().writes(2))
	}
	// Storage: TokenIssuer TransferWhiteList (r:1 w:0)
	// Proof Skipped: TokenIssuer TransferWhiteList (max_values: None, max_size: None, mode: Measured)
	// Storage: Tokens Accounts (r:2 w:2)
	// Proof: Tokens Accounts (max_values: None, max_size: Some(118), added: 2593, mode: MaxEncodedLen)
	// Storage: AssetRegistry CurrencyMetadatas (r:1 w:0)
	// Proof Skipped: AssetRegistry CurrencyMetadatas (max_values: None, max_size: None, mode: Measured)
	fn transfer() -> Weight {
		// Proof Size summary in bytes:
		//  Measured:  `1989`
		//  Estimated: `6176`
		// Minimum execution time: 118_862 nanoseconds.
		Weight::from_parts(121_698_000, 6176)
			.saturating_add(T::DbWeight::get().reads(4))
			.saturating_add(T::DbWeight::get().writes(2))
	}
}
