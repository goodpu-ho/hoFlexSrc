import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, withRouter } from 'react-router-dom';

const Container = styled.div`
    font-size:12px;
`;

const Image = styled.div`
    background-image:url(${props => `${props.bgUrl}`});
    height:180px;
    background-size:cover;
    border-radius:4px;
    background-position:center center;
    transition:opacity 0.3s ease-in-out;
`;

const ImageContainer = styled.div`
    margin-bottom:5px;
    position:relative;
    &:hover{
        ${Image}{
            opacity:0.4;
        }
    }
`;

const Rating = styled.span`
    bottom:4px;
    right:5px;
    position:absolute;    
    transition:opacity 0.3s ease-in-out;
`;

const Title = styled.span`
    display:block;    
    margin-bottom:3px;
`;

const Year = styled.span`
    font-size:10px;
    color:rgba(255, 255, 255, 0.7);
`;

const Poster = ({id, imageUrl, title, rating, year, isMovie=false}) =>

    <Link to={isMovie? `/movie/${id}` : `/tv/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : 
                    require("../assets/default.png")}/>
                <Rating>
                    <span role="img" aria-label="rating"> 
                        ⭐️
                    </span>{" "}
                    {rating}/10
                </Rating>
                
            </ImageContainer>
            <Title>{title.length > 15 ? `${title.substring(0,16)}...` : title}</Title>
            <Year>{year}</Year>        
        </Container>
    </Link>



Poster.propTypes = {
    id:PropTypes.number.isRequired,
    imageUrl:PropTypes.string,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number,
    year:PropTypes.string,
    isMovie:PropTypes.bool
}

export default Poster;