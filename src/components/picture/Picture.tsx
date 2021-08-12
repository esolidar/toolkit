import React, { FC } from 'react';
import Props from './Picture.types';

const Picture: FC<Props> = ({
  src,
  className,
  alt,
  sizes = [330, 425, 650, 768, 1200],
}: Props): JSX.Element => {
  return (
    <picture data-testid="picture">
      {sizes
        .sort((a, b) => a - b)
        .map(size => (
          <source key={size} media={`(max-width:${size}px)`} srcSet={`${src}?width=${size}`} />
        ))}
      <source
        media={`(min-width:${Math.max(...sizes)}px)`}
        srcSet={`${src}?width=${Math.max(...sizes)}`}
      />
      <img src={src} alt={alt} className={className} />
    </picture>
  );
};

export default Picture;
