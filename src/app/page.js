"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import react, { useState } from "react";

const page = () => {
   const router = useRouter();
   const navigate = (name) => {
      router.push(name);
   };

  
   return (
      <div>
         <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/login">Login</Link>
            <button onClick={() => navigate("/about")}>about</button>
            <button onClick={() => navigate("/blog")}>Blog</button>
            <button onClick={() => navigate("/login")}>login</button>
         </nav>
      </div>
   );
};

export default page;
