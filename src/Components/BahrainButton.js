// src/components/BahrainButton.js
import React from 'react';
import useCountry from './useCountry';

const BahrainButton = () => {
  const { country, loading, error } = useCountry();
console.log(country,"here is country")
  if (loading) return <div>Loading...</div>; // Optional loading state
  if (error) return null; // Hide button on error

  // Only show the button if country is Bahrain (ISO code: BH)
  return country === 'BH' ? (
    <button style={{ background: 'red', color: 'white' }}>
      Bahrain Exclusive Button
    </button>
  ) : null;
};

export default BahrainButton;