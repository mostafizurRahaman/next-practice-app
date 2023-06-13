"use client"
import { useRouter } from "next/navigation";
import React from "react";


const page = () => {
   const router = useRouter(); 
   const navigate = (name) => {
      router.push(name); 
   }
   return (
      <div>
         <h1>Hello , I'm blog page. </h1>
         <button onClick={() => navigate("/")}>Back to Home</button>
         <button onClick={() => navigate("/login")}>login</button>
         <button onClick={() => navigate("/about")}>About</button>
        
      </div>
   );
};

export default page;
