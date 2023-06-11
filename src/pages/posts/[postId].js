import Post from "@/Components/Post";

const PostDetails = ({post}) => {
   return (
      <div className="p-10" >
         <Post post={post}></Post>
      </div>
   )
}



export const getStaticPaths = async() => {
   const res  = await fetch('https://jsonplaceholder.typicode.com/posts'); 
   const data = await res.json();  

   const paths = data.map(post =>{
      return {
         params: {
            postId: `${post.id}`
         }
      }
   })

   return {
      paths, 
      fallback: false, 
   }
   

}


export const getStaticProps = async(context) => {
   const {params} = context; 
   console.log(context); 
   const res  = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`); 
   const data = await res.json(); 

   return {
      props : {
         post: data, 
      }
   }
}
export default PostDetails