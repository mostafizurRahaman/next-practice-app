import Link from "next/link";

const page = () => {
   return (
      <div>
         <h1>Login College</h1>
         <Link href='/login/loginStudent'>Login Student</Link>
         <Link href={`/login/loginTeacher`}>Login Teacher</Link>
      </div>
   );
};

export default page;
