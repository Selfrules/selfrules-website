import type { Metadata } from 'next';
import { storie } from '@/content';
import { Colonna, TestataPagina } from '@/components/Titolo';
import { RigaStoria } from '@/components/RigaStoria';

export const metadata: Metadata = {
  title: 'Storie',
  description: 'Tre storie con i numeri. Pagamenti, una funzione non costruita e una palestra con il suo gestionale.',
  alternates: { canonical: '/storie' },
};

export default function PaginaStorie() {
  return (
    <Colonna>
      <TestataPagina
        titolo="Tre storie, con i numeri"
        intro="Una storia per azienda. Il problema di chi lo aveva, cosa ho deciso, cosa ho scartato e com'è finita."
      />
      <ul>
        {storie.map((s) => (
          <RigaStoria key={s.slug} storia={s} dettagli />
        ))}
      </ul>
    </Colonna>
  );
}
