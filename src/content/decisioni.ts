// Le tre decisioni del gioco "Decidi tu" in home e dentro ogni storia.
// Chi legge sceglie prima, poi vede cosa ho fatto io e com'è finita. La scena la capisce chiunque;
// la riga "mestiere" è per chi fa questo lavoro. I numeri vengono dalle storie in storie/*.mdx.

export type Scelta = { id: 'a' | 'b' | 'c'; testo: string };

export type Barre = { totale: number; accese: number; dopo: string };

export type Decisione = {
  slug: string;
  nome: string;
  dove: string;
  scena: string;
  domanda: string;
  scelte: Scelta[];
  mia: Scelta['id'];
  stessa: string;
  diversa: string;
  fatto: string;
  mestiere: string;
  numero: string;
  numeroDetto: string;
  barre: Barre;
};

export const decisioni: Decisione[] = [
  {
    slug: 'pagamenti',
    nome: 'I 44 problemi',
    dove: 'QubicaAMF, 2025, pagamenti in 290 centri bowling',
    scena:
      'Sabato sera. Un papà paga una festa di compleanno con la carta e il lunedì si trova due addebiti. Succede in troppi centri. Sulla lista ci sono 44 problemi aperti, ognuno urgente per qualcuno, e intanto i commerciali vendono funzioni nuove.',
    domanda: 'Tu cosa fai?',
    scelte: [
      { id: 'a', testo: 'Divido il team, metà sui problemi e metà sulle funzioni nuove' },
      { id: 'b', testo: 'Parto dal problema che più clienti hanno segnalato' },
      { id: 'c', testo: 'Fermo le funzioni nuove e cerco i problemi che fanno perdere soldi' },
    ],
    mia: 'c',
    stessa: 'Abbiamo scelto uguale. Facile dirlo adesso, a me è costata una riunione scomoda coi commerciali.',
    diversa: 'Io ho fatto un’altra cosa, e la riunione coi commerciali non è stata comoda.',
    fatto:
      'Ho fermato le funzioni nuove per quattro settimane e ho messo in fila i 44 problemi con una domanda sola. Questo, oggi, fa perdere soldi a un centro? Quattro sì. Li abbiamo chiusi tutti e quattro prima di riaprire il resto.',
    mestiere:
      'Per chi fa il mestiere. Un criterio solo per ordinare il backlog, cioè quanto perde il cliente oggi, e il motivo scritto per ognuna delle 40 voci che dovevano aspettare. Il blocco delle funzioni nuove aveva una data di fine già nel primo messaggio, così il no era a tempo e sales l’ha accettato.',
    numero: '4 su 44',
    numeroDetto: 'i problemi che facevano perdere soldi ai centri',
    barre: { totale: 44, accese: 4, dopo: 'Quando ho lasciato, il 99,83% dei pagamenti andava a buon fine. Ne falliva meno di due su mille.' },
  },
  {
    slug: 'leadsbridge',
    nome: 'La funzione del 60%',
    dove: 'LeadsBridge, 2021, una startup americana da 50 persone',
    scena:
      'Sei clienti su dieci chiedono la stessa funzione nuova. Il team di sviluppo è pronto a partire, la stima è di sei settimane. Nella riunione tutti annuiscono.',
    domanda: 'Tu cosa fai?',
    scelte: [
      { id: 'a', testo: 'La costruisco, se la chiede il 60% il dubbio non c’è' },
      { id: 'b', testo: 'Mando un sondaggio a tutti i clienti per esserne sicuro' },
      { id: 'c', testo: 'Telefono a cinque dei clienti che la chiedono' },
    ],
    mia: 'c',
    stessa: 'Abbiamo scelto uguale. Cinque telefonate costano meno di sei settimane.',
    diversa: 'Io ho fatto un’altra cosa. Un sondaggio ti conferma quello che chiedi, una telefonata ti dice quello che non sapevi.',
    fatto:
      'Al terzo cliente era già chiaro. Il problema l’avevano risolto da soli, con un giro storto ma che funzionava. Ho reso ufficiale il loro giro con una modifica piccola, e la funzione nuova non l’abbiamo mai costruita.',
    mestiere:
      'Per chi fa il mestiere. Discovery prima del delivery, cioè capire cosa fanno i clienti prima di costruire quello che chiedono. Cinque interviste su cosa i clienti facevano già, al posto di un sondaggio che conferma la richiesta. Le sei settimane risparmiate sono andate sulla mappatura dei campi, dove il problema era di tutti, e lì il tempo di configurazione è sceso del 35%.',
    numero: '3 sprint',
    numeroDetto: 'risparmiati, cioè sei settimane di sviluppo',
    barre: { totale: 10, accese: 6, dopo: 'Il 60% aveva ragione sul problema. Sulla soluzione, no.' },
  },
  {
    slug: 'palestra',
    nome: 'Il gestionale',
    dove: '21Lab, 2026, una palestra in provincia di Modena',
    scena:
      'Il gestionale della palestra è macchinoso. Pacchetti, abbonamenti e compensi dei coach stanno su un foglio e nella testa di chi se li ricorda. Il budget è quello di una palestra, non di un’azienda di software.',
    domanda: 'Tu cosa fai?',
    scelte: [
      { id: 'a', testo: 'Compro il gestionale migliore che c’è sul mercato' },
      { id: 'b', testo: 'Cerco uno sviluppatore e glielo faccio costruire' },
      { id: 'c', testo: 'Lo costruisco con agenti AI e faccio io il product manager' },
    ],
    mia: 'c',
    stessa: 'Abbiamo scelto uguale. Ti avverto, la parte difficile non è il codice.',
    diversa: 'Io ho fatto un’altra cosa. Comprarne uno voleva dire piegare la palestra al software, e lo sviluppatore non ce lo potevamo permettere.',
    fatto:
      'Ho scritto in italiano semplice come funziona la palestra, regola per regola. Gli agenti AI scrivono il codice, io decido cosa serve e provo ogni schermata. Da ottobre dieci clienti lo usano per prenotare, e ogni settimana entra una funzione nuova.',
    mestiere:
      'Per chi fa il mestiere. Le specifiche scritte sono l’unica fonte di verità, ogni compito ha criteri di accettazione che si provano da soli, e ogni schermata si chiude solo dopo il confronto col disegno. Sulle prime 32 gli agenti hanno trovato 361 differenze che a parole nessuno aveva visto.',
    numero: '790 euro',
    numeroDetto: 'di AI per i primi 102 compiti, un lavoro da 400 a 800 ore di sviluppo',
    barre: { totale: 10, accese: 10, dopo: 'Dieci clienti lo usano già. Dal 7 dicembre lo userà tutto il Lab.' },
  },
];
