import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  // Add props here
  categoryList: any;
}

export const CategoryList: React.FC<Props> = ({ categoryList }) => {

  return (
    <div className = 'mt-5 flex-col '>
      <h2 className="text-green-600 font-bold text-2xl flex justify-center ">Shop By Category</h2>
      <div className="grid  grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2">
      {categoryList.map((category: any, index: any) => (
        <Link href= {'/products-category/'+category.Name} key={index} className="flex flex-col items-center justify-center  bg-green-50 gap-2 rounded-lg p-3 group cursor-pointer hover:bg-green-200">
          <Image
            src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + category?.icon?.url}
            alt={category.Name}
            width={50} // Width of the image
            height={50} // Height of the image
            className="group-hover:scale-125 transition-all ease-in-out"
          />
          <h2 className="text-green-800">{category.Name}</h2>
        </Link>
      ))}
      </div>
    </div>
  );
};
