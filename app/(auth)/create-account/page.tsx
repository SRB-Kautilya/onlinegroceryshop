"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerUser } from "@/app/_utils/gloabalApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { LoaderIcon } from "lucide-react";

interface Props {
  // Add props here
}

const CreateAccount: React.FC<Props> = ({}) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const router = useRouter();
  const { toast } = useToast();

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onCreateAccount = () => {
    setLoader(true);
    registerUser(userName, email, password)
      .then((res) => {
        console.log("res", res.data.user);
        console.log("res", res.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("jwt", res.data.jwt);
        setLoader(false);
        toast({
          title: "Account created Suucessfully",
        });
        router.push("/");
      })
      .catch((error) => {
        setLoader(false);
        toast({
          title: "Error while creating Account",
        });
      });
  };

  return (
    <div className="flex items-baseline justify-center my-20">
      <div className="flex flex-col items-center border-gray-200 p-10 bg-slate-200">
        <Image src="/logo.png" alt="grocery" width={100} height={100}></Image>
        <h2 className="font-bold text-3xl">Create a Account</h2>
        <h2 className="text-gray-500">
          Enter Your Email and Password to create an account
        </h2>
        <div className="w-full flex flex-col gap-5 mt-7">
          <Input placeholder="Username" onChange={handleUsername} />
          <Input placeholder="name@example.com" onChange={handleEmail} />
          <Input
            type="password"
            placeholder="password"
            onChange={handlePassword}
          />
          <Button
            onClick={onCreateAccount}
            disabled={userName === "" || email === "" || password === ""}
          >
            {loader ? <LoaderIcon /> : `Create Account`}
          </Button>
          <p>
            Already have an account?
            <Link href={"/sign-in"} className="text-blue-500">
              Click here to Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
