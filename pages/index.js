import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {

  const router= useRouter();  
  const handleClick=()=>{
    router.push('/product');
    //router.replace('/product');
  }

  return (
    <div>
    <div>Home page</div>

      <Link href="/blog">
      <a>Blog</a>
      </Link>

      <Link href="/product">
      <a>Product</a>
      </Link>

      <Link href="/userlist">
      <a>User</a>
      </Link>

      <button onClick={handleClick}>
        Place Order
      </button>
  </div>
  );
}

export default Home;
