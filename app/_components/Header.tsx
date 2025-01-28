"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { getCategory, getItemCart } from "../_utils/gloabalApi";

import { LayoutGrid, Search, ShoppingCart } from "lucide-react";
import { CircleUserRound } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";


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
  const [cartItems,setCartItems]= useState(0)

  const isLogin = sessionStorage?.getItem("jwt");
  const user = JSON.parse(sessionStorage?.getItem("user")||'{}');

    const router = useRouter();

  useEffect(() => {
    getCategory().then((response) => {
      setCategoryList(response.data.data);
    });
  }, []);

  useEffect(() => {
    getCartItems()
  }, []);


  const signOut =() =>{
    sessionStorage.clear();
    router.push("/sign-in")

  }


  const getCartItems = async () =>{
    getItemCart(user.id,isLogin)
  }

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
                <Link href={"/products-category/" + category.Name}>
                  <DropdownMenuItem>
                    <h2 className="flex gap-2 items-center cursor-pointer">
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                          category?.icon?.url
                        }
                        alt={category.Name || "grocery"}
                        width={23} // Width of the image
                        height={23} // Height of the image
                      />
                      {category.Name}
                    </h2>
                  </DropdownMenuItem>
                </Link>
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
          <ShoppingCart />
          <span className ='bg-green-500 text-white px-2 rounded-full'>{cartItems}</span> 
        </h2>
        {!isLogin ? (
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
        ):
        // <CircleUserRound className='h-9 w-9 text-primary bg-green-100 rounded-full' />
        <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <CircleUserRound className='h-9 w-9 text-primary bg-green-100 rounded-full' />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>orders</DropdownMenuItem>
    <DropdownMenuItem onClick={signOut}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        }
      </div>
    </div>
  );
};

export default Header;
