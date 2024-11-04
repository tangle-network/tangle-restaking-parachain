#! /bin/bash

# create raw chain spec
./target/release/tangle-parachain build-spec --chain template-rococo > artifacts/tangle-paseo.raw.json

# create genesis state
./target/release/tangle-parachain export-genesis-state --chain ./artifacts/tangle-paseo.raw.json > artifacts/tangle-paseo.genesis

# create wasm
./target/release/tangle-parachain export-genesis-wasm --chain ./artifacts/tangle-paseo.raw.json > artifacts/tangle-paseo.wasm
