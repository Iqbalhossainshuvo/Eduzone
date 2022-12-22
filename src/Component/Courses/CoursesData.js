import React from 'react';
import { Link } from 'react-router-dom';

const CoursesData = ({ data }) => {
    const { id, name, title,description, img } = data;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl mt-40">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <small className="card-title">{name}</small>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/courses/${data.id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CoursesData;