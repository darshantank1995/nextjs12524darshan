import React from 'react';
import { useRouter } from 'next/router';

const Productid = () => {
   const router= useRouter();
   const productid = router.query.productid;
    return (
        <div>
            detail {productid}
        </div>
    );
}

export default Productid;
