// lib/utils.js

// Named export that components can import
export function getAssetPath(path) {
  if (!path) return '';
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  // Avoid double slashes if path already has a leading slash
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}