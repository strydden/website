/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "components/layout";
import PageTitle from "components/PageTitle";
import Project from "components/Project";
import { projects } from "constants/projects";

const Projects = () => {
    return (
        <Layout>
            <PageTitle
                title="Projects"
                text="Explore our wide range of Projects delivered"
            />
            <Project
                data={projects[0]}
                backgroundColor="backgroundSecondary"
                flexDirection="row"
            />
            <Project data={projects[1]} flexDirection="row-reverse" />
            <Project
                data={projects[2]}
                backgroundColor="backgroundSecondary"
                flexDirection="row"
            />
            <Project data={projects[3]} flexDirection="row-reverse" />
            <Project
                data={projects[4]}
                flexDirection="row"
                backgroundColor="backgroundSecondary"
            />
        </Layout>
    );
};

export default Projects;
