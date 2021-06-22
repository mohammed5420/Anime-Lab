import React from 'react';
import styled from "styled-components";

const Project = ({id , name , desc , url , github , image}) => {
    return (
        <StyledProject className = {`project${id}`} >
          <h3>{name}</h3>
          <p>
            {desc}
          </p>
          <div className="thumbnail">
            <img src={image} alt="thumbnail" />
          </div>
          <div>
            <a href={url}>see live</a>
             <a href={github}>code on github</a>
          </div>
          <span className="num">0{id}</span>
        </StyledProject>
    )
}

const StyledProject = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 27.6rem;
  padding: 1.6rem;
  border-radius: 1.2rem;
  background-color: #282828;
  margin: 2rem;
  z-index: 3;
  transition: all var(--duration) ease-in-out;

  .thumbnail {
    overflow: hidden;
    height: 15.9rem;
    border-radius: 0.6rem;
    margin: 1.8rem 0;
    transition: all var(--duration) ease-in-out;

    img {
      width: 100%;
      min-height: 100%;
      border-radius: 0.6rem;
      transition: all var(--duration) ease-in-out;
      object-fit: cover;
    }
  }

  &:hover {
    background-color: #272727;
    transform: translateY(-0.5rem) rotate(1deg);

    .thumbnail {
      img {
        transform: scale(1.2) rotate(1deg);
      }
    }
  }

  &:hover .num {
    top: 0;
    right: -2rem;
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  p {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
    color: #b7b7b7;
  }
  a {
    font-size: 1.4rem;
    margin-right: 1.8rem;
    color: #c2c2c2;
    text-transform: capitalize;
  }
  a:nth-child(1) {
    color: var(--accent-color);
  }

  .num {
    position: absolute;
    font-size: 16rem;
    top: 6rem;
    right: 0rem;
    color: #000;
    z-index: -1;
    font-weight: bolder;
    opacity: 0.2;
    line-height: 0;
    transition: all 0.3s ease-in-out;
  }
`;


export default Project
