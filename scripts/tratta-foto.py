"""Trattamento unico delle foto del sito (redesign del 16/10/2026, docs/design-racconto.md).

Bicromia inchiostro e carta rosa, grana leggera, taglio fisso. Gli originali stanno in assets/
(fuori dal repo), le copie trattate in src/foto/r/. Uso: python scripts/tratta-foto.py
"""
import random
from PIL import Image, ImageOps, ImageFilter

INCHIOSTRO = (43, 38, 34)
CARTA = (241, 235, 232)

# nome: (sorgente, rapporto larghezza/altezza, punto del taglio 0-1 orizzontale, verticale)
FOTO = {
    'ritratto': ('public/mattia-de-luca.jpg', 4 / 5, 0.5, 0.25),
    'ritratto-alto': ('public/mattia-de-luca.jpg', 2 / 3, 0.5, 0.0),
    'birilli': ('assets/bowling-pins-1503751581.jpg', 4 / 5, 0.5, 0.6),
    'pista': ('assets/20241018-4-5-7-spare-conversion-ten-poster.jpg', 3 / 2, 0.5, 0.5),
    'insegna': ('assets/terrace-lanes-frederick-md2.jpg', 3 / 2, 0.5, 0.5),
    'telefonista': ('assets/09-02-1950-08068-telefoniste.jpg', 4 / 5, 0.6, 0.4),
    'centralino': ('assets/wac-telephone-switchboard-operators.jpg', 3 / 2, 0.5, 0.5),
    'manubri': ('assets/dumbells-and-free-weights-in-a-gym.jpg', 4 / 5, 0.45, 0.6),
    'rocca': ('assets/vignola-rocca-di-vignola-2025-09-05.jpg', 4 / 5, 0.7, 0.5),
    'ciliegie': ('assets/cherries-of-vignola-9062500716.jpg', 4 / 5, 0.5, 0.5),
    'registratore': ('assets/national-cash-register-1918.jpg', 4 / 5, 0.5, 0.5),
    'riunione': ('assets/meeting-of-the-niagara-frontier-regional-committee.jpg', 3 / 2, 0.5, 0.5),
    'post-it': ('assets/sticky-notes-on-the-wall-of-the.jpg', 4 / 5, 0.4, 0.5),
    'savignano': ('assets/savignano-sul-panaro-castello-di-savignano-202209141607.jpg', 4 / 5, 0.33, 0.5),
    'spilamberto': ('assets/servizio-fotografico-spilamberto-1976.jpg', 4 / 5, 0.62, 0.5),
    'vignola': ('assets/servizio-fotografico-vignola-1976.jpg', 4 / 5, 0.5, 0.5),
    'frutteti': ('assets/servizio-fotografico-vignola-1976-2.jpg', 3 / 2, 0.5, 0.6),
    'carta-da-parati': ('assets/sample-book-the-larkin-wallpaper-book-no.jpg', 3 / 2, 0.5, 0.5),
}
LATO = 1400
# Ritagli fatti a mano sull'originale (sinistra, alto, destra, basso)
RITAGLI = {'volto': ('public/mattia-de-luca.jpg', (390, 380, 830, 820))}


def taglia(im: Image.Image, rapporto: float, cx: float, cy: float) -> Image.Image:
    w, h = im.size
    if w / h > rapporto:
        nw, nh = int(h * rapporto), h
    else:
        nw, nh = w, int(w / rapporto)
    x = int((w - nw) * cx)
    y = int((h - nh) * cy)
    return im.crop((x, y, x + nw, y + nh))


def bicromia(im: Image.Image) -> Image.Image:
    grigio = ImageOps.autocontrast(ImageOps.grayscale(im), cutoff=1)
    colore = ImageOps.colorize(grigio, black=INCHIOSTRO, white=CARTA, mid=(150, 138, 133))
    random.seed(16)
    rumore = Image.effect_noise(colore.size, 22).filter(ImageFilter.GaussianBlur(0.4))
    grana = Image.merge('RGB', (rumore, rumore, rumore))
    return Image.blend(colore, grana, 0.06)


for nome, (sorgente, rapporto, cx, cy) in FOTO.items():
    im = Image.open(sorgente).convert('RGB')
    im = taglia(im, rapporto, cx, cy)
    im.thumbnail((LATO, LATO))
    bicromia(im).save(f'src/foto/r/{nome}.jpg', quality=82, optimize=True, progressive=True)
    print(nome, im.size)

for nome, (sorgente, box) in RITAGLI.items():
    im = Image.open(sorgente).convert('RGB').crop(box)
    bicromia(im).save(f'src/foto/r/{nome}.jpg', quality=82, optimize=True, progressive=True)
    print(nome, im.size)
