/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from "theme-ui";
import { ViewMore } from "./ViewMore";

const ServiceCard = ({ data, ...props }) => {
  return (
    <Box sx={styles.feature} {...props}>
      <Box as="figure">
        <Image src={data.homeImage} alt={data.heading} />
      </Box>
      <Box>
        <Heading as="h4">{data.title}</Heading>
        <Text as="p">{data.homePageDesc1}</Text>
        <Text as="p">{data.homePageDesc2}</Text>
        {data.path && <ViewMore path={data.path} />}
      </Box>
    </Box>
  );
};

export default ServiceCard;

const styles = {
  feature: {
    borderBottom: (t) => [null, null, `1px solid ${t.colors.border_color}`],
    borderRight: (t) => [null, null, `1px solid ${t.colors.border_color}`],
    padding: [
      "30px",
      "30px",
      "45px 30px 55px",
      "45px 30px 55px",
      "40px 25px 50px 35px",
      "60px 45px 60px 50px",
    ],
    textAlign: ["center", null, null, null, null, "left"],
    transition: "0.3s ease 0s",
    "@media only screen and (min-width:768px)": {
      ":hover": {
        backgroundColor: "white",
        borderColor: "white",
        boxShadow: "0px 20px 50px rgba(59, 90, 136, 0.05)",
        transform: "translate(-1px, -1px)",
      },
    },
    figure: {
      display: "inline-flex",
      alignItems: "center",
      minWidth: [70],
      mb: 6,
    },
    h4: {
      fontSize: 3,
      fontWeight: 700,
      lineHeight: 1.28,
      color: "heading",
      marginBottom: 2,
    },
    p: {
      fontSize: [1, null, null, null, 2],
      lineHeight: 1.88,
      color: "headingSecondary",
    },
    a: {
      mt: [2, null, null, null, 6],
    },
  },
};
