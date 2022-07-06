import React from 'react';

const User = (props) => {
    const {user}=props;
    return (
        <>
            <p>{user.name ? user.name :""}</p>
            <p>{user.email ? user.email :""}</p> 
        </>
    );
}

export default User;
