import { useState } from 'react';

type Props = {
  items: string[];
};

export default function RotatingBanner({ items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // view item by index
  const numberedItem = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="rotating-banner">
      <h1>{items[currentIndex]}</h1>

      {/* Prev-top */}
      <button onClick={prevItem}>Prev</button>

      {/* Middle-numbers */}
      <div className="number-buttons">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => numberedItem(index)}
            className={index === currentIndex ? 'active' : ''}>
            {index}
          </button>
        ))}
      </div>

      {/* Next-bottom */}
      <button onClick={nextItem}>Next</button>
    </div>
  );
}
