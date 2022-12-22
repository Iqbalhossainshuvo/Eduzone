import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import LodingSpinner from '../LodingSpinner/LodingSpinner';

const PrivateRoutes = ({children}) => {
    const {user,loading} =useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return  <LodingSpinner/> 
    }
    if(user && user.uid) { 
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
   
};

export default PrivateRoutes;