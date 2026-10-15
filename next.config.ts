import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  async rewrites() {
    return [
      { source: '/api/umami/:path*', destination: 'https://cloud.umami.is/:path*' },
    ];
  },
};

export default withMDX(nextConfig);
