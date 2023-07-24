import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CollegeDetails = () => {
  const id = useParams();
  const [college, setCollege] = useState();
  // const {_id, admissionDate, collegeImg, collegeName, events, researches, sports, rating} = college
  console.log(college);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allColleges/${id.id}`)
      .then((res) => res.json())
      .then((data) => setCollege(data));
  }, [id.id]);
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 m-5 lg:m-10">
      <div className="w-full shadow-xl p-5">
        <figure>
          <img
            src={college?.collegeImg}
            className="h-auto w-full"
            alt="College Image"
          />
        </figure>
        <button className="btn-secondary w-full btn mt-2 mb-5 ">Application Here</button>
        <p className="text-primary text-xl font-semibold underline ">Recent Events:</p>
        {college?.events.map((a,i) => <div className="my-3" key={i}>
            <p className="text-secondary">{a.eventName}</p>
            <p>{a.eventDetails.slice(0,250)}...</p>
          </div>)}
      </div>

      <div className="card-body ">
        <h2 className="text-3xl font-semibold ">{college?.collegeName}</h2>
        <p>Rating: {college?.rating}</p>
        <p className="text-primary text-xl font-semibold underline">
          Admission Date: {college?.admissionDate}
        </p>
        <p>
          <span className="text-primary text-xl font-semibold underline">
            Admission Process:{" "}
          </span>
          <br />
          {college?.admissionProcess.map((a, i) => (
            <li key={i}>{a}</li>
          ))}
        </p>
          <p className="text-primary text-xl font-semibold underline">
            Most Popular Researches:
          </p>
          {college?.researches.map((a,i) => <div className="my-3" key={i}>
            <p className="text-secondary">{a.title}</p>
            <p className="text-primary">Author: {a.author}</p>
            <p>{a.summery.slice(0,300)}</p>
          </div>)}
          <p className="text-primary text-xl font-semibold underline">
          Sports:
          </p>
          <p className="text-secondary"> {college?.sports[0].department}</p>
            <p> {college?.sports[0].details}</p>
      </div>
    </div>
  );
};

export default CollegeDetails;
