import Link from 'next/link';
import { Barre } from '@/components/Barre';

export default function NonTrovata() {
  return (
    <div className="px-[var(--margine)] pt-10 pb-24 lg:pt-20">
      <p className="cifra text-verde">404</p>
      <Barre barre={{ totale: 44, accese: 0, dopo: '' }} accese={false} fitte className="mt-6 max-w-[40rem]" />
      <h1 className="text-testa mt-10">Questa pagina non c&apos;è più</h1>
      <p className="mt-5 max-w-[48ch]">
        Il sito è stato rifatto a ottobre 2026 e qualche indirizzo vecchio è rimasto per strada. Nessuna delle 44 barre è
        verde, quindi non era un problema che costa soldi. Le cose importanti stanno qui.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-6">
        <Link href="/" className="pulsante">
          Torna all&apos;inizio
        </Link>
        <Link href="/storie" className="collegamento font-semibold">
          Leggi le storie
        </Link>
      </div>
    </div>
  );
}
