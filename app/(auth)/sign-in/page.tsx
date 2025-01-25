"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "@/app/_utils/gloabalApi";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";

interface Props {
  // Add props here
}

const SignIn: React.FC<Props> = ({}) => {
  const router = useRouter();
  const { toast } = useToast();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);


  useEffect(()=>{
    const jwt = sessionStorage.getItem('jwt')
   if(jwt){
    router.push("/");
   }
  },[])

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSignIn = () => {
    setLoader(true)
    signIn(email, password).then(
      (res) => {
        console.log("res", res.data.user);
        console.log("res", res.data.jwt);
        sessionStorage.setItem("user", JSON.stringify(res.data.user));
        sessionStorage.setItem("jwt", res.data.jwt);
        toast({
          title: "Login Successfully",
        });
        setLoader(false)
        router.push("/");
       
      },
      () => {
        toast({
          title: "server Error",
        });
        setLoader(false)
      }
    );
  };

  return (
    <div className="flex items-baseline justify-center my-20">
      <div className="flex flex-col items-center border-gray-200 p-10 bg-slate-200">
        <Image src="/logo.png" alt="grocery" width={100} height={100}></Image>
        <h2 className="font-bold text-3xl">Sign In to Account</h2>
        <h2 className="text-gray-500">
          Enter your Email and Password to Sign In
        </h2>
        <div className="w-full flex flex-col gap-5 mt-7">
          <Input placeholder="name@example.com" onChange={handleEmail} />
          <Input
            type="password"
            placeholder="password"
            onChange={handlePassword}
          />
          <Button onClick={onSignIn} bg-blue text-blue-500 disabled={email === "" || password === ""}>
           {loader?<LoaderIcon/>: `Sign In`}
          </Button>
          <p>
            Don't have an account?
            <Link href={"/create-account"} className="text-blue-500">
              Click here to create new account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
