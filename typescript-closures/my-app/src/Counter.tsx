import { useEffect, useState, useCallback } from 'react';

type Data = {
  foo: string;
};

export function Counter() {
  const [data, setData] = useState<Data>();
  const [counter, setCounter] = useState(0);

  const getData = useCallback(() => {
    return { foo: 'bar' };
  }, []); // function does not get recreated.

  useEffect(() => {
    const fetchedData = getData();
    setData(fetchedData);
    setCounter((prev) => prev + 1);
  }, [getData]); // getData is now stable.

  return (
    <div>
      Fetched {JSON.stringify(data)} {counter} times
    </div>
  );
}
