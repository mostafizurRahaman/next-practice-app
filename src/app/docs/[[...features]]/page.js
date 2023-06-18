"use client";
const page = ({ params }) => {
   
   return <div>{params.features.join(' *  ')}</div>;
};

export default page;
