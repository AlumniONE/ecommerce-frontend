import React from 'react';
import { HambuergerIcon } from '../../assets/header-icons';
import Slider from 'react-slick';
import { ExpandMoreIcon } from '../../assets/control-icons';

const Navbar = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: false,
  };

  return (
    <section className="text-gray-900 font-medium body-font border-0 sm:border-t-2 sm:border-b-2 border-gray-200">
      <div className="container p-4 hidden sm:flex md:flex lg:flex xl:flex mx-auto items-start">
        <nav className="flex items-center text-base">
          <a className="mr-5 hover:text-gray-500 active:text-blue-500" href="#">
            <div className="flex">
              <HambuergerIcon /> <span className="ml-1">All category</span>
            </div>
          </a>
          <a className="mr-5 hover:text-gray-500 active:text-blue-500" href="#">
            Hot offers
          </a>
          <a className="mr-5 hover:text-gray-500 active:text-blue-500" href="#">
            Gift boxes
          </a>
          <a className="mr-5 hover:text-gray-500 active:text-blue-500" href="#">
            News
          </a>
          <a className="hover:text-gray-500 active:text-blue-500" href="#">
            <div className="flex">
              Help <ExpandMoreIcon />
            </div>
          </a>
        </nav>
      </div>
      <div className=" sm:hidden md:hidden lg:hidden xl:hidden">
        <nav className="p-4 pr-0">
          <Slider {...settings}>
            <div>
              <div className="p-2 mr-2 bg-gray-200 active:bg-blue-500 rounded-md active:text-black text-blue-400 text-center">
                <a href="#">All category</a>
              </div>
            </div>
            <div>
              <div className="p-2 mr-2 bg-gray-200 active:bg-blue-500 rounded-md active:text-black text-blue-400 text-center">
                <a href="#">Hot offers</a>
              </div>
            </div>
            <div>
              <div className="p-2 mr-2 bg-gray-200 active:bg-blue-500 rounded-md active:text-black text-blue-400 text-center">
                <a href="#">Gift boxes</a>
              </div>
            </div>
            <div>
              <div className="p-2 mr-2 bg-gray-200 active:bg-blue-500 rounded-md active:text-black text-blue-400 text-center">
                <a href="#">News</a>
              </div>
            </div>
            <div>
              <div className="p-2 mr-2 bg-gray-200 active:bg-blue-500 rounded-md active:text-black text-blue-400 text-center">
                <a href="#">Help</a>
              </div>
            </div>
          </Slider>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
