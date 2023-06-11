import Link from "next/link";

const Post = ({ post }) => {
   return (
      <div className="border-2 border-red-500 p-5  rounded-lg">
         <h2 className="text-base font-bold uppercase">Title: {post.title}</h2>
         <Link href={`posts/${post.id}`}>
            <button className="btn bg-blue-600 px-3 text-white font-bold uppercase  text-base py-2 rounded-lg mt-5">show details</button>
         </Link>
      </div>
   );
};

export default Post;
