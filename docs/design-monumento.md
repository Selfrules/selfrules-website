# Il nome come monumento (redesign del 16/10/2026, ramo `sito-2026-redesign`)

Rifatto da zero con la skill design-taste-frontend, senza tenere niente del Quaderno da GM. Direzione `name-as-monument` (seed 1299446920), foglio completo in `.taste-skill/direction.json`. Il Quaderno da GM resta su `sito-2026` per il confronto.

L'idea: i tre posti dove sono nati i numeri di Mattia (un centro bowling il sabato sera, una telefonata, una palestra) passano sotto il suo nome, fermo e enorme. Ogni pagina apre col suo segno grande in rosso: il nome in home, il numero nelle storie, la parola nelle altre.

| Cosa | Chiaro | Scuro |
|---|---|---|
| Gesso (sfondo) | #F3F2EF | #121212 |
| Superficie e superficie 2 | #E8E6E1, #DCD9D2 | #1D1C1A, #282725 |
| Inchiostro | #141414 | #EBEBE9 |
| Grigio (testo secondario) | #57534D | #AAA69E |
| Ciliegia (nome, numeri, bottone) | #B0102C | #FF5A6E |

La palette del foglio era "Frost and slate": ho tenuto le proporzioni e preso i colori dal soggetto (gesso e gomma della palestra, rosso delle ciliegie di Vignola).

Caratteri. Libre Franklin 800 maiuscolo per il nome e i segni grandi, 700 per i titoli. Source Serif 4 per leggere, 17-19 px.

Foto. Archivi pubblici (Wikimedia Commons e Openverse), in bianco e nero, crediti in `assets/credits.json` e nel piè di pagina. Gli originali stanno in `assets/` e non vanno nel repo, le copie usate in `src/foto/`. Video del bowling in `public/video/`. Schermate di CasaHunter in bianco e nero. Il ritratto di Mattia, quando arriva, prende il posto della Rocca nel paragrafo della home.

Movimento. Nome che entra all'apertura, foto sotto il nome che cambiano scorrendo (solo da 1024 px in su), parti di ogni blocco che entrano una dopo l'altra, paragrafi del testo lungo uno alla volta, foto che si avvicinano piano, tiro di bowling in loop. Con "riduci movimento" o senza script tutto è subito visibile.

Controlli. `inspect.mjs` della skill su 12 pagine: 0 FAIL. Gli avvisi rimasti sono difendibili (nome fermo per tre schermate in home perché a ogni schermata cambia foto e storia, nessun bottone nella prima schermata delle pagine interne, video in home e non altrove).
