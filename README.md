# Blocks Subgraph

A subgraph that indexes block data for EVM networks.

## Setup

```bash
yarn install
```

## Deploy Workflow

### 1. Generate subgraph manifest for your network

```bash
yarn generate <network>
```

**Supported networks:**
- `mainnet`
- `arbitrum-one`
- `optimism`
- `polygon`
- `base`
- etc.

### 2. Build the subgraph

```bash
yarn build
```

### 3. Deploy

```bash
yarn deploy --studio <subgraph-name>
# or
yarn deploy --product hosted-service <github-user>/<subgraph-name>
```

## Example: Deploy to Arbitrum One

```bash
yarn generate arbitrum-one
yarn build
yarn deploy --studio arbitrum-one-blocks
```

## Architecture

- `subgraph.template.yaml` - Template with `{{network}}` placeholder
- `scripts/generate-subgraph.ts` - Generates `subgraph.yaml` for a specific network
- `src/mappings/blocks.ts` - Block handler that indexes all block data

### Note

The `ConverterRegistryContract` in ABIs and subgraph.yaml is a dummy contract used to pass formatting checks. Each block is handled automatically via the `blockHandlers` configuration.
