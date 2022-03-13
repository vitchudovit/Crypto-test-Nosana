[package]
name = "solana-account-decoder"
version = "1.10.2"
description = "Solana account decoder"
authors = ["Solana Maintainers <maintainers@solana.foundation>"]
repository = "https://github.com/solana-labs/solana"
homepage = "https://solana.com/"
documentation = "https://docs.rs/solana-account-decoder"
license = "Apache-2.0"
edition = "2021"

[dependencies]
Inflector = "0.11.4"
base64 = "0.13.0"
bincode = "1.3.3"
bs58 = "0.4.0"
bv = "0.11.1"
lazy_static = "1.4.0"
serde = "1.0.136"
serde_derive = "1.0.103"
serde_json = "1.0.79"
solana-config-program = { path = "../programs/config", version = "=1.10.2" }
solana-sdk = { path = "../sdk", version = "=1.10.2" }
solana-vote-program = { path = "../programs/vote", version = "=1.10.2" }
spl-token = { version = "=3.2.0", features = ["no-entrypoint"] }
thiserror = "1.0"
zstd = "0.11.0"

[package.metadata.docs.rs]
targets = ["x86_64-unknown-linux-gnu"]
