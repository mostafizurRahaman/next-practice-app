"use client";
import Link from "next/link";

const page = () => {
   const studentList = [
      {
         id: 1,
         name: "mostafizur rahaman",
      },
      {
         id: 2,
         name: "ratul hossain",
      },
      {
         id: 3,
         name: "redowan shawon",
      },
      {
         id: 4,
         name: "rakib hossain",
      },
      {
         id: 5,
         name: "ryhan hossain",
      },
   ];
   return (
      <div>
         <h1>Student list</h1>
         {studentList.map((i) => (
            <div>
               <h1>Name : {i.name}</h1>
               <Link href={`studentlist/${i.id}`}>Show detials</Link>
            </div>
         ))}
      </div>
   );
};

export default page;
