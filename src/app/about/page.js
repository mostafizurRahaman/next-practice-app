"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
   const router = useRouter();
   const navigate = (name) => {
      router.push(name);
   };
   return (
      <div>
         <h1>About us page.</h1>
         <button onClick={() => navigate("/")}>Back to Home</button>
         <button onClick={() => navigate("/blog")}>blog</button>
         <button onClick={() => navigate("/login")}>Login</button>
      </div>
   );
};

export default Page;
