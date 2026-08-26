import NextImage from 'next/image';
import { getAssetPath } from '@/utils/paths';

export default function Image({ src, priority, loading, ...props }) {
  const finalSrc = getAssetPath(src);

  return (
    <NextImage
      src={finalSrc}
      priority={priority}
      // If priority is true, explicitly don't lazy load
      loading={priority ? 'eager' : loading} 
      {...props}
    />
  );
}