'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { palchi, type Scena as ScenaDati } from '@/content/palchi';
import { video } from '@/content/foto';
import { Barre } from './Barre';

// Un tiro di bowling, muto e in loop, nello stesso tono delle foto
export function Clip({ className = '' }: { className?: string }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={video.bowling.poster}
      aria-hidden="true"
      className={`clip ${className}`}
    >
      <source src={video.bowling.src} type="video/webm" />
    </video>
  );
}

// Il passaggio più usato di LeadsBridge: dire quale dato va in quale campo del CRM, disegnato in HTML
function Campi() {
  const righe = [
    ['full_name', 'Nome del contatto'],
    ['email', 'Email'],
    ['phone_number', 'Telefono'],
    ['ad_name', '?'],
  ];
  return (
    <div className="campi" data-ui>
      <p className="campi-testa">Da Meta al CRM</p>
      {righe.map(([da, a], i) => (
        <div key={da} className="campi-riga" style={{ '--i': i } as React.CSSProperties}>
          <span className="campi-da">{da}</span>
          <span aria-hidden="true">→</span>
          <span className={a === '?' ? 'campi-a campi-vuoto' : 'campi-a'}>{a === '?' ? 'scegli un campo' : a}</span>
        </div>
      ))}
    </div>
  );
}

export function Scena({ scena, inLinea = false }: { scena: ScenaDati; inLinea?: boolean }) {
  switch (scena.tipo) {
    case 'foto':
      return (
        <figure className="scena scena-foto">
          <Image src={scena.immagine.src} alt={scena.immagine.alt} sizes={inLinea ? '100vw' : '50vw'} className="scena-img" />
          {scena.immagine.didascalia && <figcaption className="didascalia">{scena.immagine.didascalia}</figcaption>}
        </figure>
      );
    case 'schermata':
      return (
        <figure className="scena scena-schermata">
          <div className={scena.stretta ? 'telefono' : 'schermo'} data-ui>
            <Image src={scena.immagine.src} alt={scena.immagine.alt} sizes="400px" className="w-full" />
          </div>
          {scena.immagine.didascalia && <figcaption className="didascalia">{scena.immagine.didascalia}</figcaption>}
        </figure>
      );
    case 'barre':
      return (
        <div className="scena scena-segno">
          <p className="cifra text-verde">{scena.numero}</p>
          <p className="mt-2 max-w-[28ch] text-lead">{scena.detto}</p>
          <Barre barre={scena.barre} accese={scena.accese} className="mt-8" />
        </div>
      );
    case 'numero':
      return (
        <div className="scena scena-segno">
          <p className="cifra cifra-grande text-verde">{scena.numero}</p>
          <p className="mt-2 max-w-[28ch] text-lead">{scena.detto}</p>
        </div>
      );
    case 'campi':
      return (
        <div className="scena scena-segno">
          <Campi />
          <p className="didascalia mt-6">Il passaggio dove la gente si bloccava. Ogni campo, una scelta.</p>
        </div>
      );
    case 'video':
      return (
        <figure className="scena scena-foto">
          <Clip className="scena-img" />
          <figcaption className="didascalia">Uno spare. Il punto non lo fa il primo tiro.</figcaption>
        </figure>
      );
  }
}

// Sul telefono la scena di un capitolo compare sotto il suo titolo. Sul computer la mostra il palco fermo.
export function ScenaInLinea({ storia, n }: { storia: string; n: number }) {
  const scena = palchi[storia]?.[n];
  if (!scena) return null;
  return (
    <div className="scena-in-linea lg:hidden" data-entra>
      <Scena scena={scena} inLinea />
    </div>
  );
}

// Il palco fermo a sinistra: guarda quale capitolo è a metà schermo e mostra la sua scena.
export function Palco({ storia, testo }: { storia: string; testo: string }) {
  const scene = palchi[storia] ?? [];
  const [attiva, setAttiva] = useState(0);

  useEffect(() => {
    const radice = document.getElementById(testo);
    if (!radice) return;
    const titoli = Array.from(radice.querySelectorAll('h2'));
    const aggiorna = () => {
      const meta = window.innerHeight * 0.55;
      let n = 0;
      titoli.forEach((t, i) => {
        if (t.getBoundingClientRect().top < meta) n = i + 1;
      });
      setAttiva(n);
    };
    aggiorna();
    window.addEventListener('scroll', aggiorna, { passive: true });
    window.addEventListener('resize', aggiorna);
    return () => {
      window.removeEventListener('scroll', aggiorna);
      window.removeEventListener('resize', aggiorna);
    };
  }, [testo]);

  return (
    <div className="palco" aria-hidden="true">
      {scene.map((s, i) => (
        <div key={i} className="palco-strato" data-attiva={i === attiva ? 'si' : 'no'}>
          <Scena scena={s} />
        </div>
      ))}
    </div>
  );
}
