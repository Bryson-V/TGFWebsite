/** @type {import('next').NextJSConfigFile} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

// If repository name is TGFWebsite
const repoName = 'TGFWebsite';

const nextConfig = {
  output: 'export',
  // Set the base path to your repository name when deploying on GitHub Actions
  basePath: isGithubActions ? `/${repoName}` : '',
  assetPrefix: isGithubActions ? `/${repoName}/` : '',
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
};

export default nextConfig;