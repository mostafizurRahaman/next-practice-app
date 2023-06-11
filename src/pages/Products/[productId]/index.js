import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
   const router = useRouter(); 
   const productId = router.query.productId; 
   
   return (
      <div>
         <h1>This is our Products For Id  -{productId}</h1>
      </div>
   );
};

export default index;