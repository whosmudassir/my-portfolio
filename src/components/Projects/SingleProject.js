import React from "react";

const SingleProject = ({ name, date, info, tech, demoLink, codeLink }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{date}</p>
      <p>
        {info}, built using {tech}
      </p>
      <p>
        <a class="links" href={demoLink} target="_blank">
          Demo
        </a>
        <a class="links" href={codeLink} target="_blank">
          Code
        </a>
      </p>
    </div>
  );
};

export default SingleProject;
