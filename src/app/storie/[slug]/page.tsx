import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { storie } from '@/content';
import { Colonna, TestataPagina } from '@/components/Titolo';

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

  return (
    <>
      <div aria-hidden="true" className="barra-lettura fixed top-0 left-0 z-50 h-[3px] w-full bg-senape" />
      <Colonna>
        <article>
          <TestataPagina sopra={`Storia · ${s.azienda} · ${s.periodo}`} titolo={s.titolo} />

          <aside
            aria-label="Per chi ha fretta"
            className="appare mb-12 rounded-md border border-riga bg-pannello p-5 sm:p-6"
            style={{ '--ritardo': '0.45s' } as React.CSSProperties}
          >
            <p className="etichetta !text-inchiostro">Per chi ha fretta</p>
            <dl className="mt-3 grid grid-cols-[6.5rem_1fr] gap-x-4 gap-y-2 text-[0.97rem]">
              <dt className="text-matita">Ruolo</dt>
              <dd>{s.ruolo}</dd>
              <dt className="text-matita">Periodo</dt>
              <dd>{s.periodo}</dd>
              <dt className="text-matita">Il numero</dt>
              <dd className="font-titolo text-xl leading-tight font-medium">{s.numero}</dd>
              <dt className="text-matita">In una frase</dt>
              <dd>{s.fretta}</dd>
            </dl>
          </aside>

          <div className="testo-lungo">
            <Contenuto />
          </div>
        </article>

        <nav aria-label="Altre storie" className="mt-20 border-t border-inchiostro pt-8">
          <p className="etichetta">Le altre storie</p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {altre.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/storie/${a.slug}`}
                  className="group block h-full rounded-md border border-riga p-5 no-underline transition-colors hover:border-verde"
                >
                  <span className="font-titolo text-3xl font-medium">{a.numero}</span>
                  <span className="mt-2 block">{a.titolo}</span>
                  <span className="link mt-3 inline-block text-[0.95rem]">
                    Leggi <span className="freccia" aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Colonna>
    </>
  );
}
