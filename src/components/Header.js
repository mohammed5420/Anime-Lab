import React, { useState } from "react";
import Logo from "../images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const clickHandleEvant = () => {
    setToggle(false);
  }
  return (
    <header >
      <StyledNav className={` ${toggle ? "open" : ""}`}>
        <div className="logo">
          <Link to="/"><img src={Logo} alt="logo" /></Link>
        </div>
        <div className={`navlist`}>
          <div className="overlay"></div>

          <li onClick={clickHandleEvant}>
            <a href="/#about">about</a>
          </li>
          <li onClick={clickHandleEvant}>
            <a href="/#projects">project</a>
          </li>
          <li onClick={clickHandleEvant}>
            <a href="/#contact">contact</a>
          </li>
        </div>
        <div
          className="hamberger"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </StyledNav>
    </header>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5rem 0;
  min-height: 10vh;

  .logo {
    width: 6rem;
    img {
      width: 100%;
    }
  }

  .navlist {
    list-style: none;
    display: flex;
    align-items: center;
    transition: all 1s ease-in-out;

    @media screen and (max-width: 990px) {
      display: none;
    }

    & > * + * {
      margin-left: 2.4rem;
    }

    li {
      z-index: 99;
      a {
        color: var(--text-dark);
        font-size: 1.6rem;
        text-transform: capitalize;
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  .hamberger {
    display: none;
    cursor: pointer;
    z-index: 99;

    & > span {
      display: block;
      width: 2rem;
      height: 0.24rem;
      border-radius: 3rem;
      background-color: #282828;
      &:not(:last-child) {
        margin-bottom: 0.4rem;
      }
    }
    @media screen and (max-width: 990px) {
      display: block;
    }
  }

  &.open{
    .navlist {    position: absolute;
    display:flex;
    top: 5rem;
    left: 5rem;
    right: 5rem;
    bottom: 5rem;
    border-radius: .6rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 2.4rem rgba(0,0,0,0.2);
    li {
        z-index: 99;
        margin: 3rem;
        a {
            color: white;
            font-size: 2rem;
        } 
    }}

     .overlay {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: #333;
        z-index: 88;
    }
    .hamberger {
      position: relative;
      width: 2.04rem;
      height: 2.04rem;
      transform-origin: 1px;
      span {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50% , -50%);
          background-color: white;
          transition: all 300ms ease-in-out;
        
                &:first-child {
          transform: rotate(45deg);
      }

      &:nth-child(2) {
          background-color: transparent;
          transform: translateX(2rem);
      }
      &:last-child {
        transform: rotate(-45deg);
      }
      }


  }
}

`;

export default Header;
