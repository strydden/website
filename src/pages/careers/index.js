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
    content: (
      <div>
        Get your website tests delivered at the home collect a sample. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
    contentHeader: "Remote, India/Pune | Full time | 2 - 5 years of Experience",
    isOpen: true,
  },
  {
    id: 2,
    title: `Kotlin Engineer`,
    content: (
      <div>
        We make it easy to move to CometNine. Simply contact us and we'll move
        your hosting account from any other provider, regardless of the control
        panel. If at anytime your website is down for more than 0.1% result with
        proper investigation experiments.
      </div>
    ),
    contentHeader: "Remote, India/Pune | Full time | 2 - 5 years of Experience",
    isOpen: false,
  },
  {
    id: 3,
    title: `Golang Engineer`,
    content: (
      <div>
        Create a hub for cross-functional work that also works with all. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
    contentHeader: "Remote, India/Pune | Full time | 2 - 5 years of Experience",
    isOpen: true,
  },
  {
    id: 4,
    title: `DevOps Engineer`,
    content: (
      <div>
        The pricing made me a little hesitant at first but I have been. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
    contentHeader: "Remote, India/Pune | Full time | 2 - 5 years of Experience",
    isOpen: true,
  },
  {
    id: 5,
    title: `Quality Analyst`,
    content: (
      <div>
        Stop your viewers from getting distracted. Publish videos to. Simply
        contact us and we'll move your hosting account from any other provider,
        regardless of the control panel. If at anytime your website is down for
        more than 0.1% result with proper investigation experiments.
      </div>
    ),
    contentHeader: "Remote, India/Pune | Full time | 2 - 5 years of Experience",
    isOpen: true,
  },
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
