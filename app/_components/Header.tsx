"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { getCategory } from "../_utils/gloabalApi";

import { LayoutGrid, Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Props {}

interface category {
  Color: string | null;
  Name: string;
  createdAt: string;
  documentId: string;
  id: number;
  publishedAt: string;
  updatedAt: string;
  icon: Record<string, any> | null;
}

const Header: React.FC<Props> = ({}) => {
  const [categoryList, setCategoryList] = useState<category[]>([]);

  useEffect(() => {
    getCategory().then((response) => {
      console.log("response", response.data.data);
      setCategoryList(response.data.data);
    });
  }, []);

  return (
    <div className="p-5 shadow-sm flex justify-between ">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" width={150} height={10} alt={"grocery"}></Image>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <h2 className="hidden md:flex gap-2 items-center border rounded-full p-2 px-10 bg-slate-200">
                {" "}
                <LayoutGrid className="h-5 w-5" />
                Category
              </h2>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              {categoryList.map((category) => (
                <DropdownMenuItem>
                  <h2 className="flex gap-2 items-center cursor-pointer">
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                        category?.icon?.url}
                      alt={category.Name}
                      width={23} // Width of the image
                      height={23} // Height of the image
                    />
                    {category.Name}
                  </h2>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className=" hidden md:flex  gap-3 items-center border rounded-full p-2 px-5">
          <Search />
          <input
            type="text"
            placeholder="search"
            className="outline-none"
          ></input>
        </div>
      </div>
      <div className="flex gap-8 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          {" "}
          <ShoppingCart /> 0
        </h2>

        <Button>Login</Button>
      </div>
    </div>
  );
};

export default Header;
