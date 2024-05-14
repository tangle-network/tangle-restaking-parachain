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

use cumulus_primitives_core::ParaId;
use frame_benchmarking::{account, whitelisted_caller};
use hex_literal::hex;
use sc_chain_spec::Properties;
use sc_service::ChainType;
use sc_telemetry::TelemetryEndpoints;
use sp_core::{crypto::UncheckedInto, sr25519};
use sp_runtime::traits::Zero;
use tangle_polkadot_runtime::{
	constants::currency::DOLLARS, AccountId, AssetRegistryConfig, Balance, BalancesConfig,
	BlockNumber, CollatorSelectionConfig, CouncilMembershipConfig, IndicesConfig,
	OracleMembershipConfig, ParachainInfoConfig, PolkadotXcmConfig, RuntimeGenesisConfig,
	SS58Prefix, SalpConfig, SessionConfig, SystemConfig, TechnicalMembershipConfig, TokensConfig,
	VestingConfig, WASM_BINARY,
};
use tangle_primitives::{CurrencyId, CurrencyId::*, TokenInfo, TokenSymbol, DOT_TOKEN_ID};
use tangle_runtime_common::AuraId;

use super::TELEMETRY_URL;
use crate::chain_spec::{get_account_id_from_seed, get_from_seed, RelayExtensions};

const DEFAULT_PROTOCOL_ID: &str = "tangle_polkadot";

/// Specialized `ChainSpec` for the tangle-polkadot runtime.
pub type ChainSpec = sc_service::GenericChainSpec<RuntimeGenesisConfig, RelayExtensions>;

#[allow(non_snake_case)]
pub fn ENDOWMENT() -> u128 {
	1_000_000 * DOLLARS
}

pub const PARA_ID: u32 = 2030;

fn tangle_polkadot_properties() -> Properties {
	let mut properties = sc_chain_spec::Properties::new();
	let mut token_symbol: Vec<String> = vec![];
	let mut token_decimals: Vec<u32> = vec![];
	[
		// native token
		CurrencyId::Native(TokenSymbol::BNC),
	]
	.iter()
	.for_each(|token| {
		token_symbol.push(token.symbol().expect("Token symbol expected").to_string());
		token_decimals.push(token.decimals().expect("Token decimals expected") as u32);
	});

	properties.insert("tokenSymbol".into(), token_symbol.into());
	properties.insert("tokenDecimals".into(), token_decimals.into());
	properties.insert("ss58Format".into(), SS58Prefix::get().into());

	properties
}

pub fn tangle_polkadot_genesis(
	invulnerables: Vec<(AccountId, AuraId)>,
	balances: Vec<(AccountId, Balance)>,
	vestings: Vec<(AccountId, BlockNumber, BlockNumber, Balance)>,
	id: ParaId,
	tokens: Vec<(AccountId, CurrencyId, Balance)>,
	council_membership: Vec<AccountId>,
	technical_committee_membership: Vec<AccountId>,
	salp_multisig_key: AccountId,
	asset_registry: (
		Vec<(CurrencyId, Balance, Option<(String, String, u8)>)>,
		Vec<CurrencyId>,
		Vec<(CurrencyId, u32, u32, u32)>,
	),
	oracle_membership: Vec<AccountId>,
) -> RuntimeGenesisConfig {
	RuntimeGenesisConfig {
		system: SystemConfig {
			code: WASM_BINARY.expect("WASM binary was not build, please build it!").to_vec(),
			_config: Default::default(),
		},
		balances: BalancesConfig { balances },
		indices: IndicesConfig { indices: vec![] },
		democracy: Default::default(),
		council_membership: CouncilMembershipConfig {
			members: council_membership.try_into().expect("convert error!"),
			phantom: Default::default(),
		},
		technical_membership: TechnicalMembershipConfig {
			members: technical_committee_membership.try_into().expect("convert error!"),
			phantom: Default::default(),
		},
		oracle_membership: OracleMembershipConfig {
			members: oracle_membership.try_into().expect("convert error!"),
			phantom: Default::default(),
		},
		council: Default::default(),
		technical_committee: Default::default(),
		treasury: Default::default(),
		phragmen_election: Default::default(),
		parachain_info: ParachainInfoConfig { parachain_id: id, _config: Default::default() },
		collator_selection: CollatorSelectionConfig {
			invulnerables: invulnerables.iter().cloned().map(|(acc, _)| acc).collect(),
			candidacy_bond: Zero::zero(),
			..Default::default()
		},
		session: SessionConfig {
			keys: invulnerables
				.iter()
				.cloned()
				.map(|(acc, aura)| {
					(
						acc.clone(),                                   // account id
						acc,                                           // validator id
						tangle_polkadot_runtime::SessionKeys { aura }, // session keys
					)
				})
				.collect(),
		},
		aura: Default::default(),
		aura_ext: Default::default(),
		parachain_system: Default::default(),
		vesting: VestingConfig { vesting: vestings },
		tokens: TokensConfig { balances: tokens },
		asset_registry: AssetRegistryConfig {
			currency: asset_registry.0,
			vcurrency: asset_registry.1,
			vsbond: asset_registry.2,
			phantom: Default::default(),
		},
		polkadot_xcm: PolkadotXcmConfig { safe_xcm_version: Some(2), _config: Default::default() },
		salp: SalpConfig { initial_multisig_account: Some(salp_multisig_key) },
		lst_voting: Default::default(),
		transaction_payment: Default::default(),
		zenlink_protocol: Default::default(),
	}
}

