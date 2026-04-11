import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import logger from './logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class Database {
  constructor() {
    this.dataDir = join(__dirname, '../../data');
    this.ensureDataDir();
  }

  ensureDataDir() {
    if (!existsSync(this.dataDir)) {
      mkdirSync(this.dataDir, { recursive: true });
    }
  }

  getFilePath(name) {
    return join(this.dataDir, `${name}.json`);
  }

  read(name) {
    try {
      const filePath = this.getFilePath(name);
      if (!existsSync(filePath)) {
        return {};
      }
      const data = readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      logger.error(`Failed to read database ${name}:`, error);
      return {};
    }
  }

  write(name, data) {
    try {
      const filePath = this.getFilePath(name);
      writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
      return true;
    } catch (error) {
      logger.error(`Failed to write database ${name}:`, error);
      return false;
    }
  }

  get(name, key) {
    const data = this.read(name);
    return data[key];
  }

  set(name, key, value) {
    const data = this.read(name);
    data[key] = value;
    return this.write(name, data);
  }

  delete(name, key) {
    const data = this.read(name);
    delete data[key];
    return this.write(name, data);
  }

  has(name, key) {
    const data = this.read(name);
    return key in data;
  }

  clear(name) {
    return this.write(name, {});
  }
}

export default new Database();
