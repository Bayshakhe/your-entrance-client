import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopColleges = () => {
  const [colleges, setColleges] = useState([]);
  console.log(colleges)
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/allColleges`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://www.margforyou.com/img/blog/How-is-career-counsellor-Educational-Qualification.jpg)",
          backgroundBlendMode: "multiply",
          backgroundAttachment: "fixed",
        }}
        className="footer bg-cover bg-no-repeat bg-yellow-200 footer-center px-5 py-10 lg:p-20 text-white rounded"
      >
        <div className="w-full">
          <h1 className="text-5xl font-bold capitalize">
            Need a good education to <br /> grow your career?
          </h1>
          <div className="flex gap-0 items-center lg:w-[50%] mt-5">
            <input
              type="text"
              placeholder="Search University"
              className="input input-bordered  w-full rounded-r-none"
            />
            <button className="btn-secondary btn rounded-l-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-8">
        {colleges.slice(0,3).map(({_id, admissionDate, collegeImg, collegeName, events, researches, rating}) => (
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
              <p className="text-primary font-semibold">Admission Date: {admissionDate}</p>
              <p><span className="font-semibold underline">Most Popular Researches:</span> {researches[0].title}</p>
              <p><span className="font-semibold underline">Most Popular Researches:</span> {events[0].eventName}</p>
              <p>Rating: {rating}</p>
              <div className="card-actions justify-end">
                <Link to={`/collegeDetails/${_id}`} className="btn btn-secondary" >Details</Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
  );
};

export default TopColleges;
