"use client"
import styles from "./page.module.css";

export default function Home() {

  const Alert = () => {
    alert('mostafizur rahaman'); 
  }
   return (
      <main className={styles.main}>
        <button onClick={Alert}>Click me</button>
      </main>
   );
}

// export function MyHome() {
//    return (
//       <div>
//          <h1>Our Another Component here.</h1>
//       </div>
//    );
// }
