import Link from "next/link";
import style from '@/app/login/login.module.css'; 
const layout = ({ children }) => {
   return (
      <div >
         <div className={style.navbar}>
            <h1>Login Navigation</h1>
            <ul>
               <li>
                  <Link href='/login'>login</Link>
               </li>
               <li>
                  <Link href='login/loginStudent'>login Student</Link>
               </li>
               <li>
                  <Link href='/login/loginTeacher'>login Teacher</Link>
               </li>
               <li>
                  <Link href='/login/loginCollege'>login Collage</Link>
               </li>
            </ul>
         </div>
         {children} 
      </div>
   );
};

export default layout;
