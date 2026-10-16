import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { storie } from '@/content';
import { fotoStorie } from '@/content/foto-storie';
import { Monumento, FotoLarga, CoppiaFoto } from '@/components/Pagina';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return storie.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = storie.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.titolo,
    description: s.riassunto,
    alternates: { canonical: `/storie/${s.slug}` },
    openGraph: { type: 'article', title: s.titolo, description: s.riassunto },
  };
}

export default async function PaginaStoria({ params }: Props) {
  const { slug } = await params;
  const s = storie.find((x) => x.slug === slug);
  if (!s) notFound();
  const { default: Contenuto } = await import(`@/content/storie/${slug}.mdx`);
  const altre = storie.filter((x) => x.slug !== slug);
  const [apertura, primaCoppia, secondaCoppia] = fotoStorie[slug];

  return (
    <>
      <div aria-hidden="true" className="barra-lettura fixed top-0 left-0 z-50 h-1 w-full bg-ciliegia" />
      <article>
        <header>
          <Monumento testo={s.numero} />
          <div className="mt-6 px-4 md:mt-8 md:grid md:grid-cols-12 md:gap-x-8 md:px-8">
            <h1 className="testa text-[1.5rem] leading-[1.1] text-balance md:col-span-8 md:text-[clamp(1.75rem,2.6vw,2.5rem)]">
              {s.titolo}
            </h1>
            <p className="mt-3 text-grigio md:col-span-4 md:col-start-9 md:mt-1">
              {s.azienda}, {s.periodo}. {s.minuti} minuti di lettura.
            </p>
          </div>
        </header>

        <div className="mt-10 md:mt-14">
          <FotoLarga foto={apertura} priorita />
        </div>

        <div className="mt-14 px-4 md:mt-24 md:grid md:grid-cols-12 md:gap-x-8 md:px-8">
          <aside data-entra aria-label="Per chi ha fretta" className="self-start md:col-span-3">
            <p className="testa text-[1.75rem] md:text-[2rem]">Per chi ha fretta</p>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="font-bold">Ruolo</dt>
                <dd className="text-grigio">{s.ruolo}</dd>
              </div>
              <div>
                <dt className="font-bold">Periodo</dt>
                <dd className="text-grigio">{s.periodo}</dd>
              </div>
              <div>
                <dt className="font-bold">In una frase</dt>
                <dd className="text-grigio">{s.fretta}</dd>
              </div>
            </dl>
          </aside>
          <div data-entra-ciascuno className="testo-lungo mt-14 max-w-[62ch] md:col-span-7 md:col-start-5 md:mt-0">
            <Contenuto />
          </div>
        </div>
      </article>

      <div className="mt-24 md:mt-40">
        <CoppiaFoto a={primaCoppia} b={secondaCoppia} />
      </div>

      <nav aria-labelledby="altre-storie" className="mt-24 bg-superficie px-4 py-20 md:mt-40 md:px-8 md:py-28">
        <h2 id="altre-storie" className="testa text-[1.75rem] md:text-[2rem]">
          Le altre storie
        </h2>
        <ul className="mt-10 grid gap-14 md:grid-cols-2 md:gap-8">
          {altre.map((a) => (
            <li key={a.slug} data-entra>
              <Link href={`/storie/${a.slug}`} className="group block no-underline">
                <div className="overflow-hidden">
                  <Image
                    src={fotoStorie[a.slug][0].src}
                    alt={fotoStorie[a.slug][0].alt}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="testa cifre mt-6 block text-[16.2vw] transition-colors group-hover:text-ciliegia md:text-[clamp(3rem,6.4vw,6.5rem)] md:leading-[0.95]">
                  {a.numero}
                </span>
                <span className="mt-3 block font-bold">{a.titolo}</span>
                <span className="mt-1 block text-grigio">
                  {a.azienda}, {a.periodo}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
