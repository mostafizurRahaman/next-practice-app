"use client";
import { useRouter } from "next/navigation";

const page = () => {
   const router = useRouter();
   const navigate = (name) => {
      router.push(`/login/${name}`);
   };
   return (
      <div>
         <h1> Login Student</h1>
         <br />
         <br />
         <button onClick={() => navigate("/loginTeacher")}>
            Login Teacher
         </button>
         <br />
         <br />
         <button onClick={() => navigate("/loginCollege")}>
            Login College
         </button>
      </div>
   );
};

export default page;
