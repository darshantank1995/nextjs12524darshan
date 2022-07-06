import React from 'react';
import { useRouter } from 'next/router';

const Review = () => {
   const router= useRouter();
   const {productid,reviewid} = router.query;
    return (
        <div>
            detail11 {productid} {reviewid}
        </div>
    );
}

export default Review;
