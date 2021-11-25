import React from "react";
import { Container, Box } from "theme-ui";
import Masonry from "react-masonry-component";
import ProjectTitle from "components/project-title";
import ProjectCard from "components/project-card";

import travalabWeb from "assets/travalabWeb.png";
import travalabApp from "assets/travalabApp.png";
import qrcty from "assets/qrcty.png";

const BLOG_DATA = [
  {
    image: travalabWeb,
    title: "Travalab Web App",
    description:
      "Travalab provides mobile phlebotomy services nationwide to patients within the comfort of their homes, offices, or health clinics. We are partnered with several speciality labs, research groups, and clinical trials teams. Our mission is to bridge phlebotomy needs with accessibility and convenience for all.",
    linkLabel: "View",
    path: "https://travalab.com/",
  },
  {
    image: travalabApp,
    title: "Travalab Mobile App",
    description:
      "Travalab provides mobile phlebotomy services nationwide to patients within the comfort of their homes, offices, or health clinics. We are partnered with several speciality labs, research groups, and clinical trials teams. Our mission is to bridge phlebotomy needs with accessibility and convenience for all.",
    path: "https://travalab.com/",
    linkLabel: "View",
  },
  {
    image: qrcty,
    title: "QRCTY Mobile App",
    description:
      "QRCTY is a mobile application, which helps users to find nearest restaurants and pubs based on people density, also helps users to find business and activities.",
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Projects = () => {
  return (
    <Box as="section" id="projects" sx={styles.projects}>
      <Container>
        <ProjectTitle title="Projects" text="" />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
              <ProjectCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;

const styles = {
  projects: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["40px", null, null, null, "0px", null, "100px"],
  },
  blogWrapper: {
    mx: "-15px",
  },
};
