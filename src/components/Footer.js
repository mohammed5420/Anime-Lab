import React from "react";
import Twitter from "../images/Twitter.svg";
import Github from "../images/Github.svg";
import styled from "styled-components";


const Footer = () => {

  return (
    <StyledFooter id="footer">
      <h3>the best for you</h3>
      <a href="https://twitter.com/Dev_Mo7amed">
        <img src={Twitter} alt="Twitter-icon" />
      </a>
      <a href="https://github.com/mohammed5420">
        <img src={Github} alt="GitHub-icon" />
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 5rem;
  background-color: var(--s-color);
  margin: 0 calc(-50vw + 50%);

  text-align: center;

  h3 {
    color: #f2f2f2;
    margin-bottom: 1rem;
  }

  img {
    display: inline-block;
    transition: all 0.3s ease;
    margin: 0 1rem 0;
    

    &:hover {
      transform: scale(1.04);
    }
  }

  img:nth-child(2) {
    left: 55%;
  }
`;
export default Footer;
