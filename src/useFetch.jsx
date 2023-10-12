// challenge 6
import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setloading(false);
      } catch (error) {
        seterror(error.message);
        setloading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

