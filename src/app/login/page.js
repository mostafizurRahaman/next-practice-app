'use client'
import { useRouter } from "next/navigation";

const page = () => {
   const router = useRouter();
   const navigate = (name) => {
      router.push(name);
   };
   console.log(router);
   return (
      <div>
         <h2>Login page</h2>
         <button onClick={() => navigate("/about")}>about</button>
         <button onClick={() => navigate("/blog")}>Blog</button>
         <button onClick={() => navigate("/")}>Back to home</button>
      </div>
   );
};

export default page;
