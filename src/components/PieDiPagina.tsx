import { CopiaEmail } from './CopiaEmail';
import { LINKEDIN } from '@/content';

export function PieDiPagina() {
  return (
    <footer id="contatti" className="mt-24 border-t border-riga">
      <div className="mx-auto max-w-[680px] px-5 py-12 sm:px-0">
        <p className="font-titolo text-3xl leading-tight">Se ti è venuta voglia di parlarne, scrivimi.</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <CopiaEmail />
          <a href={LINKEDIN} className="link" rel="me" data-umami-event="linkedin">
            LinkedIn
          </a>
          <a href="/mattia-de-luca-cv.pdf" className="link" download data-umami-event="cv-scarica">
            Scarica il CV
          </a>
        </div>
        <p className="mt-10 text-sm text-matita">
          Scritto e costruito da me, con qualche agente AI che non si lamenta mai.
        </p>
      </div>
    </footer>
  );
}
