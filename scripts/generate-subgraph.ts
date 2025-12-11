import * as fs from 'fs';
import * as path from 'path';

const network = process.argv[2];

if (!network) {
  console.error('Usage: npx tsx scripts/generate-subgraph.ts <network>');
  console.error('Example: npx tsx scripts/generate-subgraph.ts arbitrum-one');
  process.exit(1);
}

const templatePath = path.join(__dirname, '..', 'subgraph.template.yaml');
const outputPath = path.join(__dirname, '..', 'subgraph.yaml');

const template = fs.readFileSync(templatePath, 'utf8');
const output = template.replace(/\{\{network\}\}/g, network);

fs.writeFileSync(outputPath, output);
console.log(`Generated subgraph.yaml for network: ${network}`);

