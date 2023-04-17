import { useState, useEffect } from 'react';

const TableBody = () => {
  //get data from database

  const [flights, setFlights] = useState(null);
  // for getting rid of the CORS/access error use mode

  const getFlights = () => {
    fetch('http://localhost:8000/flights')
      .then((response) => response.json())
      .then((flights) => setFlights(flights))
      .catch((error) => console.log(error));
  };
  useEffect(() => getFlights(), []);

  console.log(flights);

  return <tbody></tbody>;
};

export default TableBody;
