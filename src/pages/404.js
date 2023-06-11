import Link from 'next/link';
import React from 'react';

const ErrorPage = () => {
   return (
      <div>
         <h1>404 Error Page</h1>
         <Link href="/">
            <button>Back to home page.</button>
         </Link>
      </div>
   );
};

export default ErrorPage;