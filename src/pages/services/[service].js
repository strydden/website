/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "components/layout";
import PageTitle from "components/PageTitle";
import { services } from "constants/services";
import Service from "components/Service";
import { useRouter } from "next/router";

const Services = () => {
  const router = useRouter();
  return (
    <Layout>
      <PageTitle title="Services" text="Explore our wide range of Services" />
      {router.query.service && (
        <Service
          data={services.find(
            (service) =>
              service.title.split("/").join(" ").toLowerCase() ===
              router.query.service.split("-").join(" ").toLowerCase()
          )}
          backgroundColor="backgroundSecondary"
          flexDirection="row"
        />
      )}
    </Layout>
  );
};

export default Services;
