/** @jsx jsx */
import { jsx, Container, Text } from "theme-ui";
import Layout from "components/layout";
import PageTitle from "components/PageTitle";
import Accordion from "components/accordion/accordion";
import JobList from "components/JobList";
const data = [
  {
    id: 1,
    title: `React JS Engineer`,
    contentHeader: "Remote, India/Pune | Full time /Part time | 1+ years of Experience",
    isOpen: true,
    routingPath: "/careers/react"
  }
  
];

const Careers = () => {
  return (
    <Layout>
      <Container>
        <PageTitle
          title="Careers at Strydden"
          text="Join Strydden to give your career a big boost and join hands with a young, dynamic team."
        />
        <Text
          sx={{
            fontSize: [4, 5, 6, null, 7],
            color: "heading",
            textAlign:"center",
            fontFamily: "heading",
            fontWeight: "body",
            letterSpacing: "heading",
            mb: [4, null, null, 6],
          }}
        >
          Job Positions
        </Text>
        <JobList items={data}/>
      </Container>
    </Layout>
  );
};

export default Careers;
