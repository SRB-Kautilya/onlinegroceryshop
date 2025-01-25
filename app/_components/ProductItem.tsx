import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductItemDetail from "./ProductItemDetail";

interface Props {
  // Add props here
  product: any;
  index: any;
}

const ProductItem: React.FC<Props> = ({ product, index }) => {
  // const[openDialog,setOpenDialog] = useState(false)


  return (
    <div
      key={index}
      className=" flex flex-col items-center justify-center  bg-white-50 gap-3 border rounded-lg p-3 group cursor-pointer hover:bg-white-200 hover:shadow-lg"
    >
      <Image
        src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product?.images?.url}
        alt={product.Name}
        width={100} // Width of the image
        height={100} // Height of the image
        className=" h-[200px] w-[200px] object-contain"
      />
      <h2 className="text-green-800 font-bold text-lg">{product.name}</h2>
    
      <h2 className="text-green-800 font-bold line-through">${product.mrp}</h2>
      <h2 className="text-green-800 font-bold">${product.sellingPrice}</h2>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-primary hover:text-white hover:bg-primary"
          >
            Add To Cart
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
            <ProductItemDetail  key = {index} product={product} />
            </DialogDescription>
           
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductItem;
