import React from 'react';
import "../styles/banner.scss"

export default function Banner({ image }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" />
    </div>
  );
}
