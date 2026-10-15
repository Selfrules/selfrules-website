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
      "In LeadsBridge il 60% degli utenti chiedeva una funzione. Una telefonata di mezz'ora ha mostrato che il problema l'avevano già risolto da soli. Non l'abbiamo costruita.",
    rigaPiccola: 'Tre sprint risparmiati.',
    link: "Come l'ho deciso",
    fretta: "Una telefonata di mezz'ora al posto di tre sprint di sviluppo, e un passaggio del prodotto rifatto che taglia il 35% del tempo.",
    minuti: 3,
  },
  {
    slug: 'palestra',
    numero: '21Lab',
    evidenzia: false,
    titolo: 'Una palestra, un gestionale nuovo e qualche agente AI',
    azienda: '21Lab Fitness & Athletics',
    ruolo: 'GM',
    periodo: 'da agosto 2026',
    riassunto:
      'Da agosto 2026 sono il GM di una palestra a Vignola. Il gestionale nuovo lo sto costruendo con agenti AI, per restituire tempo a clienti, coach e a chi amministra.',
    rigaPiccola: 'Il gruppo pilota lo prova da dicembre.',
    link: "Com'è andata finora",
    fretta: 'Il gestionale di una palestra costruito da agenti AI, con me a decidere cosa serve. Prima versione ai clienti dal 7 dicembre 2026.',
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
    riga: 'Essere d’accordo costa poco. Decidere cosa non fare è il lavoro.',
    data: '2026-02-08',
    minuti: 3,
  },
  {
    slug: 'perche-prototipo-in-codice',
    titolo: 'Perché prototipo in codice',
    riga: 'Una casa in affitto, un campo che nessuno aveva letto, e quando invece mi faccio da parte.',
    data: '2026-01-29',
    minuti: 4,
  },
  {
    slug: 'il-cliente-sa-cosa-non-vuole',
    titolo: 'Il cliente sa cosa non vuole',
    riga: 'Sette anni di studio web e una domanda girata al contrario.',
    data: '2026-01-06',
    minuti: 3,
  },
];

export const AGGIORNATO = '15 ottobre 2026';
export const EMAIL = 'mattia@selfrules.org';
export const LINKEDIN = 'https://www.linkedin.com/in/selfrules';
export const SITO = 'https://selfrules.org';
