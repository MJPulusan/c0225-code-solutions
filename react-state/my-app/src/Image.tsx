import './Image.css';
import { useState } from 'react';

type Props = {
  srcs: string[];
};
export function Image({ srcs }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= srcs.length - 1) {
      console.log(index);
      setIndex(0);
      console.log(index);
    } else {
      console.log(index);
      setIndex(index + 1);
      console.log(index);
    }
  }
  return <img src={srcs[index]} onClick={handleClick} />;
}

// return (
//     <div className="d-flex justify-content-center">
//       <div className="width-50 ">
//         <img className="image-fill" src={srcs} alt="space-image" />
//       </div>
//     </div>
//   );
// }
