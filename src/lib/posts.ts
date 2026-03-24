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

export function getAdjacentPosts(slug: PostSlug) {
  const index = POSTS.indexOf(slug);
  return {
    prev: index < POSTS.length - 1 ? POSTS[index + 1] : null,
    next: index > 0 ? POSTS[index - 1] : null,
  };
}
