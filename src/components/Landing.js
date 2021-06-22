import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../images/Avatar.png";
import one from "../images/one.svg";
import tow from "../images/tow.svg";

const Landing = () => {
  const [view] = useState(false);
  const Ref = useRef();
  return (
    <StyledLanding>
      <Container ref={Ref}>
        <h3>hello there i'm mohammed.</h3>
        <h1>
        front end developer with eyes of designer       </h1>
        <div>
          <Link className={`btn ${view ? "" : "up"}`} to="/projects" onClick={() => {document.getElementsByTagName("html")[0].style.scrollBehavior ="initial"}}>
            <span>my projects</span>
          </Link>
          <a className="secondary-btn btn" href="/#contact">
            contact me
          </a>
        </div>
      </Container>

      <div>
        <StyledAvatar src={Avatar} alt="my avatar" />
      </div>
      <img src={one} className="random" alt=""/>
      <img src={tow} className="random" alt=""/>
      <img src={one} className="random" alt=""/>
      <img src={tow} className="random" alt=""/>
    </StyledLanding>
  );
};

const StyledLanding = styled.div`
  padding:  5rem;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  position: relative;

  .random {
    position: absolute;
    width: 2rem;
    animation: rotate infinite 4s ease-in-out alternate;

    &:nth-child(3){
      top: 20%;
      right: 5%;
    }
    &:nth-child(4){
      top: 70%;
      right: 15%;
      animation: rotate infinite 4s ease-in-out alternate-reverse;

    }
    &:nth-child(5){
      top: 35%;
      left: 5%;

    }
    &:nth-child(6){
      bottom: 15%;
      left: 25%;
      animation: rotate infinite 4s ease-in-out alternate-reverse;

    }

    @keyframes rotate {
      from {transform: rotate(0deg)} to {transform: rotate(45deg)}
    }
  }
  h1 {
    padding-bottom: 1rem;
    margin: 0 auto;
    /* font-family: serif; */
    font-weight: 800;
    color: #222222;
    max-width: 70rem;
    font-size: clamp(1.8rem , calc(1rem + 5vw) , 5.8rem);

    span {
      color: var(--accent-color);
      font-family: "Pacifico", cursive;
    }
  }

  h3 {
    color: var(--p-color);
    margin-bottom: .8rem;
    font-size: 1.9rem;
    font-weight: 600;
  }
  .secondary-btn {
    background-color: transparent;
    padding: 1rem 1.8rem;
    border: 0.2rem solid var(--p-color);
    color: var(--p-color);
    transition: all 300ms ease-in-out;

    &:hover {
      background-color: var(--p-color);
      color: var(--text-white);
    }
  }
`;

const Container = styled.div``;
const StyledAvatar = styled.img`
  max-width: 20rem;
  width: 100%;
`;

export default Landing;
