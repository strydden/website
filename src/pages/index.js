import React from "react";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import Projects from "sections/projects";
import Contact from "sections/contact";
import Technology from "sections/technology";

export default function IndexPage() {
    return (
        <Layout>
            <SEO title="Strydden Technologies LLP" />
            <Banner />
            <Services />
            <Technology />
            <Projects />
            <Contact />
        </Layout>
    );
}
