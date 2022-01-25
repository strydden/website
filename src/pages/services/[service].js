/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "components/layout";
import PageTitle from "components/PageTitle";
import { services as StaticServices } from "constants/services";
import Service from "components/Service";

export async function getStaticProps({ params }) {
  return {
    props: {
      service: StaticServices.find(
        (service) =>
          service.title.split("/").join(" ").toLowerCase() ===
          params.service.split("-").join(" ").toLowerCase()
      ),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const paths = StaticServices.map((service) => ({
    params: {
      service:
        service.title === "UI/UX"
          ? service.title.toLowerCase().split("/").join("-")
          : service.title.toLowerCase().split(" ").join("-"),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

const Services = ({ service }) => {
  return (
    <Layout>
      <PageTitle title="Services" text="Explore our wide range of Services" />
      <Service
        data={service}
        backgroundColor="backgroundSecondary"
        flexDirection="row"
      />
    </Layout>
  );
};

export default Services;
