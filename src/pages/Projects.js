import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Project from "./Project";
import applab from "../images/applab.png";
import cscommunity from "../images/cscommunity.png";
import quotesapp from "../images/quotesapp.jpg";
import AnimeLab from "../images/Anime-Lab.png";
import yoga from "../images/yoga.jpg";
import soshii from "../images/thum.jpg";
const Projects = () => {

  useEffect(()=> {

    window.scrollTo(0,0);
    
  });

  const data = [
    {
      id: 1,
      name: "landing website 😎",
      image: applab,
      desc:
        "landing page for mobile app describing the app's features and the company that worked on it",
      url: "https://applabapp.netlify.app/",
      github: "https://github.com/mohammed5420/landing-website",
    },
    {
      id: 2,
      name: "Quotes app 😌",
      image: quotesapp,
      desc:
        "read some deep quotes and get into the mood of inspiration with simple user interface",
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
    {
      id: 4,
      name: "ITGC 🤩",
      image: cscommunity,
      desc: "get out from your cage and meet good friends in your college",
      url: "https://modsg.netlify.app/",
      github: "https://github.com/mohammed5420/mods",
    },
    {
      id: 5,
      name: "yoga website 🧘‍♂️",
      image: yoga,
      desc: "online yoga classes for real people redefine the perfect body",
      url: "https://yogaclassessite.netlify.app",
      github: "https://github.com/mohammed5420/yoga-website",
    },
    {
      id: 6,
      name: "soshii 🥙",
      image: soshii,
      desc:
        "eat it row before all else, then grill it, and boil it last of all",
      url: "https://sushiisite.netlify.app",
      github: "https://github.com/mohammed5420/Sushi-website",
    },
  ];
  return (
    <div>
      <StyledBack>
        <Link className="btn" to="/" onClick={() => {document.getElementsByTagName("html")[0].style.scrollBehavior ="smooth"}}>
          ⬅ home
        </Link>
      </StyledBack>
      <StyledHeader>awesome projects i'have been built</StyledHeader>
      <Container>
        {data.map(pro => (
          <Project data={pro} key={pro.id} />
        ))}
      </Container>
    </div>
  );
};

const StyledBack = styled.div`
  padding: 5rem 5rem 0;

  a {
    &:hover {
      color: var(--p-color);
    }
  }
`;

const StyledHeader = styled.h2`
  text-align: center;
  margin: 4rem 0;
  color: #202020;
`;

const Container = styled.div`
  padding: 5rem;

  .project {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5rem;

    @media screen and (max-width: 990px) {
      flex-direction: column;
    }
    .overview {
      padding: 3.5rem;
      flex-basis: 30%;
      border-radius: 0.8rem;
      background-color: rgba(255, 162, 0, 0.255);
      .overflow {
        width: 100%;
        height: 100%;
        border-radius: 0.8rem;
        overflow: hidden;
      }
      img {
        width: 100%;
        border-radius: 0.8rem;
        transition: all 300ms ease-in-out;

        &:hover {
          transform: scale(1.02) rotate(1deg);
        }
      }

      @media screen and (max-width: 990px) {
        padding: 0;
        flex-basis: 100%;
        max-width: 50rem;
        margin-bottom: 2rem;
        background-color: transparent;
      }
    }
    .info {
      flex-basis: 50%;
      padding: 3rem;
      background-color: transparent;
      border-radius: 0.8rem;
      box-shadow: 0 13px 2rem rgba(0, 0, 0, 0.104);
      transition: all 300ms ease-in-out;

      @media screen and (max-width: 990px) {
        flex-basis: 100%;
        width: 100%;
      }
      &:hover {
        transform: scale(1.02);
      }
      .title {
        font-weight: bold;
        margin-bottom: 0.6rem;
        color: #454545;
      }

      .about {
        color: var(--text-light);
        margin-bottom: 0.6rem;
        font-size: 1.8rem;
        max-width: 40rem;
      }
      .links a {
        font-size: 1.5rem;
      }
      .links a:first-child {
        color: var(--accent-color);
        margin-right: 1.2rem;
      }
      .links a:last-child {
        color: #202020;
        margin-right: 1.2rem;
      }
    }
    &:nth-child(odd) {
      flex-flow: row-reverse;
      @media screen and (max-width: 990px) {
        flex-flow: column;
      }
    }
  }
`;

export default Projects;
