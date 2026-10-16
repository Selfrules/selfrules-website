import Link from 'next/link';
import { Monumento } from '@/components/Pagina';

export default function NonTrovata() {
  return (
    <div className="pb-24">
      <Monumento testo="404" />
      <div className="mt-6 px-4 md:mt-8 md:px-8">
        <h1 className="testa text-[1.75rem] md:text-[2rem]">Questa pagina non c&apos;è più</h1>
        <p className="mt-4 max-w-[52ch]">
          Il sito è stato rifatto a ottobre 2026 e qualche indirizzo vecchio è rimasto per strada. Le cose importanti
          stanno qui sotto.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link href="/" className="pulsante">
            Torna all&apos;inizio
          </Link>
          <Link href="/storie" className="collegamento font-bold">
            Leggi le storie
          </Link>
        </div>
      </div>
    </div>
  );
}
