// src/pages/home.js
import React from 'react';
import Banner from '../components/banner';
import BannerImg from '../assets/Banniere.png';
import { Housings } from '../components/gallery';

export const Home = () => {
  return (
    <main>
      <Banner image={BannerImg} />
      <Housings />
    </main>
  );
};

