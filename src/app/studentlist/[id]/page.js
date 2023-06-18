"use client";
const page = ({ params }) => {
   const id = params.id;
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
         <h1>Name : {studentList[id - 1].name}</h1>
      </div>
   );
};

export default page;
