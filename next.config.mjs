/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: 'export',
  // Adds /TGFWebsite to routes and static assets when built via GitHub Actions
  basePath: isGithubActions ? '/TGFWebsite' : '',
  assetPrefix: isGithubActions ? '/TGFWebsite/' : '',
  images: {
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;