fn development_config_genesis(id: ParaId) -> RuntimeGenesisConfig {
	let endowed_accounts = vec![
		get_account_id_from_seed::<sr25519::Public>("Alice"),
		whitelisted_caller(), // Benchmarking whitelist_account
	];
	let balances = endowed_accounts.iter().cloned().map(|x| (x, ENDOWMENT())).collect();
	let vestings = endowed_accounts
		.iter()
		.cloned()
		.map(|x| (x, 0u32, 100u32, ENDOWMENT() / 4))
		.collect();
	let tokens = endowed_accounts
		.iter()
		.flat_map(|x| vec![(x.clone(), Token(TokenSymbol::DOT), ENDOWMENT())])
		.collect();

	let council_membership = vec![get_account_id_from_seed::<sr25519::Public>("Alice")];
	let technical_committee_membership = vec![get_account_id_from_seed::<sr25519::Public>("Alice")];
	let oracle_membership = vec![get_account_id_from_seed::<sr25519::Public>("Alice")];
	let salp_multisig: AccountId =
		hex!["49daa32c7287890f38b7e1a8cd2961723d36d20baa0bf3b82e0c4bdda93b1c0a"].into();

	tangle_polkadot_genesis(
		vec![(
			get_account_id_from_seed::<sr25519::Public>("Alice"),
			get_from_seed::<AuraId>("Alice"),
		)],
		balances,
		vestings,
		id,
		tokens,
		council_membership,
		technical_committee_membership,
		salp_multisig,
		(vec![], vec![], vec![]),
		oracle_membership,
	)
}

pub fn development_config() -> Result<ChainSpec, String> {
	Ok(ChainSpec::from_genesis(
		"tangle Polkadot Development",
		"tangle_polkadot_dev",
		ChainType::Development,
		move || development_config_genesis(PARA_ID.into()),
		vec![],
		None,
		Some(DEFAULT_PROTOCOL_ID),
		None,
		Some(tangle_polkadot_properties()),
		RelayExtensions { relay_chain: "polkadot-dev".into(), para_id: PARA_ID },
	))
}

fn local_config_genesis(id: ParaId) -> RuntimeGenesisConfig {
	let endowed_accounts = vec![
		get_account_id_from_seed::<sr25519::Public>("Alice"),
		get_account_id_from_seed::<sr25519::Public>("Bob"),
		get_account_id_from_seed::<sr25519::Public>("Charlie"),
		get_account_id_from_seed::<sr25519::Public>("Dave"),
		get_account_id_from_seed::<sr25519::Public>("Eve"),
		get_account_id_from_seed::<sr25519::Public>("Ferdie"),
		get_account_id_from_seed::<sr25519::Public>("Alice//stash"),
		get_account_id_from_seed::<sr25519::Public>("Bob//stash"),
		get_account_id_from_seed::<sr25519::Public>("Charlie//stash"),
		get_account_id_from_seed::<sr25519::Public>("Dave//stash"),
		get_account_id_from_seed::<sr25519::Public>("Eve//stash"),
		get_account_id_from_seed::<sr25519::Public>("Ferdie//stash"),
		whitelisted_caller(), // Benchmarking whitelist_account
		account("bechmarking_account_1", 0, 0),
	];
	let balances = endowed_accounts.iter().cloned().map(|x| (x, ENDOWMENT())).collect();
	let vestings = endowed_accounts
		.iter()
		.cloned()
		.map(|x| (x, 0u32, 100u32, ENDOWMENT() / 4))
		.collect();
	let tokens = endowed_accounts
		.iter()
		.flat_map(|x| vec![(x.clone(), Token2(DOT_TOKEN_ID), ENDOWMENT() * 4_000_000)])
		.collect();
	let council_membership = vec![get_account_id_from_seed::<sr25519::Public>("Alice")];
	let technical_committee_membership = vec![get_account_id_from_seed::<sr25519::Public>("Alice")];
	let oracle_membership = vec![get_account_id_from_seed::<sr25519::Public>("Alice")];
	let salp_multisig: AccountId =
		hex!["49daa32c7287890f38b7e1a8cd2961723d36d20baa0bf3b82e0c4bdda93b1c0a"].into();
	let currency = vec![
		(Native(TokenSymbol::BNC), DOLLARS / 100, None),
		(
			Token2(DOT_TOKEN_ID),
			DOLLARS / 1000_000,
			Some((String::from("Polkadot DOT"), String::from("DOT"), 10u8)),
		),
	];
	let vcurrency = vec![VSToken2(DOT_TOKEN_ID), lst(TokenSymbol::BNC), lst2(DOT_TOKEN_ID)];

	tangle_polkadot_genesis(
		vec![
			(
				get_account_id_from_seed::<sr25519::Public>("Alice"),
				get_from_seed::<AuraId>("Alice"),
			),
			(get_account_id_from_seed::<sr25519::Public>("Bob"), get_from_seed::<AuraId>("Bob")),
		],
		balances,
		vestings,
		id,
		tokens,
		council_membership,
		technical_committee_membership,
		salp_multisig,
		(currency, vcurrency, vec![]),
		oracle_membership,
	)
}

