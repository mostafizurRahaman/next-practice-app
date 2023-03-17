import Post from "@/Components/Post";

const index = ({posts}) => {
   return (
      <div>
         <h1>Our Posts </h1>
         <div className="grid grid-cols-3 gap-5 p-10">
            {
               posts.map(post => <Post key={post.id} post={post}></Post> )
            }
         </div>
      </div>
   )
}



export const getStaticProps = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts'); 
   const data = await res.json(); 

   return {
      props: {
         posts: data, 
      }
   }
}

export default index