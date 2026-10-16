import Link from 'next/link';
import { Colonna, TestataPagina } from '@/components/Titolo';

export default function NonTrovata() {
  return (
    <Colonna>
      <TestataPagina
        meta="Errore 404"
        titolo="Questa pagina non c'è più"
        intro="Il sito è stato rifatto a ottobre 2026 e qualche indirizzo vecchio è rimasto per strada. Le cose importanti stanno qui sotto."
      />
      <div className="flex flex-wrap gap-6">
        <Link href="/" className="bottone">
          Torna all&apos;inizio
        </Link>
        <Link href="/storie" className="link self-center">
          Leggi le storie
        </Link>
      </div>
    </Colonna>
  );
}
