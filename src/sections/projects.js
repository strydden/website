import { Container, Box } from "theme-ui";
import ProjectTitle from "components/project-title";
import React, { useRef } from "react";
import Swiper from "react-id-swiper";
import ProjectCard from "components/ProjectCard";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { projects } from "constants/projects";

const Projects = () => {
  const ref = useRef(null);
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };
  const params = {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      376: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <Box sx={styles.projects} id="news">
      <Container>
        <ProjectTitle title="Projects" text="" />

        <Swiper {...params} ref={ref}>
          {projects.map((project, index) => (
            <div className="swiper-slider" key={`feature-card-key${index}`}>
              <ProjectCard
                image={project.homeImage}
                title={project.title}
                path={project.path}
              />
            </div>
          ))}
        </Swiper>
        <Box sx={styles.carouselBtns}>
          <button aria-label="left btn" onClick={goPrev}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={goNext} aria-label="right btn">
            <FaLongArrowAltRight />
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;

const styles = {
  blockTitle: {
    textAlign: "center",
  },
  projects: {
    pt: ["80px", null, null, null, null, null, "120px"],
    pb: ["80px", null, null, null, "170px"],
    backgroundColor: "#F8FAFC",
    ".swiper-slider": {
      overflowY: "visible",
      overflowX: "hidden",
    },
  },
  carouselBtns: {
    display: ["flex", null, null, null, null],
    justifyContent: "center",
    alignItems: "center",
    button: {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      fontSize: [2, null, 4, null, 5],
      color: "#BBC7D7",
      width: "auto",
      padding: [0],
      margin: "0 5px",
      mt: "15px",
      transition: "500ms",
      "&:hover, &:active, &:focus": {
        color: "primary",
      },
    },
  },
};
