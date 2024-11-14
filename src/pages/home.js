// src/pages/home.js
import React from 'react';
import Banner from '../components/banner';
import BannerImg from '../assets/Banniere.png';

export const Home = () => {
  return (
    <main>
      <Banner image={BannerImg} />
    </main>
  );
};

