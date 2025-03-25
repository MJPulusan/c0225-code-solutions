import { useState } from 'react';

type Props = {
  captions: string[];
};
export function Caption({ captions }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= captions.length - 1) {
      console.log(index);
      setIndex(0);
      console.log(index);
    } else {
      console.log(index);
      setIndex(index + 1);
      console.log(index);
    }
  }
  return <h3 onClick={handleClick}>{captions[index]}</h3>;
}
