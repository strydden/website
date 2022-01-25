/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import BlockTitle from "components/project-title";
import ServiceCard from "components/ServiceCard";
import { services } from "constants/services";

const Services = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <BlockTitle title="Services" text="" />
        <Box sx={styles.grid}>
          {services.map((item, index) => (
            <ServiceCard key={index} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: "backgroundSecondary",
    py: 10,
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ["10px auto 0"],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: "grid",
    maxWidth: 1080,
    margin: "0 auto",
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      null,
      null,
      "repeat(2, 1fr)",
      "repeat(3, 1fr)",
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.border_color}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.border_color}`],
  },
};
