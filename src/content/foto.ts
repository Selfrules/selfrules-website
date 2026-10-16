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
import carta_da_parati from '@/foto/carta-da-parati.jpg';
import campionario_1931 from '@/foto/campionario-1931.jpg';
import centralino_legno from '@/foto/centralino-legno.jpg';
import riunione_1943 from '@/foto/riunione-1943.jpg';
import post_it from '@/foto/post-it.jpg';
import casahunter_lista from '@/foto/casahunter-lista.jpg';
import casahunter_mappa from '@/foto/casahunter-mappa.jpg';
import casahunter_statistiche from '@/foto/casahunter-statistiche.jpg';

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
  'carta-da-parati': { src: carta_da_parati, alt: "Un campionario di carte da parati del 1915, aperto su due motivi diversi", titolo: "Sample Book, The Larkin Wallpaper Book, No. 4, ca. 1915", autore: "Unknown artist Unknown artist", licenza: "public domain", pagina: "https://commons.wikimedia.org/wiki/File:Sample_Book,_The_Larkin_Wallpaper_Book,_No._4,_ca._1915_(CH_18476109-17).jpg" },
  'campionario-1931': { src: campionario_1931, alt: "La copertina di un campionario di carte da parati del 1931", titolo: "Wallpaper sample book, 'Wallpapers' (1931)", autore: "museumofnewzealand", licenza: "CC0", pagina: "https://www.rawpixel.com/image/9956946/wallpaper-sample-book-wallpapers-1931-wall-paper-manufacturers-ltd" },
  'centralino-legno': { src: centralino_legno, alt: "Un centralino telefonico di legno degli anni Quaranta", titolo: "1940s N935 telephone exchange", autore: "Rodhullandemu", licenza: "CC BY-SA 4.0", pagina: "https://commons.wikimedia.org/w/index.php?curid=66686359" },
  'riunione-1943': { src: riunione_1943, alt: "Una riunione di comitato attorno a un tavolo, nel 1943", titolo: "Meeting of the Niagara Frontier regional committee of the United States War Manpower Commssion.8d16929v", autore: "Marjory Collins", licenza: "public domain", pagina: "https://commons.wikimedia.org/wiki/File:Meeting_of_the_Niagara_Frontier_regional_committee_of_the_United_States_War_Manpower_Commssion.8d16929v.jpg" },
  'post-it': { src: post_it, alt: "Un muro coperto di post-it, in un ufficio", titolo: "Sticky notes on the wall of the Wikimedia Foundation office, 2010-10-26", autore: "Ragesoss", licenza: "CC BY 3.0", pagina: "https://commons.wikimedia.org/w/index.php?curid=12023461" },
} satisfies Record<string, Foto>;

// Schermate di CasaHunter, il programma di Mattia: non servono crediti
export const schermate = {
  lista: { src: casahunter_lista, alt: 'CasaHunter, la lista degli annunci col voto di ciascuno' },
  mappa: { src: casahunter_mappa, alt: 'CasaHunter, la mappa degli annunci in provincia di Modena e Bologna' },
  statistiche: { src: casahunter_statistiche, alt: 'CasaHunter, i grafici su prezzi e annunci raccolti' },
};

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
