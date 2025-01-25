import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Props {
  // Add props here
  categoryList: any;
  selectedCategory:any
}

const TopCategoryList: React.FC<Props> = ({ categoryList,selectedCategory }) => {
  return (
    <div className="flex gap-5 mt-2 justify-center overflow-auto mx-7 md:mx-20">
      {categoryList.map((category: any, index: any) => (
        <Link
          href={"/products-category/" + category.Name}
          key={index}
          className={`flex flex-col items-center justify-center  bg-green-50 gap-2 rounded-lg p-3 group cursor-pointer hover:bg-green-600 w-[150px] min-w-[150px]
          ${category.Name===selectedCategory && 'bg-green-600'}`
          }
        >
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
  );
};

export default TopCategoryList;
