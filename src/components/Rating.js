import React from "react";
import ReactStars from "react-rating-stars-component";
import { MdStarOutline } from "react-icons/md";
function Rating(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      count={5}
      edit={props?.edit ? true : false}
      onChange={ratingChanged}
      size={21}
      emptyIcon={<i className="far fa-star"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
}

export default Rating;
