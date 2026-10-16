// Le tre decisioni del gioco "Decidi tu" in home e dentro ogni storia.
// Chi legge sceglie prima, poi vede cosa ho fatto io e com'è finita. I numeri vengono dalle storie in storie/*.mdx.

export type Scelta = { id: 'a' | 'b'; testo: string };

export type Barre = { totale: number; accese: number; dopo: string };

export type Decisione = {
  slug: string;
  nome: string;
  dove: string;
  scena: string;
  domanda: string;
  scelte: [Scelta, Scelta];
  mia: Scelta['id'];
  stessa: string;
  diversa: string;
  fatto: string;
  numero: string;
  numeroDetto: string;
  barre: Barre;
};

export const decisioni: Decisione[] = [
  {
    slug: 'pagamenti',
    nome: 'I 44 problemi',
    dove: 'QubicaAMF, 2025',
    scena:
      'Un sistema di pagamenti fa addebiti doppi in 290 centri bowling. Ci sono 44 problemi aperti, ognuno urgente per qualcuno. Sales intanto vende funzioni nuove.',
    domanda: 'Tu cosa fai?',
    scelte: [
      { id: 'a', testo: 'Divido il team, metà sui problemi e metà sulle funzioni nuove' },
      { id: 'b', testo: 'Fermo le funzioni nuove e cerco i problemi che costano soldi' },
    ],
    mia: 'b',
    stessa: 'Abbiamo fatto la stessa scelta.',
    diversa: 'Io ho fatto l’altra, e la conversazione con sales non è stata comoda.',
    fatto:
      'Ho messo in fila i 44 problemi con una domanda sola. Questo oggi fa perdere soldi a un centro? Quattro sì. Li abbiamo chiusi in quattro settimane.',
    numero: '4 su 44',
    numeroDetto: 'i problemi che facevano perdere soldi',
    barre: { totale: 44, accese: 4, dopo: 'Alla fine il 99,83% dei pagamenti andava a buon fine.' },
  },
  {
    slug: 'leadsbridge',
    nome: 'La funzione del 60%',
    dove: 'LeadsBridge, 2020 – 2023',
    scena:
      'Sei utenti su dieci chiedono la stessa funzione. Il team di sviluppo è pronto, la stima è di tre sprint, cioè sei settimane di lavoro.',
    domanda: 'Tu cosa fai?',
    scelte: [
      { id: 'a', testo: 'La metto in cima alla lista, la chiede il 60%' },
      { id: 'b', testo: 'Prima telefono a chi la chiede' },
    ],
    mia: 'b',
    stessa: 'Abbiamo fatto la stessa scelta.',
    diversa: 'Io ho fatto l’altra. Mezz’ora costava meno di sei settimane.',
    fatto:
      'Mezz’ora di telefonata. Il problema l’avevano già risolto da soli, con un giro un po’ storto. Ho reso ufficiale la loro soluzione e la funzione non l’abbiamo costruita.',
    numero: '3 sprint',
    numeroDetto: 'risparmiati, un mese e mezzo di lavoro',
    barre: { totale: 10, accese: 6, dopo: 'Il 60% aveva ragione sul problema. Sulla soluzione no.' },
  },
  {
    slug: 'palestra',
    nome: 'Il gestionale',
    dove: '21Lab, 2026',
    scena:
      'Il gestionale della palestra è macchinoso. Pacchetti, abbonamenti e compensi dei coach finiscono su un foglio a mano, e nella testa di chi se li deve ricordare.',
    domanda: 'Tu cosa fai?',
    scelte: [
      { id: 'a', testo: 'Ne compro uno migliore, sul mercato ce ne sono tanti' },
      { id: 'b', testo: 'Lo costruisco, con agenti AI che scrivono il codice' },
    ],
    mia: 'b',
    stessa: 'Abbiamo fatto la stessa scelta, e sono curioso di sapere perché.',
    diversa: 'Io ho fatto l’altra. Comprarne uno voleva dire piegare la palestra al software.',
    fatto:
      'Scrivo in italiano semplice come funziona la palestra, gli agenti scrivono il codice e io provo ogni schermata. Al 13 ottobre 2026 la prima versione aveva 217 attività chiuse su 235.',
    numero: '217 su 235',
    numeroDetto: 'attività del gestionale chiuse al 13 ottobre',
    barre: { totale: 235, accese: 217, dopo: 'Il primo gruppo di clienti lo prova dal 7 dicembre 2026.' },
  },
];
