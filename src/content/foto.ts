// Le foto del sito, tutte con lo stesso trattamento (bicromia inchiostro e carta, grana leggera, taglio fisso):
// le fa scripts/tratta-foto.py dagli originali in assets/. Crediti completi in assets/credits.json.

import ritratto from '@/foto/r/ritratto.jpg';
import ritrattoAlto from '@/foto/r/ritratto-alto.jpg';
import volto from '@/foto/r/volto.jpg';
import birilli from '@/foto/r/birilli.jpg';
import pista from '@/foto/r/pista.jpg';
import insegna from '@/foto/r/insegna.jpg';
import telefonista from '@/foto/r/telefonista.jpg';
import centralino from '@/foto/r/centralino.jpg';
import manubri from '@/foto/r/manubri.jpg';
import rocca from '@/foto/r/rocca.jpg';
import ciliegie from '@/foto/r/ciliegie.jpg';
import registratore from '@/foto/r/registratore.jpg';
import riunione from '@/foto/r/riunione.jpg';
import postIt from '@/foto/r/post-it.jpg';
import uiClasse from '@/foto/ui/classe.png';
import uiAssistente from '@/foto/ui/assistente.png';
import uiImpostazioni from '@/foto/ui/impostazioni.jpg';
import chMappa from '@/foto/casahunter-mappa.jpg';
import chLista from '@/foto/casahunter-lista.jpg';
import chAnnuncio from '@/foto/ui/casahunter-annuncio.png';
import cartaParati from '@/foto/r/carta-da-parati.jpg';

export type Immagine = { src: typeof ritratto; alt: string; didascalia?: string };
export type Credito = { titolo: string; autore: string; licenza: string; pagina: string };
export type Foto = Immagine & { credito?: Credito };

export const mattia = {
  ritratto: { src: ritratto, alt: 'Mattia De Luca appoggiato a un pilastro di cemento, camicia di lino chiara, guarda di lato' },
  alto: { src: ritrattoAlto, alt: 'Mattia De Luca su un balcone, tra un pilastro e i palazzi' },
  volto: { src: volto, alt: 'Il volto di Mattia De Luca' },
} satisfies Record<string, Immagine>;

export const foto = {
  birilli: {
    src: birilli,
    alt: 'Dieci birilli in fila in fondo a una pista da bowling',
    didascalia: 'Il posto dove un pagamento sbagliato si sente di più. Il sabato sera.',
    credito: { titolo: 'Bowling pins (1503751581)', autore: 'Peter Hellberg', licenza: 'CC BY-SA 2.0, in bicromia', pagina: 'https://commons.wikimedia.org/w/index.php?curid=129281013' },
  },
  pista: {
    src: pista,
    alt: 'Una pista da bowling vista dalla linea di tiro, coi birilli in fondo',
    didascalia: 'Una pista AMF, come quelle dei centri che usavano i nostri pagamenti.',
    credito: { titolo: '20241018 4-5-7 spare conversion, ten-pin bowling', autore: 'RCraig09', licenza: 'CC BY-SA 4.0, fotogramma in bicromia', pagina: 'https://commons.wikimedia.org/wiki/File:20241018_4-5-7_spare_conversion_-_ten-pin_bowling.webm' },
  },
  insegna: {
    src: insegna,
    alt: 'Un centro bowling americano con le lettere BOWL sul tetto',
    didascalia: 'Un centro bowling negli Stati Uniti. In QubicaAMF seguivo i pagamenti di centri come questo.',
    credito: { titolo: 'Terrace Lanes Frederick MD2', autore: 'Acroterion', licenza: 'CC BY-SA 4.0, in bicromia', pagina: 'https://commons.wikimedia.org/wiki/File:Terrace_Lanes_Frederick_MD2.jpg' },
  },
  telefonista: {
    src: telefonista,
    alt: 'Una donna al telefono che prende appunti, nel 1950',
    didascalia: 'Mezz’ora al telefono, un quaderno. Lo strumento di ricerca che costa meno.',
    credito: { titolo: '09-02-1950_08068 Telefoniste', autore: 'IISG', licenza: 'CC BY-SA 2.0, in bicromia', pagina: 'https://www.flickr.com/photos/29780762@N07/6526604445' },
  },
  centralino: {
    src: centralino,
    alt: 'Una fila di centraliniste con le cuffie davanti ai pannelli',
    didascalia: 'Collegare ogni filo al posto giusto, a mano. LeadsBridge faceva lo stesso coi contatti dei clienti.',
    credito: { titolo: 'WAC telephone switchboard operators', autore: 'PhotosNormandie', licenza: 'CC BY-SA 2.0, in bicromia', pagina: 'https://commons.wikimedia.org/w/index.php?curid=131249837' },
  },
  manubri: {
    src: manubri,
    alt: 'Una rastrelliera di manubri in una palestra',
    didascalia: 'La parte facile di una palestra. Quella difficile sta alla reception.',
    credito: { titolo: 'Dumbells and free weights in a gym', autore: 'KeepActive Australia', licenza: 'CC BY-SA 4.0, in bicromia', pagina: 'https://commons.wikimedia.org/wiki/File:Dumbells_and_free_weights_in_a_gym.jpg' },
  },
  rocca: {
    src: rocca,
    alt: 'La Rocca di Vignola, la torre di mattoni vista dal cortile',
    didascalia: 'La Rocca di Vignola, il paese dove adesso lavoro.',
    credito: { titolo: 'Vignola, Rocca di Vignola, 2025-09-05', autore: 'Canary', licenza: 'CC BY-SA 4.0, in bicromia', pagina: 'https://commons.wikimedia.org/w/index.php?curid=174444028' },
  },
  ciliegie: {
    src: ciliegie,
    alt: 'Un mucchio di ciliegie di Vignola',
    didascalia: 'Le ciliegie di Vignola. A giugno qui si parla d’altro.',
    credito: { titolo: 'Cherries of Vignola (9062500716)', autore: 'g.sighele', licenza: 'CC BY 2.0, in bicromia', pagina: 'https://commons.wikimedia.org/w/index.php?curid=70227022' },
  },
  registratore: {
    src: registratore,
    alt: 'Un registratore di cassa del 1918, disegnato a inchiostro',
    didascalia: 'Nel 1918 il bottone per pagare si vedeva benissimo.',
    credito: { titolo: 'National Cash Register 1918', autore: 'autore sconosciuto', licenza: 'pubblico dominio', pagina: 'https://commons.wikimedia.org/wiki/File:National_Cash_Register_1918.jpg' },
  },
  riunione: {
    src: riunione,
    alt: 'Una riunione di comitato attorno a un tavolo, nel 1943',
    didascalia: 'Tutti d’accordo, nel 1943. Chissà com’è andata dopo.',
    credito: { titolo: 'Meeting of the Niagara Frontier regional committee, 1943', autore: 'Marjory Collins', licenza: 'pubblico dominio', pagina: 'https://commons.wikimedia.org/wiki/File:Meeting_of_the_Niagara_Frontier_regional_committee_of_the_United_States_War_Manpower_Commssion.8d16929v.jpg' },
  },
  cartaParati: {
    src: cartaParati,
    alt: 'Un campionario di carte da parati del 1915, aperto su due motivi',
    didascalia: 'Un campionario del 1915. Scegliere scartando è più facile che descrivere.',
    credito: { titolo: 'Sample Book, The Larkin Wallpaper Book, No. 4, ca. 1915', autore: 'autore sconosciuto', licenza: 'pubblico dominio', pagina: 'https://commons.wikimedia.org/wiki/File:Sample_Book,_The_Larkin_Wallpaper_Book,_No._4,_ca._1915_(CH_18476109-17).jpg' },
  },
  postIt: {
    src: postIt,
    alt: 'Un muro coperto di post-it, in un ufficio',
    didascalia: 'Un parcheggio di idee. Se nessuno le riprende in due trimestri, si buttano.',
    credito: { titolo: 'Sticky notes on the wall of the Wikimedia Foundation office, 2010-10-26', autore: 'Ragesoss', licenza: 'CC BY 3.0, in bicromia', pagina: 'https://commons.wikimedia.org/w/index.php?curid=12023461' },
  },
} satisfies Record<string, Foto>;

