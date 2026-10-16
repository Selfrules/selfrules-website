import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { storie } from '@/content';
import { Palco } from '@/components/Palco';

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

// La storia sul palco: sul computer a sinistra resta ferma la scena del capitolo che stai leggendo,
// sul telefono ogni scena compare sotto il suo titolo.
export default async function PaginaStoria({ params }: Props) {
  const { slug } = await params;
  const s = storie.find((x) => x.slug === slug);
  if (!s) notFound();
  const { default: Contenuto } = await import(`@/content/storie/${slug}.mdx`);
  const i = storie.findIndex((x) => x.slug === slug);
  const dopo = storie[(i + 1) % storie.length];

  return (
    <>
      <div aria-hidden="true" className="barra-lettura fixed top-0 left-0 z-50 h-1 w-full bg-verde" />
      <article className="lg:grid lg:grid-cols-2 lg:gap-x-12">
        <div className="hidden lg:block">
          <Palco storia={slug} testo={`testo-${slug}`} />
        </div>

        <div className="px-[var(--margine)] lg:px-0 lg:pr-[var(--margine)]">
          <header className="pt-8 lg:pt-24">
            <p className="cifra entra-subito text-verde">{s.numero}</p>
            <h1
              className="entra-subito mt-5 max-w-[30ch] text-[clamp(1.5rem,1.2rem+1vw,2.25rem)] leading-[1.08]"
              style={{ '--ritardo': 1 } as React.CSSProperties}
            >
              {s.titolo}
            </h1>
            <p className="entra-subito mt-4 text-grigio" style={{ '--ritardo': 2 } as React.CSSProperties}>
              {s.azienda}, {s.periodo}, come {s.ruolo}. Si legge in {s.minuti} minuti.
            </p>
            <div className="entra-subito mt-8 max-w-[40rem] bg-superficie p-6" style={{ '--ritardo': 3 } as React.CSSProperties}>
              <p className="font-semibold">Se hai un minuto</p>
              <p className="mt-2">{s.fretta}</p>
            </div>
          </header>

          <div id={`testo-${slug}`} data-entra-ciascuno className="testo-lungo mt-12 max-w-[40rem] pb-8 lg:mt-20">
            <Contenuto />
          </div>

          <nav aria-label="La prossima storia" className="mt-16 max-w-[40rem] bg-superficie p-6 md:p-10">
            <p className="text-grigio">La prossima storia</p>
            <Link href={`/storie/${dopo.slug}`} className="group mt-3 block no-underline">
              <span className="cifra block text-verde transition-transform group-hover:translate-x-2">{dopo.numero}</span>
              <span className="text-lead mt-3 block font-medium group-hover:underline">{dopo.titolo}</span>
            </Link>
          </nav>
        </div>
      </article>
    </>
  );
}
