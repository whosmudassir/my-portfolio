import React from "react";
import { projectsList } from "../../constants/projects-data";
import SingleProject from "./SingleProject";
import { Helmet } from "react-helmet";
import {
  useColorMode,
  Box,
  useColorModeValue,
  Button,
  Center,
} from "native-base";

const Projects = () => {
  return (
    <Box>
      <div>
        <Helmet>
          <title>Projects | Mudassir Khan</title>
        </Helmet>
        {/* <!-- header --> */}
        <header>
          <h1>
            <span>/</span>projects :
          </h1>
        </header>

        {/* <!-- section --> */}
        <section>
          {projectsList.map((data) => {
            return (
              <SingleProject
                name={data.name}
                date={data.date}
                info={data.info}
                tech={data.tech}
                demoLink={data.demoLink}
                codeLink={data.codeLink}
              />
            );
          })}
        </section>
      </div>
    </Box>
  );
};

export default Projects;
