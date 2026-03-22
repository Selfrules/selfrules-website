import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import createMDX from '@next/mdx';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      'remark-gfm',
    ],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/api/umami/:path*',
        destination: 'https://cloud.umami.is/:path*',
      },
    ];
  },
};

export default withMDX(withNextIntl(nextConfig));
