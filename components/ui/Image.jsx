// components/ui/Image.jsx
import NextImage from 'next/image';

export default function Image({ src, ...props }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Clean path & handle relative vs absolute paths
  let finalSrc = src;
  if (typeof src === 'string' && src.startsWith('/') && !src.startsWith('http')) {
    finalSrc = `${basePath}${src}`;
  }

  return <NextImage src={finalSrc} {...props} />;
}