import React , {useEffect}from "react";
import About from "../components/About";
import Landing from "../components/Landing";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname ==="/"){
      document.getElementsByTagName("html")[0].style.scrollBehavior ="smooth";
}
  });
  return (
    <>
      <Header />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
