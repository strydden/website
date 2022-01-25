/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "components/layout";
import PageTitle from "components/PageTitle";
import Service from "components/Service";
import { services } from "constants/services";

const Services = () => {
  return (
    <Layout>
      <PageTitle title="Services" text="Explore our wide range of Services" />
      <Service
        data={services[0]}
        backgroundColor="backgroundSecondary"
        flexDirection="row"
      />
      <Service data={services[1]} flexDirection="row-reverse" />
      <Service
        data={services[2]}
        backgroundColor="backgroundSecondary"
        flexDirection="row"
      />
      <Service data={services[3]} flexDirection="row-reverse" />
      <Service
        data={services[4]}
        backgroundColor="backgroundSecondary"
        flexDirection="row"
      />
      <Service data={services[5]} flexDirection="row-reverse" />
    </Layout>
  );
};

export default Services;
