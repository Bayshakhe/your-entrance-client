import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CollegeDetails = () => {
    const id = useParams()
    const [college, setCollege] = useState()
    // const {_id, admissionDate, collegeImg, collegeName, events, researches, sports, rating} = college
    console.log(college)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allColleges/${id.id}`)
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, [id.id]);
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        
          <div
            className="card w-full card-compact bg-base-100 shadow-xl"
          >
            <figure>
              <img
                src={college?.collegeImg}
                className="h-56"
                alt="College Image"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{college?.collegeName}</h2>
              <p className="text-primary font-semibold">Admission Date: {college?.admissionDate}</p>
              <p><span className="font-semibold underline">Most Popular Researches:</span> {college?.researches[0]?.title}</p>
              <p>Rating: {college?.rating}</p>
            </div>
          </div>
        </div>
    );
};

export default CollegeDetails;