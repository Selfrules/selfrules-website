export const POSTS = [
  'why-i-prototype-in-code',
  'the-meeting-where-everyone-says-yes',
  'why-metrics-lie-without-context',
  'when-ai-makes-sense-in-product',
  'managing-payments-at-scale',
  'remote-pm-across-countries',
  'build-vs-buy-framework',
  'seven-years-running-a-business',
] as const;

export type PostSlug = (typeof POSTS)[number];

export const POST_HERO_IMAGES: Record<PostSlug, { src: string; alt: string }> = {
  'build-vs-buy-framework': {
    src: '/images/notes/build-vs-buy-framework.png',
    alt: 'Wireframe illustration of a hammer and shopping cart separated by a dashed line — hello@selfrules.org ~ $ decide --build-or-buy?',
  },
  'when-ai-makes-sense-in-product': {
    src: '/images/notes/when-ai-makes-sense-in-product.png',
    alt: 'Wireframe illustration of a lightbulb with circuit filament — hello@selfrules.org ~ $ predict --human',
  },
  'why-i-prototype-in-code': {
    src: '/images/notes/why-i-prototype-in-code.png',
    alt: 'Wireframe illustration of a code editor with cursor — hello@selfrules.org ~ $ prototype --fast',
  },
  'managing-payments-at-scale': {
    src: '/images/notes/managing-payments-at-scale.png',
    alt: 'Wireframe illustration of a balance scale with coins and server — hello@selfrules.org ~ $ scale --payments',
  },
  'why-metrics-lie-without-context': {
    src: '/images/notes/why-metrics-lie-without-context.png',
    alt: 'Wireframe illustration of bar chart with warping bars — hello@selfrules.org ~ $ measure --context',
  },
  'remote-pm-across-countries': {
    src: '/images/notes/remote-pm-across-countries.png',
    alt: 'Wireframe illustration of a globe with timezone connections — hello@selfrules.org ~ $ sync --timezone',
  },
  'seven-years-running-a-business': {
    src: '/images/notes/seven-years-running-a-business.png',
    alt: 'Wireframe illustration of an office chair — hello@selfrules.org ~ $ build --forever',
  },
  'the-meeting-where-everyone-says-yes': {
    src: '/images/notes/the-meeting-where-everyone-says-yes.png',
    alt: 'Wireframe illustration of a meeting table with empty chairs — hello@selfrules.org ~ $ meeting --honest',
  },
};

export function getAdjacentPosts(slug: PostSlug) {
  const index = POSTS.indexOf(slug);
  return {
    prev: index < POSTS.length - 1 ? POSTS[index + 1] : null,
    next: index > 0 ? POSTS[index - 1] : null,
  };
}
