// Esporta tutti i testi del sito in file .md dentro testi/, uno per pagina, per farli rivedere a Mattia.
// Uso: node scripts/esporta-testi.mjs   (sovrascrive testi/, quindi si lancia prima che Mattia ci scriva)
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const { storie, note } = await import('../src/content/index.ts');
const { decisioni } = await import('../src/content/decisioni.ts');
const { errori } = await import('../src/content/errori.ts');

const OUT = 'testi';
mkdirSync(OUT, { recursive: true });
const leggi = (p) => readFileSync(p, 'utf8');
const scrivi = (nome, testo) => writeFileSync(join(OUT, nome), testo.replace(/\n{3,}/g, '\n\n').trimEnd() + '\n');
const testo = (s) => s.replace(/&apos;/g, "'").replace(/\{' '\}/g, ' ').replace(/\s+/g, ' ').trim();

// Le prop di <Testata titolo=... frase=... riga=...> di una pagina
function testata(file) {
  const s = leggi(file);
  const prendi = (k) => s.match(new RegExp(`${k}=(?:"([^"]*)"|\\{\`([^\`]*)\`\\})`))?.slice(1).find(Boolean);
  return ['titolo', 'frase', 'riga'].map((k) => [k, prendi(k)]).filter(([, v]) => v);
}

// Un file MDX reso leggibile: i capitoli diventano titoli, i componenti diventano note tra parentesi quadre
function mdx(file) {
  return leggi(file)
    .replace(/<Capitolo titolo="([^"]+)"[^>]*>/g, '## $1')
    .replace(/<\/Capitolo>/g, '')
    .replace(/<ScenaInLinea[^>]*\/>/g, '')
    .replace(/<DecidiStoria[^>]*\/>/g, '[qui c\'è la decisione del gioco, testo in 01-home.md]')
    .replace(/<Foto (?:id|schermata)="([^"]+)"[^>]*\/>/g, '[foto: $1, didascalia in 13-didascalie.md]')
    .replace(/<Annuncio \/>/g, '[annuncio di CasaHunter ridisegnato]');
}

const istruzioni = `> Scrivi pure sopra il testo, oppure sotto con "MATTIA:" davanti. Io riporto tutto nel sito.\n\n`;

// Home: i testi stanno nel codice della pagina, li tiro fuori a mano dai blocchi <p>, <h1>, <h2>
{
  const s = leggi('src/app/page.tsx');
  const blocchi = [...s.matchAll(/<(h1|h2|h3|p|a|Link)\b[^>]*>([\s\S]*?)<\/\1>/g)]
    .map(([, tag, corpo]) => [tag, testo(corpo.replace(/<[^>]+>/g, ''))])
    .filter(([, t]) => t && !t.includes('{') && !t.includes('→'));
  let md = `# Home\n\n${istruzioni}`;
  for (const [tag, t] of blocchi) md += tag.startsWith('h') ? `## ${t}\n\n` : `${t}\n\n`;
  md += `---\n\n# Il gioco, le tre decisioni\n\n`;
  for (const d of decisioni) {
    md += `## ${d.nome}\n\nDove: ${d.dove}\n\nScena: ${d.scena}\n\nDomanda: ${d.domanda}\n\n`;
    md += d.scelte.map((c) => `- Risposta ${c.id}${c.id === d.mia ? ' (la mia)' : ''}: ${c.testo}`).join('\n') + '\n\n';
    md += `Se sceglie come me: ${d.stessa}\n\nSe sceglie altro: ${d.diversa}\n\nCosa ho fatto: ${d.fatto}\n\n${d.mestiere}\n\n`;
    md += `Numero grande: ${d.numero}, ${d.numeroDetto}\n\nSotto le barre: ${d.barre.dopo}\n\n`;
  }
  scrivi('01-home.md', md);
}

// Elenco delle storie e le tre storie
{
  let md = `# Storie, l'elenco\n\n${istruzioni}`;
  for (const [k, v] of testata('src/app/storie/page.tsx')) md += `${k}: ${v}\n\n`;
  for (const s of storie) {
    md += `## ${s.titolo}\n\nNumero grande: ${s.numero}\n\nAzienda e ruolo: ${s.azienda}, ${s.periodo}, ${s.ruolo}\n\nRiassunto: ${s.riassunto}\n\nSe hai un minuto: ${s.fretta}\n\nRiga piccola: ${s.rigaPiccola}\n\nBottone: ${s.link}\n\n`;
  }
  scrivi('02-storie-elenco.md', md);
  storie.forEach((s, i) => {
    scrivi(`0${3 + i}-storia-${s.slug}.md`, `# ${s.titolo}\n\n${istruzioni}${mdx(`src/content/storie/${s.slug}.mdx`)}`);
  });
}

