import React from 'react';
import logoGif from '../imgs/projectIntro.gif';
import '../style/Logo.css';

function Logo() {
  return (
    <div id="container-logo">
      <img src={ logoGif } alt="logo star wars" />
    </div>
  );
}

export default Logo;