pub fn local_testnet_config() -> Result<ChainSpec, String> {
	Ok(ChainSpec::from_genesis(
		"tangle Polkadot Local Testnet",
		"tangle_polkadot_local_testnet",
		ChainType::Local,
		move || local_config_genesis(PARA_ID.into()),
		vec![],
		None,
		Some(DEFAULT_PROTOCOL_ID),
		None,
		Some(tangle_polkadot_properties()),
		RelayExtensions { relay_chain: "polkadot-local".into(), para_id: PARA_ID },
	))
}

pub fn chainspec_config() -> ChainSpec {
	ChainSpec::from_genesis(
		"tangle Polkadot",
		"tangle_polkadot",
		ChainType::Live,
		move || tangle_polkadot_config_genesis(PARA_ID.into()),
		vec![],
		TelemetryEndpoints::new(vec![(TELEMETRY_URL.into(), 0)]).ok(),
		Some(DEFAULT_PROTOCOL_ID),
		None,
		Some(tangle_polkadot_properties()),
		RelayExtensions { relay_chain: "polkadot".into(), para_id: PARA_ID },
	)
}

fn tangle_polkadot_config_genesis(id: ParaId) -> RuntimeGenesisConfig {
	let invulnerables: Vec<(AccountId, AuraId)> = vec![
		(
			// dpEZwz5nHxEjQXcm3sjy6NTz83EGcBRXMBSyuuWSguiVGJB
			hex!["5c7e9ccd1045cac7f8c5c77a79c87f44019d1dda4f5032713bda89c5d73cb36b"].into(),
			hex!["5c7e9ccd1045cac7f8c5c77a79c87f44019d1dda4f5032713bda89c5d73cb36b"]
				.unchecked_into(),
		),
		(
			// duNwrtscWpfuTzRkjtt431kUj1gsfwbPi1bzdQL4cmk9QAa
			hex!["606b0aad375ae1715fbe6a07315136a8e9c1c84a91230f6a0c296c2953581335"].into(),
			hex!["606b0aad375ae1715fbe6a07315136a8e9c1c84a91230f6a0c296c2953581335"]
				.unchecked_into(),
		),
		(
			// gPQG97HPe54fJpLoFePwm3fxdJaU2VV71hYbqd4RJcNeQfe
			hex!["ce42cea2dd0d4ac87ccdd5f0f2e1010955467f5a37587cf6af8ee2b4ba781034"].into(),
			hex!["ce42cea2dd0d4ac87ccdd5f0f2e1010955467f5a37587cf6af8ee2b4ba781034"]
				.unchecked_into(),
		),
		(
			// frYfsZhdVuG6Ap6AyJQLSHVqtKmUyqxo6ohnrmGTDk2neXK
			hex!["b6ba81e73bd39203e006fc99cc1e41976745de2ea2007bf62ed7c9a48ccc5b1d"].into(),
			hex!["b6ba81e73bd39203e006fc99cc1e41976745de2ea2007bf62ed7c9a48ccc5b1d"]
				.unchecked_into(),
		),
	];

	let salp_multisig: AccountId =
		hex!["e4da05f08e89bf6c43260d96f26fffcfc7deae5b465da08669a9d008e64c2c63"].into();

	tangle_polkadot_genesis(
		invulnerables,
		vec![],
		vec![],
		id,
		vec![],
		vec![],
		vec![],
		salp_multisig,
		(vec![], vec![], vec![]),
		vec![],
	)
}