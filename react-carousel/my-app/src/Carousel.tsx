import { useState, useEffect, useCallback } from 'react';
import {
  GoChevronLeft,
  GoChevronRight,
  GoDot,
  GoDotFill,
} from 'react-icons/go';

export type Image = {
  src: string;
  alt: string;
};

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = useCallback(() => {
    const nextIndex = (imageIndex + 1) % images.length;
    setImageIndex(nextIndex);
  }, [images, imageIndex]);

  const prevImage = useCallback(() => {
    const previousIndex = (imageIndex - 1 + images.length) % images.length;
    setImageIndex(previousIndex);
  }, [images, imageIndex]);

  useEffect(() => {
    const timeoutHandle = setTimeout(nextImage, 3000);
    return () => clearTimeout(timeoutHandle);
  }, [nextImage]);

  return (
    <div className="carousel">
      <PrevButton onClick={prevImage} />
      <NextButton onClick={nextImage} />
      <ImageCard image={images[imageIndex]} />
      <Dots
        numDots={images.length}
        activeIndex={imageIndex}
        onClick={(i) => setImageIndex(i)}
      />
    </div>
  );
}

type NextProps = {
  onClick: () => void;
};
function NextButton({ onClick }: NextProps) {
  return (
    <GoChevronRight onClick={onClick} className="next-image" size="2rem" />
  );
}

type PrevProps = {
  onClick: () => void;
};
function PrevButton({ onClick }: PrevProps) {
  return (
    <GoChevronLeft onClick={onClick} className="previous-image" size="2rem" />
  );
}

type CardProps = {
  image: Image;
};
function ImageCard({ image }: CardProps) {
  const { src, alt } = image;
  return (
    <div className="image-wrapper">
      <img className="current-image" src={src} alt={alt} />
      <h2 className="image-caption">{alt}</h2>
    </div>
  );
}

type DotsProps = {
  numDots: number;
  activeIndex: number;
  onClick: (index: number) => void;
};

function Dots({ numDots, activeIndex, onClick }: DotsProps) {
  const images = [];
  for (let i = 0; i < numDots; i++) {
    const Icon = i === activeIndex ? GoDotFill : GoDot;
    images.push(
      <Icon key={i} onClick={() => onClick(i)} className="progress-dot" />
    );
  }
  return <div className="progress-dots">{images}</div>;
}
