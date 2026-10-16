import type { Metadata } from 'next';
import { AGGIORNATO } from '@/content';
import Contenuto from '@/content/pagine/adesso.mdx';
import { Colonna, TestataPagina } from '@/components/Titolo';

export const metadata: Metadata = {
  title: 'Adesso',
  description: 'Cosa sto facendo adesso, e cosa cerco. Aggiornata a mano, con la data in cima.',
  alternates: { canonical: '/adesso' },
};

export default function PaginaAdesso() {
  return (
    <Colonna>
      <TestataPagina meta={`Aggiornato il ${AGGIORNATO}`} titolo="Cosa sto facendo adesso" />
      <div className="testo-lungo blocchi appare -mt-6">
        <Contenuto />
      </div>
    </Colonna>
  );
}
