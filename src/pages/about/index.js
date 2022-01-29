/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "components/layout";
import PageTitle from "components/PageTitle";
import About from "components/About";
import { about } from "constants/about";

const AboutUs = () => {
  return (
    <Layout>
      <PageTitle title="About" text="" />
      <About
        data={about}
        backgroundColor="backgroundSecondary"
        flexDirection="row-reverse"
      />
    </Layout>
  );
};

export default AboutUs;