// Errori
{
  let md = `# Errori\n\n${istruzioni}`;
  for (const [k, v] of testata('src/app/errori/page.tsx')) md += `${k}: ${v}\n\n`;
  for (const e of errori) {
    md += `## ${e.numero}. ${e.titolo}\n\nCosto: ${e.costo} ${e.costoSpiegato}\n\n${e.scena.join('\n\n')}\n\nLa regola: ${e.regola}\n\n`;
  }
  const s = leggi('src/app/errori/page.tsx');
  md += `## In fondo alla pagina\n\n`;
  for (const [, t] of s.matchAll(/<(?:p|figcaption)\b[^>]*>([\s\S]*?)<\/(?:p|figcaption)>/g)) md += `${testo(t)}\n\n`;
  scrivi('06-errori.md', md);
}

// Come lavoro, Adesso
{
  let md = `# Come lavoro\n\n${istruzioni}`;
  for (const [k, v] of testata('src/app/come-lavoro/page.tsx')) md += `${k}: ${v}\n\n`;
  scrivi('07-come-lavoro.md', md + mdx('src/content/pagine/come-lavoro.mdx'));

  md = `# Adesso\n\n${istruzioni}`;
  for (const [k, v] of testata('src/app/adesso/page.tsx')) md += `${k}: ${v}\n\n`;
  md += `I due numeri in alto: "giorni da GM del 21Lab" e "giorni prima che tutto il Lab usi il gestionale nuovo".\n\n`;
  scrivi('08-adesso.md', md + mdx('src/content/pagine/adesso.mdx'));
}

// Note
{
  let md = `# Note, l'elenco\n\n${istruzioni}`;
  for (const [k, v] of testata('src/app/note/page.tsx')) md += `${k}: ${v}\n\n`;
  for (const n of note) md += `## ${n.titolo}\n\n${n.riga}\n\n`;
  scrivi('09-note-elenco.md', md);
  note.forEach((n, i) => scrivi(`1${i}-nota-${n.slug}.md`, `# ${n.titolo}\n\n${istruzioni}Riga sotto il titolo: ${n.riga}\n\n${mdx(`src/content/note/${n.slug}.mdx`)}`));
}

// Didascalie, scene delle storie, piede di pagina
{
  let md = `# Didascalie e testi piccoli\n\n${istruzioni}## Didascalie delle foto e delle schermate\n\n`;
  const pezzi = leggi('src/content/foto.ts').split(/^ {2}(\w+): \{/m);
  for (let i = 1; i < pezzi.length; i += 2) {
    const did = pezzi[i + 1].match(/didascalia: '((?:[^'\\]|\\.)*)'/)?.[1];
    if (did) md += `- ${pezzi[i]}: ${did.replace(/\\u2019/g, '’').replace(/\\'/g, "'")}\n`;
  }
  md += `\n## Le scene delle storie (numeri grandi e didascalie sul palco)\n\n`;
  for (const [, campo, t] of leggi('src/content/palchi.ts').matchAll(/(numero|detto|didascalia): '((?:[^'\\]|\\.)*)'/g)) {
    md += `- ${campo}: ${t.replace(/\\u2019/g, '’')}\n`;
  }
  for (const f of ['src/components/Palco.tsx', 'src/components/Annuncio.tsx', 'src/components/TrePaesi.tsx', 'src/components/PieDiPagina.tsx', 'src/components/Scrivimi.tsx']) {
    md += `\n## ${f.split('/').pop().replace('.tsx', '')}\n\n`;
    for (const [, t] of leggi(f).matchAll(/<(?:p|figcaption|h2|dd|summary)\b[^>]*>([^<{]{12,}?)</g)) md += `- ${testo(t)}\n`;
  }
  scrivi('13-didascalie.md', md);
}

console.log(readdirSync(OUT).join('\n'));
