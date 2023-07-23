import { Rating, ThinStar } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";

const Review = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/reviews`)
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  console.log(allReviews);

  const myStyles = {
    itemShapes: ThinStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbf1a9'
  }

  return (
    <div>
      <h2 className="text-primary text-center text-5xl underline mt-20 mb-10 lg:mt-32">
        <span className="bg-yellow-300">Review & Feedback</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" >
        {allReviews.map(({ _id, universityName, universityImg, reviews }) => (
          <div
            key={_id}
            className="w-full  border shadow-xl"
          >
            <figure>
              <img
                src={universityImg}
                className="h-60 w-full"
                alt="College Image"
              />
            </figure>
            <div className="m-3">
              <h2 className="text-2xl font-semibold text-primary">{universityName}</h2>
              {
                reviews.slice(0,1).map((r, i) => <div key={i}>
                    <div className="flex gap-3 items-center mt-6 ">
                        <img className="w-10 h-10 rounded-full" src={r.personImg} alt="" />
                        <p className=" font-semibold">{r.person}</p>
                        <Rating className="text-black flex" style={{ width: 40 }} value={Math.floor(r.rating)} itemStyles={myStyles}/>

                        <p>{r.rating}</p>
                    </div>
                    <p>{r.comment}</p>
                </div>)
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
