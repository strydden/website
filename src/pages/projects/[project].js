/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "components/layout";
import PageTitle from "components/PageTitle";
import Project from "components/Project";
import { useRouter } from "next/router";
import { projects } from "constants/projects";

const Services = () => {
  const router = useRouter();
  return (
    <Layout>
      <PageTitle
        title="Projects"
        text="Explore our wide range of Projects delivered"
      />
      {router.query.project && (
        <Project
          data={projects.find(
            (project) =>
              project.title.split("/").join(" ").toLowerCase() ===
              router.query.project.split("-").join(" ").toLowerCase()
          )}
          backgroundColor="backgroundSecondary"
          flexDirection="row"
        />
      )}
    </Layout>
  );
};

export default Services;
