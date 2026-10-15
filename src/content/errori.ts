export type Errore = {
  numero: string;
  titolo: string;
  costo: string;
  costoSpiegato: string;
  scena: string[];
  regola: string;
};

export const errori: Errore[] = [
  {
    numero: '1',
    titolo: 'Il negozio online bellissimo',
    costo: '8.000 euro',
    costoSpiegato: 'di rimborsi al cliente',
    scena: [
      'Avevo il mio studio web da qualche anno e mi piaceva fare le cose belle. Ho consegnato un negozio online di cui ero orgoglioso, da mettere in vetrina.',
      'In tre settimane non ha venduto niente. Alla fine il cliente mi ha chiesto, gentile, dove si cliccava per pagare. Il bottone c\'era. Lo vedevo io, che sapevo dov\'era.',
    ],
    regola:
      'Prima controllo che le persone finiscano quello che sono venute a fare. Poi guardo se la pagina è bella.',
  },
  {
    numero: '2',
    titolo: 'Lo strumento che chiedevano i più bravi',
    costo: '-58%',
    costoSpiegato: 'di utilizzo, nei numeri del prodotto',
    scena: [
      'In LeadsBridge gli utenti più tecnici chiedevano di potersi costruire le integrazioni da soli, senza programmare. Lo abbiamo costruito.',
      'La maggior parte dei clienti però non voleva configurare niente. Voleva che l\'integrazione funzionasse e basta. Lo strumento nuovo l\'hanno usato il 58% in meno.',
      'Lo abbiamo cambiato. Il cliente chiede un\'integrazione, noi la prepariamo per l\'80%, lui sistema il resto. Quella versione l\'hanno usata tre volte tanto.',
    ],
    regola:
      'Ascolto chi chiede più forte, poi conto chi usa. Se i due gruppi non coincidono, conta il secondo.',
  },
  {
    numero: '3',
    titolo: 'Il documento che capiva una persona sola',
    costo: '1 lettore',
    costoSpiegato: 'su tutto lo staff della palestra',
    scena: [
      "Nell'estate 2026, mentre preparavo il mio arrivo a 21Lab, ho scritto le regole della palestra come le avrei scritte per un team di sviluppo. Sigle, parole inglesi, frasi fitte. Mi sembravano chiarissime.",
      'Il titolare me lo ha detto senza giri. Il tuo linguaggio, in questo momento, c\'è una persona sola che lo capisce, ed è lui. Poi ha usato un paragone da palestra. Un personal trainer che carica troppo un atleta nuovo, e l\'atleta sta male. La colpa è del trainer.',
    ],
    regola:
      'Se chi legge non capisce, il testo è sbagliato. Da allora riscrivo finché lo capisce chi è più lontano dal mio mestiere.',
  },
];
