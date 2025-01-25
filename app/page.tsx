import Image from "next/image";
import { CategoryList } from "./_components/CategoryList";
import ProductList from "./_components/productList";
import Slider from "./_components/Slider";
import {  getCategoryList, getProducts, getSliders } from "./_utils/gloabalApi";
import Footer from "./_components/Footer";

export default  async function Home() {

  const sliderList:any = await getSliders()
  const categoryList:any = await getCategoryList()
  const productsList:any = await getProducts()

  return (
    <div className="p-5 md:p-10 px-16">
      <Slider sliderList={sliderList} />
      <CategoryList  categoryList={categoryList}/>
      <ProductList productsList={productsList} />
     <Footer/>
      
    </div>
  );
}
