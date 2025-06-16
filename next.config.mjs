import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  output: "export",
  basePath: "/shelter",
  images: {
    unoptimized: true
  }
};

const withMDX = createMDX({
  // Add Markdown plugins here
})

export default withMDX(nextConfig);
