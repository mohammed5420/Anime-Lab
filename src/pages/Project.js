import React from "react";

const Project = ({ data }) => {
  return (
    <div className="project" key={data.id}>
      <div className="overview">
        <div className="overflow">
          <a href={data.url}><img src={data.image} alt="cover" /></a>
        </div>
      </div>
      <div className="info">
        <h3 className="title">{data.name}</h3>
        <p className="about">{data.desc}</p>
        <div className="links">
          <a href={data.url}>see live</a>
          <a href={data.github}>github</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
