import { foto, mattia, schermate, type Immagine } from './foto';
import type { Barre } from './decisioni';

// Cosa mostra il palco di ogni storia, capitolo per capitolo. Il primo è l'apertura, prima del primo titolo.
// Sul computer il palco resta fermo a sinistra e cambia mentre si legge; sul telefono ogni scena compare sotto il suo titolo.

export type Scena =
  | { tipo: 'foto'; immagine: Immagine; didascalia?: string }
  | { tipo: 'schermata'; immagine: Immagine; stretta?: boolean; nuda?: boolean }
  | { tipo: 'regole' }
  | { tipo: 'barre'; barre: Barre; accese: boolean; numero: string; detto: string }
  | { tipo: 'numero'; numero: string; detto: string }
  | { tipo: 'campi' }
  | { tipo: 'video' };

export const palchi: Record<string, Scena[]> = {
  pagamenti: [
    { tipo: 'foto', immagine: foto.birilli },
    { tipo: 'foto', immagine: foto.insegna },
    { tipo: 'barre', barre: { totale: 44, accese: 4, dopo: '' }, accese: false, numero: '44', detto: 'problemi aperti, tutti urgenti per qualcuno' },
    { tipo: 'barre', barre: { totale: 44, accese: 4, dopo: '' }, accese: true, numero: '4 su 44', detto: 'facevano perdere soldi ai centri' },
    { tipo: 'numero', numero: '99,83%', detto: 'dei pagamenti a buon fine, in 290 centri' },
    { tipo: 'video' },
  ],
  leadsbridge: [
    { tipo: 'foto', immagine: foto.telefonista },
    { tipo: 'foto', immagine: foto.centralino },
    { tipo: 'campi' },
    { tipo: 'barre', barre: { totale: 10, accese: 6, dopo: '' }, accese: true, numero: '60%', detto: 'chiedeva la funzione. Il problema l’avevano già risolto da soli' },
    { tipo: 'numero', numero: '35%', detto: 'di tempo in meno per mettere in piedi un’integrazione' },
    { tipo: 'numero', numero: '3 sprint', detto: 'risparmiati con cinque telefonate' },
  ],
  palestra: [
    { tipo: 'foto', immagine: foto.frutteti },
    { tipo: 'foto', immagine: foto.manubri },
    { tipo: 'regole' },
    { tipo: 'schermata', immagine: schermate.assistenteAnteprima },
    { tipo: 'schermata', immagine: schermate.postoLiberato, nuda: true },
    { tipo: 'foto', immagine: mattia.alto },
  ],
};
