import Image from 'next/image';
import type { Foto } from '@/content/foto';

// Il grande segno in rosso che apre ogni pagina: il nome in home, il numero nelle storie, la parola nelle altre.
// Su telefono le parole lunghe vanno a capo dove le spezza chi scrive (con \n), mai a metà.
export function Monumento({ testo, titolo = false }: { testo: string; titolo?: boolean }) {
  const righe = testo.split('\n');
  const Tag = titolo ? 'h1' : 'p';
  return (
    <Tag className="nome px-4 pt-2 text-[16.2vw] whitespace-nowrap text-ciliegia md:px-8 md:pt-6 md:text-[10.6vw]">
      {righe.map((r, i) => (
        <span key={i} className="block md:inline">
          {r}
          {i < righe.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}

// Una foto a tutta larghezza che si avvicina piano mentre scorre
export function FotoLarga({
  foto,
  priorita = false,
  rapporto = 'md:aspect-[21/9]',
  posizione = '50% 50%',
}: {
  foto: Foto;
  priorita?: boolean;
  rapporto?: string;
  posizione?: string;
}) {
  return (
    <figure className="overflow-hidden">
      <Image
        src={foto.src}
        alt={foto.alt}
        priority={priorita}
        sizes="100vw"
        className={`si-avvicina aspect-[4/3] w-full object-cover ${rapporto}`}
        style={{ objectPosition: posizione }}
      />
    </figure>
  );
}

// Due foto affiancate, la seconda più bassa: una pausa tra il testo e quello che viene dopo
export function CoppiaFoto({ a, b }: { a: Foto; b: Foto }) {
  return (
    <div data-entra className="grid gap-4 px-4 md:grid-cols-12 md:gap-8 md:px-8">
      <Image
        src={a.src}
        alt={a.alt}
        sizes="(min-width: 768px) 50vw, 100vw"
        className="aspect-[4/5] w-full object-cover md:col-span-6"
      />
      <Image
        src={b.src}
        alt={b.alt}
        sizes="(min-width: 768px) 40vw, 100vw"
        className="aspect-[4/5] w-full object-cover md:col-span-5 md:col-start-8 md:mt-40"
      />
    </div>
  );
}
