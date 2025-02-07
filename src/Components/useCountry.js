// src/hooks/useCountry.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useCountry = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        setCountry(response.data.country);
        console.log(response.data)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, []);

  return { country, loading, error };
};

export default useCountry;