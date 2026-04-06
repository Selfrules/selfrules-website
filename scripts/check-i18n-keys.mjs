import { readFileSync } from 'fs';

const en = JSON.parse(readFileSync('src/messages/en.json', 'utf8'));
const it = JSON.parse(readFileSync('src/messages/it.json', 'utf8'));

function getKeys(obj, prefix = '') {
  return Object.keys(obj).flatMap((key) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      return getKeys(obj[key], path);
    }
    return [path];
  });
}

const enKeys = getKeys(en).sort();
const itKeys = getKeys(it).sort();
const missingInIt = enKeys.filter((k) => !itKeys.includes(k));
const missingInEn = itKeys.filter((k) => !enKeys.includes(k));

if (missingInIt.length || missingInEn.length) {
  if (missingInIt.length) console.error('Missing in it.json:', missingInIt);
  if (missingInEn.length) console.error('Missing in en.json:', missingInEn);
  process.exit(1);
}

console.log(`i18n keys in sync (${enKeys.length} keys)`);
