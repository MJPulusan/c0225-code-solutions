import { useState } from 'react';

type Props = {
  descriptions: string[];
};
export function Description({ descriptions }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= descriptions.length - 1) {
      console.log(index);
      setIndex(0);
      console.log(index);
    } else {
      console.log(index);
      setIndex(index + 1);
      console.log(index);
    }
  }
  return <p onClick={handleClick}>{descriptions[index]}</p>;
}
