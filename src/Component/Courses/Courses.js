import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CoursesData from './CoursesData';


const Courses = () => {
    const [AllData, setAllData] = useState();
    
    useEffect(() => {
        fetch('https://eduzone-brown.vercel.app/courses')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    return (
        <div className='container mx-4  grid lg:grid-cols-3 sm:grid-cols-1 mt-40 '>
            
            <div className=''>
                {
                    AllData?.map(data => <Link to={`/courses/${data.id}`} key={data.id}> <p className='lg:mb-10  hover:text-black  text-lime-700  mt-5 text-2xl'>{data.title}</p></Link>)
                }
            </div>


            <div className='col-span-2 grid lg:grid-cols-3 gap-4 mb-8'>
               {
                AllData?.map(data=> <CoursesData key={data.id} data={data}></CoursesData>)
               }
            </div>


        </div>
    );
};

export default Courses