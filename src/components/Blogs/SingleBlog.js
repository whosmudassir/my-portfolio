import React from "react";

const SingleBlog = ({ name, date, details, link }) => {
  return (
    <div>
      {/* <!-- section --> */}
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{details}</p>
      <p>
        <a className="links" href={link} target="_blank">
          Read blog
        </a>
      </p>
    </div>
  );
};

export default SingleBlog;
