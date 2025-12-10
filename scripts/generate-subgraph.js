#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const network = process.argv[2];

if (!network) {
  console.error('Usage: node scripts/generate-subgraph.js <network>');
  console.error('Example: node scripts/generate-subgraph.js arbitrum-one');
  process.exit(1);
}

const templatePath = path.join(__dirname, '..', 'subgraph.template.yaml');
const outputPath = path.join(__dirname, '..', 'subgraph.yaml');

const template = fs.readFileSync(templatePath, 'utf8');
const output = template.replace(/\{\{network\}\}/g, network);

fs.writeFileSync(outputPath, output);
console.log(`Generated subgraph.yaml for network: ${network}`);

