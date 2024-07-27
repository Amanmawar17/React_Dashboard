/* eslint-disable react/prop-types */
// DataContext.js
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/chart')
      .then(response => {
        const jsonData = response.data;
        console.log(jsonData)
        setData(jsonData.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};
