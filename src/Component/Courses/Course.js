import React from 'react';
import { useLoaderData } from 'react-router-dom';
import dd from '../../asset/dd.pdf'

const Course = () => {
    /* add some feature */
    const data = useLoaderData()
    const { id, name,  img ,description} = data;
    console.log(data);
    return (
        <div className="container mx-auto card w-96 bg-base-100 shadow-xl mt-40">
            <figure><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline"><button>Buy Now</button> </div>
                    <div className="badge badge-outline"><a href={dd}><button>Download</button></a> </div>
                </div>
            </div>
        </div>
    );
};

export default Course;