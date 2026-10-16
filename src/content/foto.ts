// Foto d'archivio con licenza libera, convertite in bianco e nero. Crediti in assets/credits.json

import birilli from '@/foto/birilli.jpg';
import telefonista from '@/foto/telefonista.jpg';
import sollevatore from '@/foto/sollevatore.jpg';
import registratore from '@/foto/registratore.jpg';
import centralino from '@/foto/centralino.jpg';
import manubri from '@/foto/manubri.jpg';
import rocca from '@/foto/rocca.jpg';
import manuale_1905 from '@/foto/manuale-1905.jpg';
import birillo from '@/foto/birillo.jpg';
import cartolina_bowling from '@/foto/cartolina-bowling.jpg';

export type Foto = { src: typeof birilli; alt: string; titolo: string; autore: string; licenza: string; pagina: string };

export const foto = {
  'birilli': { src: birilli, alt: "Dieci birilli in fila in fondo a una pista da bowling", titolo: "Bowling pins (1503751581)", autore: "Peter Hellberg from Stockholm, Sweden", licenza: "CC BY-SA 2.0", pagina: "https://commons.wikimedia.org/w/index.php?curid=129281013" },
  'telefonista': { src: telefonista, alt: "Una centralinista al telefono davanti al suo centralino, nel 1950", titolo: "09-02-1950_08068 Telefoniste", autore: "IISG", licenza: "CC BY-SA 2.0", pagina: "https://www.flickr.com/photos/29780762@N07/6526604445" },
  'sollevatore': { src: sollevatore, alt: "Un sollevatore di pesi tiene il bilanciere sopra la testa, nel 1928", titolo: "Roger Francois", autore: "Unknown author Unknown author (\"Fotograaf onbekend\")", licenza: "public domain", pagina: "https://commons.wikimedia.org/wiki/File:Roger_Francois.jpg" },
  'registratore': { src: registratore, alt: "Un registratore di cassa del 1918, disegnato a inchiostro", titolo: "National Cash Register 1918", autore: "Anonymous Unknown author", licenza: "public domain", pagina: "https://commons.wikimedia.org/wiki/File:National_Cash_Register_1918.jpg" },
  'centralino': { src: centralino, alt: "Una fila di centraliniste con le cuffie davanti ai pannelli", titolo: "WAC telephone switchboard operators", autore: "PhotosNormandie", licenza: "CC BY-SA 2.0", pagina: "https://commons.wikimedia.org/w/index.php?curid=131249837" },
  'manubri': { src: manubri, alt: "Una rastrelliera di manubri in una palestra", titolo: "Dumbells and free weights in a gym", autore: "KeepActive Australia from Melbourne, VIC, Australia", licenza: "CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/wiki/File:Dumbells_and_free_weights_in_a_gym.jpg" },
  'rocca': { src: rocca, alt: "La Rocca di Vignola vista da sotto le torri", titolo: "Rocca di Vignola - Esterno", autore: "Dani Par", licenza: "CC BY-SA 3.0", pagina: "https://commons.wikimedia.org/w/index.php?curid=35757783" },
  'manuale-1905': { src: manuale_1905, alt: "Una pagina di un manuale di palestra del 1905, con un atleta e la tabella delle misure", titolo: "Gymnasium manual - and prescription of exercise (1905) (14596107658)", autore: "Bolster, William W", licenza: "no known copyright restrictions", pagina: "https://commons.wikimedia.org/wiki/File:Gymnasium_manual_-_and_prescription_of_exercise_(1905)_(14596107658).jpg" },
  'birillo': { src: birillo, alt: "Un birillo da bowling di legno, consumato dai colpi", titolo: "Bowling pin used in the White House during Harry Truman's administration, c. 1951, wood - National Museum of American History - DSC00151", autore: "Daderot", licenza: "CC0", pagina: "https://commons.wikimedia.org/w/index.php?curid=49631393" },
  'cartolina-bowling': { src: cartolina_bowling, alt: "Una cartolina degli anni Cinquanta con venti piste da bowling", titolo: "O'Shaughnessy's Bowling Alley & Service Station, Metairie Louisiana postcard - interior", autore: "MWM", licenza: "public domain", pagina: "https://commons.wikimedia.org/wiki/File:O%27Shaughnessy%27s_Bowling_Alley_%26_Service_Station,_Metairie_Louisiana_postcard_-_interior.jpg" },
} satisfies Record<string, Foto>;

export const video = {
  bowling: {
    src: '/video/bowling-spare.webm',
    poster: '/video/bowling-spare.jpg',
    titolo: '20241018 4-5-7 spare conversion - ten-pin bowling',
    autore: 'RCraig09',
    licenza: 'CC BY-SA 4.0',
    pagina: 'https://commons.wikimedia.org/wiki/File:20241018_4-5-7_spare_conversion_-_ten-pin_bowling.webm',
  },
};
