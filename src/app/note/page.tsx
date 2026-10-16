import type { Metadata } from 'next';
import { note } from '@/content';
import { Colonna, TestataPagina } from '@/components/Titolo';
import { ListaNote } from '@/components/ListaNote';

export const metadata: Metadata = {
  title: 'Note',
  description: 'Appunti di prodotto, scritti quando una cosa mi è diventata chiara.',
  alternates: { canonical: '/note' },
};

export default function PaginaNote() {
  return (
    <Colonna>
      <TestataPagina
        titolo="Appunti di prodotto"
        intro="Le scrivo quando una cosa mi diventa chiara. Le altre tornano qui man mano che le rileggo."
      />
      <div>
        <ListaNote note={note} />
      </div>
    </Colonna>
  );
}
