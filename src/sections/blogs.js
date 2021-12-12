import React from "react";
import { Container, Box } from "theme-ui";
import Masonry from "react-masonry-component";
import ProjectTitle from "components/project-title";
import PostCard from "components/post-card";

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = (props) => {
  const { posts } = props;

  return (
    <Box as="section" id="projects" sx={styles.projects}>
      <Container>
        <ProjectTitle title="Blogs" text="" />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {posts.map(
            ({ feature_image, title, excerpt, slug, reading_time }, index) => (
              <PostCard
                key={index}
                image={feature_image}
                title={title}
                description={excerpt}
                slug={slug}
                readingTime={reading_time}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  projects: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
    pb: ["40px", null, null, null, "0px", null, "100px"],
  },
  blogWrapper: {
    mx: "-15px",
  },
};
