# selfrules-website

Il sito personale di Mattia De Luca, selfrules.org. Rifatto da capo a ottobre 2026 sul ramo `sito-2026`.

## Cosa vale oggi
- Posizionamento e testi decisi da Mattia il 13-14/10/2026. Fonti in `../immagine-online/` (testi-linkedin-v2.md, esperienze-v2.md, foglio-unico.md, scheda-21lab.md) e backlog in `../immagine-online/sito/backlog-sito.md` (Plane P16, IMG-20…36).
- Direzione visiva dal 16/10/2026 sera: "Decidi tu" (`docs/design-racconto.md`), ramo `sito-2026-racconto`. Chi legge sceglie prima di scoprire cosa ha fatto Mattia, le barre verdi sono il segno che torna, foto in bicromia da `scripts/tratta-foto.py`. Le direzioni precedenti restano sui rami `sito-2026` ("Quaderno da GM", `docs/design.md`) e `sito-2026-redesign` ("Il nome come monumento", `docs/design-monumento.md`).
- Tutto quello che c'è in `docs/archivio/` è superato dalla struttura del 14/10/2026. Il sito di luglio è in `docs/archivio/sito-luglio-2026/`.

## Dove stanno i testi
- `src/content/index.ts`: storie (elenco), note (elenco), data di Adesso, email, LinkedIn.
- `src/content/storie/*.mdx`, `src/content/note/*.mdx`, `src/content/pagine/*.mdx`: i testi lunghi, uno per file.
- `src/content/errori.ts`: la pagina Errori.
- `src/content/decisioni.ts`: le tre decisioni del gioco. `src/content/palchi.ts`: la scena di ogni capitolo delle storie. `src/content/foto.ts`: foto, didascalie e crediti.
- Messaggio deciso da Mattia il 17/10: sei anni tra pagamenti, gestionali e integrazioni, prima sette anni in proprio fra design e sviluppo (mai "studio web"); "GM del 21Lab", palestra in provincia di Modena; il gestionale lo usano dieci clienti da ottobre, tutto il Lab dal 7 dicembre; cerca un team e un'azienda in cui investire i prossimi anni, disponibile da novembre 2026, il Lab resta in buone mani. Abita a Savignano sul Panaro, fino a maggio 2026 a Spilamberto. Le storie possono piegare un po' i fatti, ma devono tornare tra loro. Il ritratto è di Valentina Malavenda (valentinamalavenda.com).
- Il copy viene da questi file, non si inventa nel codice. Nomi di persone inventati, niente soci, incassi o margini di 21Lab. Il titolo a 21Lab è "GM".
- Le persone della palestra sono "clienti" (in inglese "clients"), mai "soci" o "members".
- Voce: skill `voce-mattia` più `selfrules-voice`. Niente due punti nei testi, niente em dash, niente "non è X, è Y".

## Tecnica
Next.js 16 (App Router) su Vercel, Tailwind 4, MDX con `@next/mdx`, Erode in locale con `next/font/local`. Animazioni in CSS (scroll-driven e View Transitions), nessuna libreria di animazione. Tema chiaro di base, scuro col sistema o con l'interruttore. Solo italiano per ora, l'inglese è IMG-13.

## Regole
- I redirect `/21lab-extra` e `/extra` in `vercel.json` servono ai coach di 21Lab, non si toccano. Gli indirizzi del sito vecchio (`/it/...`, `/en/...`) portano alle pagine nuove con redirect temporanei.
- Il push su `main` pubblica selfrules.org: lo decide Mattia (il 16/10/2026 ha dato il permesso per il redesign "Decidi tu"). Le anteprime si fanno sui rami, Vercel le pubblica da sole.
- Controlli prima di un push: `npm run lint && npm run build`, poi il sito guardato a 375 px e a 1280 px, chiaro e scuro.
