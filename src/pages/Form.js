import { useRouter } from "next/router";
import { NextFetchEvent } from "next/server";

const Form = () => {
   const router = useRouter();

   const handleForm = (event) => {
      event.preventDefault();
      // router.replace("/about");
      router.push('/about'); 
   };
   return (
      <div>
         <form onSubmit={handleForm}>
            <div>
               <label htmlFor="">
                  <input type="text" />
               </label>
            </div>
            <div>
               <input type="email" />
            </div>
            <button className="btn btn-primary">submit</button>
         </form>
      </div>
   );
};

export default Form;
