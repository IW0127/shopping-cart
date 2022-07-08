import React from "react";
import ReactStars from "react-rating-stars-component";
function Rating(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      count={5}
      edit={props?.edit ? true : false}
      value={props?.value >= 0 ? props.value : 0}
      onChange={ratingChanged}
      size={21}
      emptyIcon={<i className="far fa-star"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
}

export default Rating;
