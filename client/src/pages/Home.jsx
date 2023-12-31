import React from 'react';
import { DiscountOffersSection } from '../components/Home/DiscountOffersSection';
import SliderHome from '../components/Home/SliderHome';
import SectionRecomendados from '../components/Home/SectionRecomendados';
import { CategoriesSection } from '../components/Home/CategoriesSection';
import { SavedOrLatherSection } from '../components/SavedOrLatherSection/SavedOrLatherSection';

const Home = () => {
  return (
    <div className="container max-w-7xl mx-auto flex flex-col gap-5">
      <SliderHome />
      <DiscountOffersSection />
      <SectionRecomendados />
      <SavedOrLatherSection />
      <CategoriesSection />
    </div>
  );
};

export default Home;
