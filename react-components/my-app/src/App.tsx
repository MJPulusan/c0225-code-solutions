import './App.css';
import { Header } from './Header.tsx';
import { Image } from './Image.tsx';
import { Caption } from './Caption.tsx';
import { Description } from './Description.tsx';
import { Button } from './Button.tsx';

export default function App() {
  return (
    <>
      <Header />
      <Image />
      <Caption />
      <Description />
      <Button />
    </>
  );
}