// Schermate dei programmi di Mattia: il gestionale di 21Lab (dati di prova) e CasaHunter
export const schermate = {
  classe: { src: uiClasse, alt: 'Il gestionale di 21Lab, una classe con 9 posti presi su 15 e gli orari di disdetta', didascalia: 'Il gestionale di 21Lab, dati di prova. Una classe con i suoi posti e le sue scadenze.' },
  assistente: { src: uiAssistente, alt: 'Il gestionale di 21Lab, l’assistente che cambia una regola e lascia dieci minuti per annullare', didascalia: 'L’assistente cambia una regola e lascia dieci minuti per tornare indietro.' },
  impostazioni: { src: uiImpostazioni, alt: 'Il gestionale di 21Lab, le regole della palestra scritte in italiano semplice', didascalia: 'Le regole della palestra, scritte come le direbbe la reception.' },
  mappa: { src: chMappa, alt: 'CasaHunter, la mappa degli annunci in provincia di Modena e Bologna', didascalia: 'CasaHunter, 880 annunci sulla mappa. In uno di questi adesso ci abito.' },
  annuncio: { src: chAnnuncio, alt: 'CasaHunter, un annuncio con il voto 100 dato dall’AI, il prezzo e i metri quadri', didascalia: 'Un annuncio come lo vedeva CasaHunter, col voto dell’AI in alto a destra.' },
  lista: { src: chLista, alt: 'CasaHunter, la lista degli annunci col voto di ciascuno', didascalia: 'CasaHunter, gli annunci col voto che gli dava l’AI.' },
} satisfies Record<string, Immagine>;

export const video = {
  bowling: {
    src: '/video/bowling-spare.webm',
    poster: '/video/pista.jpg',
    credito: { titolo: '20241018 4-5-7 spare conversion, ten-pin bowling', autore: 'RCraig09', licenza: 'CC BY-SA 4.0', pagina: 'https://commons.wikimedia.org/wiki/File:20241018_4-5-7_spare_conversion_-_ten-pin_bowling.webm' },
  },
};

export const crediti: Credito[] = Object.values(foto)
  .map((f) => f.credito)
  .filter((c) => c.pagina !== video.bowling.credito.pagina)
  .concat(video.bowling.credito);

// Una foto per nota, per l'elenco e per l'apertura di ognuna
export const fotoNote: Record<string, Immagine> = {
  'riunione-dove-tutti-dicono-si': foto.riunione,
  'perche-prototipo-in-codice': schermate.mappa,
  'il-cliente-sa-cosa-non-vuole': foto.cartaParati,
};
