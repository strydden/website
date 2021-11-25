import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from "sections/services";
import Subscribe from 'sections/subscribe';
import Testimonial from 'sections/testimonial';
import Projects from "sections/projects";
import Contact from "sections/contact";
import Technology from "sections/technology";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="STRYDDEN Technologies LLP"
        />
        <Banner />
        <Services />
        <Technology />
        <Projects />
        {/* <Testimonial /> */}
        <Contact />
        {/* <Subscribe /> */}
      </Layout>
    </ThemeProvider>
  );
}
