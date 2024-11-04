use anyhow::anyhow;
use std::{collections::HashMap, sync::Arc};
use sc_service::TaskManager;
use tesseract_primitives::{config::RelayerConfig, IsmpProvider};
use tesseract_messaging::relay;
use tesseract_substrate::{SubstrateClient, SubstrateConfig};
use ismp::host::StateMachine;
use transaction_fees::TransactionPayment;
use subxt_utils::Hyperbridge;

/// Configure and start a local relayer between two chains
pub async fn start_local_relayer() -> Result<(), anyhow::Error> {
    // Create configs for both chains
    let chain_a_config = SubstrateConfig {
        state_machine: StateMachine::Substrate(2000),
        hashing: None,
        consensus_state_id: Some("PARA".to_string()),
        rpc_ws: "ws://127.0.0.1:9990".to_string(),
        max_rpc_payload_size: None,
        signer: Some(
            "0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a".to_string(),
        ),
        latest_height: None,
        max_concurent_queries: None,
    };

    let chain_b_config = SubstrateConfig {
        state_machine: StateMachine::Polkadot(3453),
        hashing: None,
        consensus_state_id: Some("PARA".to_string()),
        rpc_ws: "ws://127.0.0.1:9991".to_string(),
        max_rpc_payload_size: None,
        signer: Some(
            "0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a".to_string(),
        ),
        latest_height: None,
        max_concurent_queries: None,
    };

    // Initialize clients
    let chain_a_client = SubstrateClient::<Hyperbridge>::new(chain_a_config).await?;
    let chain_b_client = SubstrateClient::<Hyperbridge>::new(chain_b_config).await?;

    // Setup transaction payment database
    let tx_payment = Arc::new(
        TransactionPayment::initialize("/tmp/dev.db")
            .await
            .map_err(|err| anyhow!("Error initializing database: {err:?}"))?,
    );

    // Setup task manager
    let tokio_handle = tokio::runtime::Handle::current();
    let task_manager = TaskManager::new(tokio_handle, None)?;

    // Create client map for the relayer
    let chain_a_provider = Arc::new(chain_a_client.clone()) as Arc<dyn IsmpProvider>;
    let chain_b_provider = Arc::new(chain_b_client.clone()) as Arc<dyn IsmpProvider>;

    let mut client_map = HashMap::new();
    client_map.insert(chain_a_client.state_machine_id().state_id, chain_a_provider.clone());
    client_map.insert(chain_b_client.state_machine_id().state_id, chain_b_provider.clone());

    // Start the relayer
    relay(
        chain_a_client,
        chain_b_provider,
        RelayerConfig::default(),
        StateMachine::Kusama(3453), // Coprocessor ID
        tx_payment,
        client_map,
        &task_manager,
    )
    .await?;

    // Keep the relayer running
    futures::future::pending::<()>().await;
    
    Ok(())
}

#[tokio::main]
async fn main() -> Result<(), anyhow::Error> {
    start_local_relayer().await
} 