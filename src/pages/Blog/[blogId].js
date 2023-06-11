import { useRouter } from "next/router";

const BlogDetails = () => {
   const router = useRouter();
   const id = router.query.blogId;
   console.log(id);
   return (
      <>
         <h1>My Blog for Id - {id}</h1>
         <h2>We Learn here next js. </h2>
      </>
   );
};

export default BlogDetails;
