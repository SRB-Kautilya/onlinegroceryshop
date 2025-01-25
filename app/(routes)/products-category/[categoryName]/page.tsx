import { getCategoryList, getProductsByCategory } from '@/app/_utils/gloabalApi';
import React from 'react';
import TopCategoryList from './_components/TopCategoryList';
import ProductList from '@/app/_components/productList';

interface Props {
   // Add props here
   params:any
}

const ProductCategory: React.FC<Props> =  async ({ params }) => {

    const ProductsByCategory:any = await getProductsByCategory(params.categoryName)
     const categoryList:any = await getCategoryList()

    console.log('ProductsByCategory',ProductsByCategory)
  
  return (
    <div>
        <h2 className='p-4 bg-green-500 text-white font-bold text-3xl flex justify-center ' >
        {params.categoryName}
        </h2>
        <TopCategoryList categoryList={categoryList} selectedCategory = {params.categoryName} />
        <div className='px-5 md:p-10'>
        <ProductList productsList={ProductsByCategory} />
        </div>
 
    </div>
  );
};

export default ProductCategory;