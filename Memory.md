# Memory.md — selfrules-website

## Stato attuale (16/10/2026 sera)
- 16/10 sera: redesign "Decidi tu" sul ramo `sito-2026-racconto`, pubblicato su selfrules.org col permesso di Mattia. Direzione e valori in `docs/design-racconto.md`.
- L'idea: chi legge prende tre decisioni prima di scoprire cosa ha fatto Mattia (home e dentro ogni storia), le barre verdi come segno che torna, storie con un palco che cambia scena per capitolo, Come lavoro a capitoli che si aprono sul telefono, campo per scrivere che apre la posta.
- Foto in bicromia da `scripts/tratta-foto.py` (originali in `assets/`, fuori dal repo), schermate del gestionale con dati di prova e senza nomi. Carattere Erode in locale.
- Indirizzi del sito di luglio (`/it/...`, `/en/...`) rediretti alle pagine nuove in `vercel.json` (IMG-33).
- Decise da me il 16/10, da far confermare a Mattia: frasi in prima persona di Come lavoro tenute, errore n. 3 pubblico tenuto, scene "Immagina un sabato sera" e "chiringuito" tenute, link al CV vecchio tolto (il PDF è quello di luglio).
- Per tornare al sito di prima: Instant Rollback su Vercel al deploy g2sh7onzl del 21/07, oppure il tag git `sito-prima-del-16-10`.
- Mancano inglese (IMG-13), CV nuovo, le altre 5 note.

## Cronologia
- 2026-10-16 sera tardi — Giri 2-4 sul sito pubblicato: ricerca in `docs/ricerca-2026-10-16.md`, storie con la decisione che aspetta la scelta, Come lavoro a capitoli che si aprono, schermate leggibili e annuncio di CasaHunter ridisegnato, piede corto. Critica esterna passata da 6 a 7 su 10. Per tornare indietro: Instant Rollback su Vercel al deploy g2sh7onzl, o il tag git `sito-prima-del-16-10`.
- 2026-10-16 sera — Redesign "Decidi tu" da capo dopo il giudizio di Mattia sul "nome come monumento": ricerca su 16 siti personali e su lettura e attenzione, gioco delle decisioni, palco delle storie, critica di un lettore esterno (6/10, poi corretti i cinque punti), pubblicato su main.
- 2026-10-16 — Redesign "Il nome come monumento" su `sito-2026-redesign`: home, storie, errori, adesso, come lavoro, note; foto d'archivio con crediti, video di bowling, componente Foto nelle MDX.
- 2026-10-16 — Audit taste-skill e modifiche su `sito-2026`, anteprima Vercel rigenerata (link di 23 ore).
- 2026-10-15 — Sito nuovo su `sito-2026`, Plane IMG-12, 14, 20, 23-32 in In Progress. Magic Patterns usato per il disegno delle pagine interne nel progetto 5rhymh8xky8fnqdxwwcjyc.

> Storia precedente.

## 2026-05-21 — Sessione "clean slate v26"

**Trigger**: Mattia ha deciso di rifondare il sito perché il framing v25 (PM-traduttore, anti-job-seeker tech-oriented) non rappresenta più chi è dopo la decisione 21Lab (15/05/2026). Cita il motivo: "lasciare un buono stipendio per svegliarmi felice".

**Decisioni prese**:
1. Funzione del sito: personale/narrativo + blog. Niente lead-gen, niente vendita servizi.
2. Codebase v25 + design v25 dark terminal: **clean slate totale**. Si butta tutto, si riparte.
3. Timeline target: lancio prima di agosto 2026 (debutto ufficiale come DG 21Lab).
4. S1 tone-of-voice: **sbloccato** come P3 selfrules-website. Si lavorano in parallelo, convergenza intorno al 9 giugno per il copy IT.
5. Tesi-frase del sito: rimandata a post-S1.
6. Direzione visiva: rimandata, da preparare 3 mood board reali (A Quaderno di Vignola, B Slow tech italiano, C Studio operativo).
7. 21Lab pubblico: sotto-sezione di `/storia`. NON pagina business dedicata.
8. Case study tech v25 (Payments, Cashless, LeadsBridge): **eliminati tutti e tre**. Niente archivio nel sito.

**Architettura informativa finale**: 5 pagine + blog → Home, Scritti (cuore), Storia, Ora (now page), Contatti. Sito molto più piccolo di v25 (eliminate `/work`, `/lab`, `/approach`, "Lavoriamo insieme", AI clone, Q&A anonimo).

**Output sessione**:
- `_v26-strategy/00-brief-identitario-v0.md` — 248 righe, tesi proposta + anchor + audience + manifesto + IA + mood + blog + decisioni
- `_v26-strategy/01-lista-modifiche.md` — 200 righe, 12 sezioni operative (brand, ToV, palette, font, struttura, contenuti, blog, stack, SEO, immutabili, effort, rischi)
- Project Linear P3 aggiornato: In Progress, targetDate 2026-07-31, priority High, summary v26
- 8 issue iniziali create: SEL-70 (brief retro), SEL-71 (Alberto), SEL-72 (mood board), SEL-73 (stream-attivi), SEL-74 (brand guide), SEL-75 (manifesto), SEL-76 (copy IT), SEL-77 (archivio codebase)
- `_sistema/stream-attivi.md` aggiornato: P3 a 🟢, S1 a 🟢 sbloccato
- `CLAUDE.md` root aggiornato: P3 e S1 status nuovi

**Ricerca esterna fatta**:
- Perplexity: 8 esempi personal sites career-pivot warm + 5 manifesti del cambiamento + trend palette 2025-2026 + 5 riferimenti italiani slow-web (Romei, Fullone, Brandolini, Gheno, Teotti)
- Riferimenti più forti emersi: Paul Millerd (paulkmillerd.com), Anne-Laure Le Cunff (nesslabs.com), Khe Hy (radreads.co), Derek Sivers (sive.rs), Steven Pressfield

**Aperto, da chiudere prossime sessioni**:
- Allineamento Alberto su 21Lab pubblico (SEL-71) — possibile slot Rimini Wellness 28/05
- 3 mood board reali (SEL-72) — effort 3-4h
- Tesi-frase del sito — bloccata fino a ~9 giugno
- Manifesto 3-5 punti voce sedimentata — bloccato fino a ~9 giugno
- Newsletter sì/no — non deciso, non urgente

**Non discusso, da affrontare**:
- Lingua IT vs IT+EN (v25 era bilingue, v26 forse solo IT?)
- Cadenza blog (proposta 1/sett giu-ago, poi 2/mese — non confermata)
- Eventuale check NDA/non concorrenza Qubica prima del lancio