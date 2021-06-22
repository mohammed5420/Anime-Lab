import React from "react";
import AboutImg from "../images/about.png";
import styled from "styled-components";

const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <h2>about me</h2>
        <p>
          Hi there I'm Mohamed. I'm a self-taught JavaScript developer
          and Ui designer. My passion is building websites and web apps that
          are beautiful, responsive and accessible.
        </p>
      </Container>

      <div className="image" style={{ width: "100%" }}>
        <img src={AboutImg} alt="" />
      </div>
    </StyledAbout>
  );
};
const Container = styled.div`
  align-self: center;
  max-width: 60rem;
`;
const StyledAbout = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10rem 5rem;
  margin-bottom: -0.3rem;

  @media screen and (max-width: 990px) {
    grid-template-columns: 1fr;
  }

  h2 {
    margin-bottom: .8rem;
    color: var(--text-dark);
  }
  p {
    color: var(--text-light);
    font-weight: 600;
    font-size: 1.8rem;
    
    span {
      position: relative;

      color: var(--accent-color);
      font-family: "Pacifico", cursive;

      img {
        position: absolute;
        top: -100%;
        left: 50%;
        transform: translate(-50% , -50%);
        opacity: 0;
        width: 20rem;
        transition: opacity 300ms ease-in-out;
      }
      &:hover {
        img {
          opacity: 1;
        }
      }
    }
  }
  .image {
    position: absolute;
    bottom: -2px;
    right: 0;
    max-width: 35rem;
    justify-self: end;
    align-self: flex-end;
    text-align: end;
    z-index: -2;
    img {
      width: calc(100vw / 3);
      max-width: 36rem;
    }
  }
`;

export default About;
