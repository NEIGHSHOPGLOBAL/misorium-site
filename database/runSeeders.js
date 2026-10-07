/**
 * Run Seeders (like php artisan db:seed).
 */

import dotenv from 'dotenv';
dotenv.config();

import { sequelize } from '../config/db.js';
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  const seedersDir = path.join(__dirname, 'seeders');
  const files = readdirSync(seedersDir).filter((f) => f.endsWith('.js')).sort();

  for (const file of files) {
    const mod = await import(pathToFileURL(path.join(seedersDir, file)).href);
    const seeder = mod.default;
    if (typeof seeder.up === 'function') {
      const queryInterface = sequelize.getQueryInterface();
      await seeder.up(queryInterface, sequelize.Sequelize);
      console.log(`✓ Seeded: ${file}`);
    }
  }
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
