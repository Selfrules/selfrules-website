import { foto, mattia, schermate, type Immagine } from './foto';
import type { Barre } from './decisioni';

// Cosa mostra il palco di ogni storia, capitolo per capitolo. Il primo è l'apertura, prima del primo titolo.
// Sul computer il palco resta fermo a sinistra e cambia mentre si legge; sul telefono ogni scena compare sotto il suo titolo.

export type Scena =
  | { tipo: 'foto'; immagine: Immagine }
  | { tipo: 'schermata'; immagine: Immagine; stretta?: boolean }
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
    { tipo: 'numero', numero: '3 sprint', detto: 'risparmiati con mezz’ora di telefonata' },
  ],
  palestra: [
    { tipo: 'foto', immagine: foto.manubri },
    { tipo: 'schermata', immagine: schermate.classe, stretta: true },
    { tipo: 'foto', immagine: foto.postIt },
    { tipo: 'schermata', immagine: schermate.assistente, stretta: true },
    { tipo: 'barre', barre: { totale: 235, accese: 217, dopo: '' }, accese: true, numero: '217 su 235', detto: 'attività del gestionale chiuse al 13 ottobre 2026' },
    { tipo: 'foto', immagine: mattia.alto },
  ],
};
