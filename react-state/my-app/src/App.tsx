import { Header } from './Header';
import { Image } from './Image';
import { Caption } from './Caption';
import { Description } from './Description';
import { Button } from './Button';
import './App.css';

export default function App() {
  const imageList = [
    '/balloon.jpg',
    '/camera.jpg',
    '/cool-car.jpg',
    '/cool-kitty.jpg',
    '/starry-sky.jpeg',
  ];

  const captionList = [
    'Hot Air Balloon',
    'Vintage Camera',
    'Cool Car',
    'Cool Kitty',
    'Starry Sky',
  ];

  const descriptionList = [
    'a colorful hot-air balloon',
    'a nice vintage camera',
    'a fast cool car',
    'a super cool kitty',
    'an epic starry sky',
  ];

  return (
    <>
      <Header text="React Image Bank" />
      <Image srcs={imageList} />
      <Caption captions={captionList} />
      <Description descriptions={descriptionList} />
      <Button label="Click for Next Image" />
    </>
  );
}
