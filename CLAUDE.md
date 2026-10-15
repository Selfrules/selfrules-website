# selfrules-website

Il sito personale di Mattia De Luca, selfrules.org. Rifatto da capo a ottobre 2026 sul ramo `sito-2026`.

## Cosa vale oggi
- Posizionamento e testi decisi da Mattia il 13-14/10/2026. Fonti in `../immagine-online/` (testi-linkedin-v2.md, esperienze-v2.md, foglio-unico.md, scheda-21lab.md) e backlog in `../immagine-online/sito/backlog-sito.md` (Plane P16, IMG-20…36).
- Direzione visiva "Quaderno da GM", valori in `docs/design.md`. Riferimento disegnato su Magic Patterns: https://www.magicpatterns.com/c/5rhymh8xky8fnqdxwwcjyc (il codice di Magic Patterns non entra nel repo).
- Tutto quello che c'è in `docs/archivio/` è superato dalla struttura del 14/10/2026. Il sito di luglio è in `docs/archivio/sito-luglio-2026/`.

## Dove stanno i testi
- `src/content/index.ts`: storie (elenco), note (elenco), data di Adesso, email, LinkedIn.
- `src/content/storie/*.mdx`, `src/content/note/*.mdx`, `src/content/pagine/*.mdx`: i testi lunghi, uno per file.
- `src/content/errori.ts`: la pagina Errori.
- Il copy viene da questi file, non si inventa nel codice. Nomi di persone inventati, niente soci, incassi o margini di 21Lab. Il titolo a 21Lab è "GM".
- Voce: skill `voce-mattia` più `selfrules-voice`. Niente due punti nei testi, niente em dash, niente "non è X, è Y".

## Tecnica
Next.js 16 (App Router) su Vercel, Tailwind 4, MDX con `@next/mdx`, font con `next/font`. Animazioni in CSS (scroll-driven e View Transitions), nessuna libreria di animazione. Tema chiaro di base, scuro col sistema o con l'interruttore. Solo italiano per ora, l'inglese è IMG-13.

## Regole
- I redirect `/21lab-extra` e `/extra` in `vercel.json` servono ai coach di 21Lab, non si toccano.
- Il push su `main` pubblica selfrules.org: lo decide Mattia. Le anteprime si fanno sui rami, Vercel le pubblica da sole.
- Controlli prima di un push: `npm run lint && npm run build`, poi il sito guardato a 375 px e a 1280 px, chiaro e scuro.
