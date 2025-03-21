import React from 'react';
import logoImage from '../asserts/images/flip-flops-64_64.png';

export const Logo = () => {
  return (
    <a href="/" className="logo">
      <span className="logo-text">Flipflop</span>
      <img src={logoImage} alt="Flipflop Logo" />
    </a>
  );
};
