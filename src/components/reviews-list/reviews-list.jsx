import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item";

const ReviewsList = (props) => {
  const reviews = props.reviews;

  return <React.Fragment>
    {props.children}
    <ul className="reviews__list">
      {reviews.map((review, i) => (
        <ReviewsItem key={review + i} review={review}/>
      ))}
    </ul>
  </React.Fragment>;
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
};

export default ReviewsList;
