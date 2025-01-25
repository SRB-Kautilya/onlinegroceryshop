"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {
  // Add props here
  product: any;
}

const ProductItemDetail: React.FC<Props> = ({ product }) => {
const [productToPrice, setProductToPrice] = useState(product.sellingPrice?product.sellingPrice:product.mrp);
const [quantity,setQuantity]=useState(1)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      
        <Image
          src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product?.images?.url}
          alt={product.Name}
          width={100} // Width of the image
          height={100} // Height of the image
          className=" bg-slate-200 p-5 h-[320px]  w-[300px] object-contain rounded-lg"
        />
      <div className=" flex flex-col items-center mt-5 gap-3">
        <h2 className="text-green-800 font-bold text-2xl">{product.name}</h2>
        <h2 className="text-sm text-grey-500 items-center">
          {product.description}
        </h2>
        <div className="flex gap-3 border">
        <h2 className="text-green-800 font-bold line-through">
          ${product.mrp}
        </h2>
        <h2 className="text-green-800 font-bold">${product.sellingPrice}</h2>
      
        </div>
        <h2 className="text-green-800 font-bold"> Quantity ({product.itemQuantityType})</h2>
        <div className = 'flex gap-3 items-center'>
        <div className="flex border p-2 gap-10 px-5">
        <button disabled = {quantity===1} onClick={()=>{setQuantity(quantity-1)}}>-</button>
        <h2>{quantity}</h2>
        <button onClick={()=>{setQuantity(quantity+1)}}>+</button>
        </div>
        <h2 className="text-2xl font-bold"> = ${(quantity*productToPrice).toFixed(2)}</h2>  
        </div>
        <Button
          variant="outline"
          className="text-primary hover:text-white hover:bg-primary"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductItemDetail;
