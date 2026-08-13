export function getAssetPath(path) {
  if (!path) return '';
  // If it's already an external link, return it as-is
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;

  return `${basePath}${cleanPath}`;
}