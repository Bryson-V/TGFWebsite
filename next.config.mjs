/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const repoName = 'TGFWebsite';
const basePath = isGithubActions ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  basePath: basePath,
  assetPrefix: isGithubActions ? `/${repoName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;