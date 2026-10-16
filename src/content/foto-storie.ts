import { foto, schermate, type Foto } from './foto';

// Le foto del mondo di ogni storia: la prima apre la pagina, le altre due chiudono il testo
export const fotoStorie: Record<string, [Foto, Foto, Foto]> = {
  pagamenti: [foto.birilli, foto.registratore, foto['cartolina-bowling']],
  leadsbridge: [foto.telefonista, foto.centralino, foto['centralino-legno']],
  palestra: [foto.sollevatore, foto.manubri, foto.rocca],
};

// La foto che apre ogni nota
export const fotoNote: Record<string, Foto> = {
  'riunione-dove-tutti-dicono-si': foto['riunione-1943'],
  'perche-prototipo-in-codice': schermate.lista as Foto,
  'il-cliente-sa-cosa-non-vuole': foto['carta-da-parati'],
};
