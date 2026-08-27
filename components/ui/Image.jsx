// components/ui/Image.jsx
import NextImage from 'next/image';
import { getAssetPath } from '@/lib/utils';

export default function Image({ src, priority, loading, ...props }) {
  const finalSrc = typeof src === 'string' ? getAssetPath(src) : src;

  return (
    <NextImage
      src={finalSrc}
      priority={priority}
      {...(!priority && { loading })}
      {...props}
    />
  );
}