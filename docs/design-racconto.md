# Decidi tu (redesign del 16/10/2026 sera, ramo `sito-2026-racconto`)

Rifatto da capo dopo il giudizio di Mattia sul "nome come monumento": foto messe lì senza ritocco né forma, storie a muro di testo, niente da fare per chi legge, un sito come un altro. La direzione precedente resta su `sito-2026-redesign` per il confronto.

## Da dove viene
Due ricerche in parallelo il 16/10. Sedici siti personali guardati dal vivo (Josh Comeau, Lynn Fisher, Pudding, Maggie Appleton, Robin Sloan, Tobias van Schneider, Rauno, Brittany Chiang e altri) e la ricerca su lettura e attenzione (Nielsen Norman Group sul telefono e sullo scorrimento, Pudding sullo scrollytelling al telefono, Kim, Reinecke e Hullman, CHI 2017, su "indovina prima di vedere"). Quello che si è preso:
- un segno che torna in tutto il sito e appartiene alla persona (le barre);
- chi legge indovina prima di vedere il dato, la tecnica con la prova più solida per farsi ricordare un numero;
- paragrafi corti, titoli che raccontano la storia anche letti da soli, una scena per capitolo;
- foto tutte con lo stesso trattamento e una didascalia che aggiunge un fatto;
- niente scroll dirottato, niente effetti al passaggio del mouse che sul telefono spariscono.

## L'idea
Le decisioni che Mattia ha preso con i numeri diventano un gioco. Chi legge sceglie prima, poi vede cosa ha fatto lui e com'è finita. Il segno che torna sono le barre: 44 problemi con 4 verdi, 10 utenti con 6 verdi, 235 attività con 217 verdi. Le 44 barre aprono la home, tornano nelle storie, nella 404.

Direzione del foglio `split-stage` (seed 1215440405, `.taste-skill/direction.json`): una metà ferma e una che scorre. In home il ritratto resta fermo mentre a sinistra si legge il perché; nelle storie il palco a sinistra cambia scena a ogni capitolo (sul telefono la scena compare sotto il titolo).

## Valori
| Cosa | Chiaro | Scuro |
|---|---|---|
| Carta (sfondo) | #EBE5E3 | #1B1817 |
| Superficie, superficie 2, chiaro | #E1DAD7, #D5CCC8, #F6F2F0 | #252120, #322D2B, #2C2826 |
| Inchiostro | #2B2622 | #EFE8E5 |
| Grigio | #645B57 | #ADA39F |
| Verde (le cose che contano, l'azione) | #0F7D45 | #4CC483 |

Carattere unico Erode (Indian Type Foundry, licenza ITF Free Font), file in `src/fonts/`, cinque misure (piccolo, corpo, lead, testa, cifra).

Forma delle foto (17/10). Persone e posti stanno in una finestra ad arco, come quelle delle rocche di Vignola, Spilamberto e Savignano; documenti, archivi e schermate restano rettangoli. Nel piede i tre paesi di Mattia (Savignano dove abita, Spilamberto fino a maggio 2026, Vignola dove lavora), due foto di Paolo Monti del 1976.

Foto. Bicromia inchiostro e carta con grana leggera, fatta da `scripts/tratta-foto.py` dagli originali in `assets/` (non nel repo). Crediti in `src/content/foto.ts` e nel piè di pagina. Schermate del gestionale di 21Lab con dati di prova, ritagliate senza nomi di persone.

Movimento. Le barre che salgono e diventano verdi, le foto che si scoprono dal basso quando entrano, il palco che sfuma da una scena all'altra, le parti di ogni blocco una dopo l'altra, un tiro di bowling in loop. Con "riduci movimento" o senza script tutto è visibile e il gioco diventa un riquadro da aprire.

## Dove sta cosa
- Le tre decisioni: `src/content/decisioni.ts`, componente `src/components/Decidi.tsx`.
- Le scene delle storie, capitolo per capitolo: `src/content/palchi.ts`, componente `src/components/Palco.tsx`.
- Gli errori come elenco che si apre: `src/components/ElencoErrori.tsx`.
