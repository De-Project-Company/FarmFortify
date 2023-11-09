import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const Resources = () => {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        fetchResources();
    }, []);

    const fetchResources = async () => {
        try {
            const response = await fetch('https://api.example.com/resources');
            const data = await response.json();
            setResources(data);
        } catch (error) {
            console.error('Failed to fetch resources:', error);
        }
    };

    return (
        <ResourcesContainer>
            <ResourcesHeader>Resources For You</ResourcesHeader>
            {resources.map((resource) => (
                <ResourceCard
                    key={resource.id}
                    image={resource.image}
                    title={resource.title}
                    type={resource.type}
                    date={resource.date}
                    description={resource.description}
                    author={resource.author}
                />
            ))}
        </ResourcesContainer>
    );
};

const ResourcesContainer = styled.div`
    width: 100%;
    height: 100%;
    opacity: 0.70;
    background: #d3f5c6;
`;

const ResourcesHeader = styled.div`
    width: 100%;
    color: #121415;
    font-size: 32px;
    font-family: 'Aeonik';
    font-weight: 700;
    line-height: 48px;
    word-wrap: break-word;
`;

const ResourceCard = ({ image, title, type, date, description, author }) => {
    return (
        <CardContainer>
            <CardImage src={image} />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardType>{type}</CardType>
                <CardDate>{date}</CardDate>
                {author && <CardAuthor>by {author}</CardAuthor>}
            </CardContent>
        </CardContainer>
    );
};

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

const CardContent = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 0px 12px 76px rgba(0, 0, 0, 0.13);
`;

const CardTitle = styled.div`
    width: 100%;
    color: #121415;
    font-size: 32px;
    font-family: 'Aeonik';
    font-weight: 500;
    line-height: 40px;
    word-wrap: break-word;
`;

const CardType = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    padding: 8px;
    background: #1a7408;
    color: white;
    font-size: 14px;
    font-family: 'Aeonik';
    font-weight: 400;
    word-wrap: break-word;
`;

const CardDate = styled.div`
    width: 100%;
    color: #33383d;
    font-size: 14px;
    font-family: 'Aeonik';
    font-weight: 400;
    word-wrap: break-word;
`;

const CardAuthor = styled.div`
    width: 100%;
    color: #121415;
    font-size: 16px;
    font-family: 'Aeonik';
    font-weight: 500;
    word-wrap: break-word;
`;

ResourceCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
    author: PropTypes.string,
};

export default Resources;