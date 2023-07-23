import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllColleges = () => {
  const [colleges, setColleges] = useState([]);
  // console.log(colleges)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allColleges`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {colleges.map(
          ({
            _id,
            admissionDate,
            collegeImg,
            collegeName,
            events,
            researches,
            sports,
            rating,
          }) => (
            <div
              key={_id}
              className="card w-full card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={collegeImg}
                  className="h-60 w-full"
                  alt="College Image"
                />
              </figure>
              <div className="card-body ">
                <h2 className="card-title">{collegeName}</h2>
                <p className="text-primary font-semibold">
                  Admission Date: {admissionDate}
                </p>
                <p>
                  <span className="font-semibold underline">
                    Most Popular Researches:
                  </span>{" "}
                  {researches[0].title}
                </p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                  <Link
                    to={`/collegeDetails/${_id}`}
                    className="btn btn-secondary"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AllColleges;
