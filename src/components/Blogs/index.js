import React from "react";
import { blogList } from "../../constants/blogs-data";
import SingleBlog from "./SingleBlog";
import { Helmet } from "react-helmet";

const index = () => {
  return (
    <div>
      <Helmet>
        <title>Blog | Mudassir Khan</title>
      </Helmet>
      <header>
        <h1>
          <span>/</span>blogs :
        </h1>
      </header>

      <section>
        {blogList.map((data) => {
          return (
            <SingleBlog
              name={data.name}
              date={data.date}
              details={data.details}
              link={data.link}
            />
          );
        })}
      </section>
    </div>
  );
};

export default index;
