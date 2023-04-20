import { useState } from 'react';

export default function TableLetter({ index, letter }) {
  const [flip, setFlip] = useState(false);

  setTimeout(() => {
    setFlip(true);
  }, 100 * index);

  return <div className={flip ? 'flip' : null}>{flip ? letter : null}</div>;
}
