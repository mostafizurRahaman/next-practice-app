import { CONFIG_FILES } from "next/dist/shared/lib/constants";
import { useRouter } from "next/router";
import React from "react";

const DocsDetails = () => {
   const router = useRouter();
   console.log(router);
   const params = router.query.params || [];
   const length = params.length ;
   if ((length === 0)) {
      return <h2>Documentation create for Docs</h2>;
   }else if(length >=1){
      return <h1>Paths : docs/
         {
            params?.join('/') 
         }
      </h1>
   }
};

export default DocsDetails;
