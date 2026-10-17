import Image from 'next/image';
import { foto } from '@/content/foto';

// Tre paesi, tre castelli, pochi chilometri. Le finestre ad arco vengono da qui: sono quelle delle rocche.
const paesi = [
  { foto: foto.savignano, nome: 'Savignano', riga: 'dove abito' },
  { foto: foto.spilamberto, nome: 'Spilamberto', riga: 'fino a maggio' },
  { foto: foto.vignola, nome: 'Vignola', riga: 'dove lavoro' },
];

export function TrePaesi() {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-3 lg:gap-5">
        {paesi.map((p, i) => (
          <li key={p.nome} data-entra style={{ '--ritardo': i } as React.CSSProperties}>
            <div className="arco foto-taglio">
              <Image src={p.foto.src} alt={p.foto.alt} sizes="(min-width: 1024px) 15vw, 33vw" className="aspect-[4/5] w-full object-cover" />
            </div>
            <p className="mt-2 font-semibold leading-tight">{p.nome}</p>
            <p className="text-piccolo text-grigio">{p.riga}</p>
          </li>
        ))}
      </ul>
      <p className="mt-5 max-w-[40ch] text-piccolo text-grigio">
        Tre paesi, tre castelli, pochi chilometri di valle del Panaro. Due foto sono di Paolo Monti, 1976.
      </p>
    </div>
  );
}
