const { useRouter } = require("next/router");

const commentDetails = () => {
   const router = useRouter();   
   const {productId, commentId } = router.query; 
   return (
      <h1>This is an comment for Product Id : {productId} & Comment Id : {commentId}</h1>
   )
} 


export default commentDetails; 