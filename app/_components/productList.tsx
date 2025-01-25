import React from 'react';
import Image from 'next/image';
import ProductItem from './ProductItem';

interface Props {
    productsList:any
   // Add props here
}

const ProductList: React.FC<Props> = ({ productsList }) => {

    console.log('productsList',productsList)
  return (
    <div className = 'mt-10 flex-col '>
         <h2 className="text-green-600 font-bold text-2xl flex justify-center ">Our Products</h2>
         <div className="grid  grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-2">
         {productsList.map((product: any, index: any) => (
          <ProductItem key = {index} product={product} index={index} />

         ))}
         </div>
         <Image  src="/deliverlogo.png"  alt = 'banner' width= {1000} height={1000} className="w-full h-[400px] object-contain" />
       </div>
  );
};

export default ProductList;