import React from "react";
import { Box, Text, Heading } from "theme-ui";

const PageTitle = ({ title, text }) => {
  return (
    <Box sx={styles.pageTitle} className="pageTitle">
      <Heading as="h3">{title}</Heading>
      <Text as="p">{text}</Text>
    </Box>
  );
};

export default PageTitle;

const styles = {
  pageTitle: {
    padding: "120px 0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    mb: ["60px", null, null, null, "60px", null, "80px"],
    h3: {
      color: "#0F2137",
      fontSize: ["23px", null, null, "30px"],
      fontWeight: 700,
      letterSpacing: "-1.5px",
      lineHeight: 1,
      mb: "20px",
    },
    p: {
      lineHeight: 1,
      fontSize: "18px",
      color: "#858B91",
    },
  },
};
