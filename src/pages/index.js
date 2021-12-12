import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import Subscribe from "sections/subscribe";
import Testimonial from "sections/testimonial";
import Projects from "sections/projects";
import Contact from "sections/contact";
import Technology from "sections/technology";
import Blogs from "sections/blogs";

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPosts() {
  const result = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());
  return result.posts;
}

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
    revalidate: 1,
  };
}

export default function IndexPage({ posts }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="STRYDDEN Technologies LLP" />
        <Banner />
        <Services />
        <Technology />
        <Projects />
        {/* <Testimonial /> */}
        <Blogs posts={posts} />
        <Contact />
        {/* <Subscribe /> */}
      </Layout>
    </ThemeProvider>
  );
}
