import React from 'react';
import { useState } from 'react';
import TableLetter from './TableLetter';

function TableCell({ word, index }) {
  const [flip, setFlip] = useState(false);

  setTimeout(() => {
    setFlip(true);
  }, 100 * index);

  return (
    <td>
      {Array.from(word).map((letter, index) => (
        <TableLetter key={index} letter={letter} index={index} />
      ))}
    </td>
  );
}

export default TableCell;
