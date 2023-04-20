import { useState, useEffect } from 'react';
import TableRow from './TableRow';

const TableBody = () => {
  //get data from database

  const [flights, setFlights] = useState(null);
  // for getting rid of the CORS/access error use mode

  const getFlights = () => {
    fetch('http://localhost:8000/flights')
      .then((response) => response.json())
      .then((flights) => setFlights(Object.values(flights.data)))
      .catch((error) => console.log(error));
  };
  useEffect(() => getFlights(), []);

  console.log(flights);

  return (
    <tbody>
      {flights?.map((flight, _index) => (
        <TableRow key={_index} flight={flight}></TableRow>
      ))}
    </tbody>
  );
};

export default TableBody;
