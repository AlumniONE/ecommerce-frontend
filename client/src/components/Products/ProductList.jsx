import React, { useEffect, useState } from 'react';
import {
  ButtonIconGroup,
  ButtonIconList,
  CloseIcon,
} from '../../assets/control-icons';
import useStore from '../../utils/store';
import { ProductCard } from './ProductCard';
import { Pagination } from '../Pagination';
import { SelectBox } from '../SelectBox';

const ProductList = () => {
  const {
    products,
    fetchProducts,
    currentPage,
    setCurrentPage,
    prevPage,
    nextPage,
  } = useStore();
  const categories = [
    'Samsung',
    'Apple',
    'Poco',
    'Metallic',
    '4 star',
    '3 star',
  ];

  const totalProducts = products.length;
  const [productsPerPage] = useState(9);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <div className="flex flex-col gap-5 mb-12 w-11/12 mx-auto">
      <div className="flex items-center justify-between bg-white border border-[#DEE2E7] rounded-[6px] p-[10px]">
        <div className="hidden sm:block">
          <span>
            12,911 items in <b>Mobile accessory</b>
          </span>
        </div>
        <div className="flex items-center justify-between w-full sm:w-fit gap-[10px]">
          <div className="hidden sm:flex items-center gap-[10px]">
            <input type="checkbox" className="cursor-pointer" />{' '}
            <span>Verified only</span>
          </div>
          <select
            name="featured"
            id="featured"
            className="border-2 w-44 outline-none p-[6px] rounded-[6px] cursor-pointer bg-white"
          >
            <option value="all">All Products</option>
            <option value="latest">Latest Releases</option>
            <option value="sale">Special Offers</option>
            <option value="bestsellers">Bestsellers</option>
            <option value="toprated">Top Rated</option>
          </select>
          <div className="flex">
            <button className="w-[38px] h-10 bg-[#EFF2F4] grid place-items-center border border-[#DEE2E7] rounded-l-md">
              <ButtonIconGroup />
            </button>
            <button className="w-[38px] h-10 bg-white grid place-items-center border border-[#DEE2E7] rounded-r-md">
              <ButtonIconList />
            </button>
          </div>
        </div>
      </div>
      <ul className="flex gap-2 items-center overflow-x-auto">
        {categories.map((cat, i) => (
          <li key={i} className="inline-block">
            <span className="whitespace-nowrap flex items-center text-[#505050] bg-white pb-1 pt-[2px] pl-[10px] pr-[6px] gap-2 border-2 border-[#0D6EFD] rounded-md">
              {cat} <CloseIcon className="cursor-pointer text-[#8B96A5]" />
            </span>
          </li>
        ))}
        <button className="text-[#0D6EFD] hover:underline whitespace-nowrap">
          Clear all filter
        </button>
      </ul>
      <div className="grid md:grid-cols-3 gap-5">
        {products
          ?.map((product) => <ProductCard key={product.id} product={product} />)
          .slice(firstIndex, lastIndex)}
      </div>
      <div className="flex justify-end">
        <div className="flex gap-3">
          <SelectBox />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            productsPerPage={productsPerPage}
            totalProducts={totalProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
