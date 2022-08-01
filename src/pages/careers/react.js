import Layout from "components/layout";
import { Container } from "theme-ui";
import PageTitle from "components/PageTitle";
import JobSummary from "components/JobSummary";
import Requirements from "components/Requirements";
import Benefits from "components/Benefits";
import ApplyButton from "components/ApplyButton";

const index = () => {
  return (
    <Layout>
      <Container>
        <PageTitle title={"React.js Engineer"} text={"100% remote"} />
        <JobSummary summary={data.jobSummary} />
        <Requirements requirements={data.requirements} />
        <Benefits benefits={data.benefits} />
        <ApplyButton />
      </Container>
    </Layout>
  );
};

const data = {
  jobSummary: `
                    We are looking for Software Engineers with experience in 
                    React.js to build high-quality software for both internal 
                    products and clients. In this role, you will be working 
                    alongside industry-leading developers, designers, and QAs
                    to solve problems. You will have the opportunity to deliver 
                    high-quality work with clients ranging from fast-growing 
                    startups to big enterprise companies, while developing and
                    building your own skill set.
                `,
  requirements: [
    `1+ years of production experience with React JS 
        (and/or other modern frameworks- Angular JS, Vue JS).
        `,
    `Experienced with associated tooling (Redux, Jest, Webpack, Babel, Enzyme, Cypress).`,
    `1+ years of experience of JavaScript(and preferably TypeScript) including asynchronous 
        programming, closures, types and ES6/ES7.`,
    `Thorough understanding of React JS and its core principles including Virtual DOM
        Data Binding, State and Props and React Lifecycle and Redux Middleware such as 
        Thunk or Saga.`,
    `Experience with front-end technologies such as HTML5, CSS3, LESS, Bootstrap, Material UI etc.`,
    `Experience consuming and transforming internal and 3rd party APIs(REST and GraphQL).`,
    `Experience with code quality and reusability practice (Eslint, Prettier, CI/CD for frontend repos).`,
    `Knowledge of cross-browser compatibilities, responsiveness and web accessibility standards.`,
    `Strong understanding of software engineering best practices including unit testing, code reviews 
        ,design and documentation, debugging, troubleshooting and agile development.`,
    `Comminication`,
    `You like discussing a plan upfront, welcome collaboration and are an excellent 
        verbal and written communicator.`,
    `Bachelor's degree in Computer Science or equivalent field.`,
  ],
  benefits: [
    `The position is fully remote.`,
    `Competitive salary.`,
    `No micro management.`,
    `Flat organizational structure.`,
    `Work at a sustainable pace, with realistic targets.`,
    `Encouraged to contribute to open source projects.`,
    `Participate in a culture of learning and sharing learnings.`,
  ],
};

export default index;
