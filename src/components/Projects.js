import React from "react";
import styled from "styled-components";
import app from "../images/applab.png";
import quotesapp from "../images/quotesapp.jpg";
import Animelab from "../images/Anime-Lab.png";
import Project from "./Project";
import { Link } from "react-router-dom";

const Projects = () => {
  const data = [
    {
      id: 1,
      name: "landing website 😎",
      image: app,
      desc: "landing page for mobile app describing the app's features and the company that worked on it",
      url: "https://applabapp.netlify.app/",
      github: "https://github.com/mohammed5420/landing-website",
    },
    {
      id: 2,
      name: "Quotes app 😌",
      image: quotesapp,
      desc: "read some deep quotes and get into the mood of inspiration with simple user interface",
      url: "https://simpleanddeep.netlify.app/",
      github: "https://github.com/mohammed5420/quotes-app",
    },
    {
      id: 3,
      name: "Anime Lab 🎌",
      image: Animelab,
      desc: "last anime data from my anime list,build with reactJs",
      url: "https://anime-lab.netlify.app/",
      github: "https://github.com/mohammed5420/Anime-Lab",
    },
  ];
  return (
    <StyledProject id="projects">
      <TitleContainer>
        awesome projects <br />
        i've been <span>built</span>
      </TitleContainer>
      <div className="container">
        {data.map(pro => (
          <Project
            key={pro.id}
            name={pro.name}
            id={pro.id}
            github={[pro.github]}
            url={[pro.url]}
            desc={pro.desc}
            image={pro.image}
          />
        ))}
      </div>
      <div className="btn-container">
        <Link
          className="btn"
          to="/projects"
          onClick={() => {
            document.getElementsByTagName("html")[0].style.scrollBehavior =
              "initial";
          }}
        >
          see more
        </Link>
      </div>
    </StyledProject>
  );
};

const TitleContainer = styled.h2`
  margin-bottom: 8rem;
  text-align: center;

  span {
    color: var(--accent-color);
    font-family: "Pacifico", cursive;
  }
`;

const StyledProject = styled.section`
  padding: 7rem 5rem;
  margin: 0 calc(-50vw + 50%);
  background-color: var(--s-color);
  color: #fff;
  .container {
    max-width: 1330px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 0 auto 4rem;
  }

  .btn-container {
    text-align: center;
    margin-top: 2rem;
  }
`;

export default Projects;
