import { useState, useEffect } from 'react';
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

const images: Image[] = [
  {
    src: '/images/fushiguro.webp',
    alt: 'Megumi Fushiguro',
  },
  {
    src: '/images/inumaki.webp',
    alt: 'Toge Inumaki',
  },
  {
    src: '/images/itadori.webp',
    alt: 'Yuji Itadori',
  },
  {
    src: '/images/kugisaki.webp',
    alt: 'Nobara Kugisaki',
  },
  {
    src: '/images/panda.webp',
    alt: 'Panda',
  },
  {
    src: '/images/zen-in.webp',
    alt: "Maki Zen'in",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  const handleInteraction = (newIndex: number) => {
    setCurrentIndex(newIndex);
    startTimer(); // Reset the 3-second timer after every click
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (timer) clearTimeout(timer); // Cleanup on unmount
    };
  }, []);

  const startTimer = () => {
    if (timer) clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        // NodeJS.Timeout
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        startTimer();
      }, 3000)
    );
  };

  const dots = (index: number) => {
    setCurrentIndex(index);
    startTimer();
  };

  return (
    <>
      <div>
        <button
          onClick={() =>
            handleInteraction(
              (currentIndex - 1 + images.length) % images.length
            )
          }>
          <GoChevronLeft size={24} />
        </button>
        <button
          onClick={() => handleInteraction((currentIndex + 1) % images.length)}>
          <GoChevronRight size={24} />
        </button>
      </div>

      <div>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
      </div>

      {/* Dot Navigation */}
      <div className="dot-icon">
        {images.map((_, index) => (
          <button key={index} onClick={() => dots(index)}>
            {currentIndex === index ? (
              <GoDotFill size={24} />
            ) : (
              <GoDot size={24} />
            )}
          </button>
        ))}
      </div>
    </>
  );
}
