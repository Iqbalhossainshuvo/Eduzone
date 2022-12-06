import React from 'react';
import UserContext, { AuthContext } from '../../Context/UserContext';


const Profile = () => {
    const {user} = UserContext(AuthContext)
    return (
        <div className='text-center mt-10 text-xl text-black'>
         
        </div>
    );
};

export default Profile;