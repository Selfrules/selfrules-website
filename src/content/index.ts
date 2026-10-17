export type Storia = {
  slug: string;
  numero: string;
  evidenzia: boolean;
  titolo: string;
  azienda: string;
  ruolo: string;
  periodo: string;
  riassunto: string;
  rigaPiccola: string;
  link: string;
  fretta: string;
  minuti: number;
};

export const storie: Storia[] = [
  {
    slug: 'pagamenti',
    numero: '4 su 44',
    evidenzia: true,
    titolo: 'I 44 problemi e la domanda che li ha messi in fila',
    azienda: 'QubicaAMF',
    ruolo: 'Product Manager, pagamenti e cashless card',
    periodo: '2023 – 2026',
    riassunto:
      "In QubicaAMF un sistema di pagamenti faceva addebiti doppi. C'erano 44 problemi aperti, solo 4 facevano perdere soldi ai centri. Li abbiamo chiusi in 4 settimane.",
    rigaPiccola: 'Alla fine 99,83% di pagamenti a buon fine, in 290 centri bowling.',
    link: "Come l'ho fatto",
    fretta: 'Una domanda sola per mettere in fila 44 problemi, quattro settimane per chiudere quelli che costavano soldi ai clienti.',
    minuti: 4,
  },
  {
    slug: 'leadsbridge',
    numero: '60%',
    evidenzia: true,
    titolo: 'La funzione che il 60% chiedeva, e che non abbiamo costruito',
    azienda: 'LeadsBridge',
    ruolo: 'Product Owner, unico responsabile di prodotto',
    periodo: '2020 – 2023',
    riassunto:
      "In LeadsBridge il 60% degli utenti chiedeva una funzione. Cinque telefonate hanno mostrato che il problema l'avevano già risolto da soli. Non l'abbiamo costruita.",
    rigaPiccola: 'Tre sprint risparmiati.',
    link: "Come l'ho deciso",
    fretta: "Cinque telefonate al posto di tre sprint di sviluppo, e un passaggio del prodotto rifatto che taglia il 35% del tempo.",
    minuti: 3,
  },
  {
    slug: 'palestra',
    numero: '10 soci',
    evidenzia: false,
    titolo: 'Una palestra, un gestionale nuovo e qualche agente AI',
    azienda: '21Lab Fitness & Athletics',
    ruolo: 'GM',
    periodo: 'da agosto 2026',
    riassunto:
      'Da agosto 2026 sono il GM di una palestra in provincia di Modena. Il gestionale nuovo lo scrivono agenti AI, io decido cosa serve. Dieci soci lo usano già.',
    rigaPiccola: 'Dal 7 dicembre lo userà tutto il Lab.',
    link: "Com'è andata finora",
    fretta: 'Il gestionale di una palestra scritto da agenti AI, con me a decidere cosa serve. Dieci soci lo usano da ottobre, una funzione nuova a settimana, tutto il Lab dal 7 dicembre.',
    minuti: 4,
  },
];

export type Nota = {
  slug: string;
  titolo: string;
  riga: string;
  data: string;
  minuti: number;
};

export const note: Nota[] = [
  {
    slug: 'riunione-dove-tutti-dicono-si',
    titolo: 'La riunione dove tutti dicono sì',
    riga: 'Tutti annuiscono, nessuno si impegna. Cosa faccio prima, durante e dopo.',
    data: '2026-02-08',
    minuti: 3,
  },
  {
    slug: 'perche-prototipo-in-codice',
    titolo: 'Perché prototipo in codice',
    riga: 'Ho trovato casa con otto piccoli programmi. Perché costruisco prima di chiedere settimane al team, e quando non lo faccio.',
    data: '2026-01-29',
    minuti: 4,
  },
  {
    slug: 'il-cliente-sa-cosa-non-vuole',
    titolo: 'Il cliente sa cosa non vuole',
    riga: 'Sette anni fra design e sviluppo, e la domanda che ha cambiato le riunioni coi clienti. Cosa scarteresti?',
    data: '2026-01-06',
    minuti: 3,
  },
];

export const AGGIORNATO = '15 ottobre 2026';
export const EMAIL = 'mattia@selfrules.org';
export const LINKEDIN = 'https://www.linkedin.com/in/selfrules';
export const SITO = 'https://selfrules.org';

export const pagine = [
  { href: '/storie', label: 'Storie' },
  { href: '/errori', label: 'Errori' },
  { href: '/come-lavoro', label: 'Come lavoro' },
  { href: '/adesso', label: 'Adesso' },
  { href: '/note', label: 'Note' },
];
