import React from 'react';
import TableLetter from './TableLetter';

function TableCell({ word, index }) {
  return (
    <td>
      {Array.from(word).map((letter, index) => (
        <TableLetter key={index} letter={letter} index={index} />
      ))}
    </td>
  );
}

export default TableCell;
