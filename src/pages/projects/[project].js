/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "components/layout";
import PageTitle from "components/PageTitle";
import Project from "components/Project";
import { projects as StaticProjects } from "constants/projects";

export async function getStaticProps({ params }) {
  return {
    props: {
      project: StaticProjects.find(
        (project) =>
          project.title.split("/").join(" ").toLowerCase() ===
          params.project.split("-").join(" ").toLowerCase()
      ),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const paths = StaticProjects.map((project) => ({
    params: {
      project: project.title.toLowerCase().split(" ").join("-"),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const Projects = ({ project }) => {
  return (
    <Layout>
      <PageTitle
        title="Projects"
        text="Explore our wide range of Projects delivered"
      />
      <Project
        data={project}
        backgroundColor="backgroundSecondary"
        flexDirection="row"
      />
    </Layout>
  );
};

export default Projects;
