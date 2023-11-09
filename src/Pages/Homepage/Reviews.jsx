import React from 'react';
const ReviewTitle = () => {
    return (
        <h1 style={{ width: '100%', color: '#121415', fontSize: 32, fontFamily: 'Aeonik', fontWeight: '700', wordWrap: 'break-word' }}>Our Reviews</h1>
    );
}

const ReviewContent = () => {
    return (
        <div style={{ width: '100%', textAlign: 'center', color: 'rgba(18, 20, 21, 0.40)', fontSize: 18, fontFamily: 'Aeonik', fontWeight: '500', wordWrap: 'break-word' }}>As a fish farmer, getting capital to produce at a very large scale to meet up with consumer demands have been a difficulty for me, but getting access to low interest loans through FarmFortify has proven a stress free way of transitioning into large-scale production.</div>
    );
}

const ReviewAuthor = ({ name }) => {
    return (
        <div style={{ width: '100%', height: '100%', color: '#121415', fontSize: 18, fontFamily: 'Aeonik', fontWeight: '700', wordWrap: 'break-word' }}>{name}</div>
    );
}

const ReviewOccupation = ({ occupation }) => {
    return (
        <div style={{ width: '100%', height: '100%', color: '#33383D', fontSize: 16, fontFamily: 'Aeonik', fontWeight: '500', wordWrap: 'break-word' }}>{occupation}</div>
    );
}

const ReviewQuote = () => {
    return (
        <div style={{ width: '100%', textAlign: 'center' }}>
            <span style={{ color: '#121415', fontSize: 18, fontFamily: 'Aeonik', fontWeight: '500', wordWrap: 'break-word' }}>“FarmFortify has given me us access to quality input that has in turn improved the quality of our crops. Quality Fertilizers are now being delivered to our doorsteps and our <br />farm produce are sold with greater value, unlike in those days</span>
            <span style={{ color: '#121415', fontSize: 14, fontFamily: 'Aeonik', fontWeight: '400', wordWrap: 'break-word' }}">.”</span>
        </div>
    );
}

const ReviewImage = ({ imageSrc }) => {
    return (
        <img style={{ width: '100%', height: '100%', borderRadius: 9999 }} src={imageSrc} />
    );
}

const Reviews = () => {
    return (
        <>
            <ReviewTitle />
            <ReviewContent />
            <ReviewAuthor name="Olusegun Sulaiman" />
            <ReviewOccupation occupation="Crop Farmer in Oyo State" />
            <ReviewQuote />
            <ReviewImage imageSrc="https://example.com/ProfilePicture.png" />
            <ReviewAuthor name="Olusegun Sulaiman" />
            <ReviewOccupation occupation="Crop Farmer in Oyo State" />
        </>
    );
}

export default Reviews;