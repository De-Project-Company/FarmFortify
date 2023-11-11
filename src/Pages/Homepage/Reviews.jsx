import PropTypes from 'prop-types';
import './Reviews.css';
import React from 'react';

const ReviewTitle = () => {
    return (
        <h1 className="review-title">Our Reviews</h1>
    );
}

const ReviewContent = () => {
    return (
        <div className="review-content">As a fish farmer, getting capital to produce at a very large scale to meet up with consumer demands have been a difficulty for me, but getting access to low interest loans through FarmFortify has proven a stress free way of transitioning into large-scale production.</div>
    );
}

const ReviewAuthor = ({ name }) => {
    return (
        <h2 className="review-author">{name}</h2>
    );
}

ReviewAuthor.propTypes = {
    name: PropTypes.string.isRequired
};

const ReviewOccupation = ({ occupation }) => {
    return (
        <h3 className="review-occupation">{occupation}</h3>
    );
}

const ReviewQuote = () => {
    return (
        <div className="review-quote">
            <span className="quote-text">“FarmFortify has given me us access to quality input that has in turn improved the quality of our crops. Quality Fertilizers are now being delivered to our doorsteps and our <br />farm produce are sold with greater value, unlike in those days</span>
            <span className="quote-author">.”</span>
        </div>
    );
}

const ReviewImage = ({ imageSrc }) => {
    return (
        <img className="review-image" src={imageSrc} alt="Profile Picture" />
    );
}

const Reviews = ({ content, author, occupation, quote, imageSrc }) => {
    return (
        <>
            <ReviewTitle />
            <ReviewContent content={content} />
            <ReviewAuthor name={author} />
            <ReviewOccupation occupation={occupation} />
            <ReviewQuote quote={quote} />
            <ReviewImage imageSrc={imageSrc} />
            <ReviewAuthor name={author} />
            <ReviewOccupation occupation={occupation} />
        </>
    );
}

export default Reviews;