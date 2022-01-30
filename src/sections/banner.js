/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Image } from "theme-ui";
import BannerImage from "assets/banner.png";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Where Business vision meets top notch IT Services
          </Heading>
          {/* <Text as="p" variant="heroSecondary">
            Get your blood tests delivered at let home collect sample from the
            victory of the managements that supplies best design system
            guidelines ever.
          </Text> */}
        </Box>
        <Box sx={styles.banner.imageBox}>
          <Image src={BannerImage} alt="banner" width="740" height="782" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ["hidden", "initial", null, null, "hidden"],
    pt: ["150px", "145px"],
    pb: [0, null, null, null, 2],
    height: ["100vh", "100vh", "100vh", "100vh", "100vh"],
    container: {
      display: "flex",
      flexDirection: ["column", null, null, null, "row"],
    },
    contentBox: {
      width: ["100%", 430, 550, "75%", "50%", "45%"],
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      pt: [0, null, null, null, null, 6, 7, "70px"],
      mb: ["60px", null, null, null, 0],
      mx: [0, "auto"],
      textAlign: ["center", null, null, null, "left"],
      ".subscribe__area": {
        width: "100%",
        pr: [0, null, null, null, 6, "65px"],
        mb: ["35px", null, "45px"],
      },
    },
    imageBox: {
      justifyContent: "center",
      textAlign: ["center", null, null, null, "right"],
      mr: [0, null, null, null, null, null, -6, -7],
      pl: [0, null, "40px"],
      mb: [-2, null],
      img: {
        height: [360, "auto"],
        width: ["auto"],
      },
    },
  },
  sponsorTitle: {
    fontSize: 2,
    color: "#676A8B",
    pr: [0, null, 4],
    flexShrink: 0,
    pb: [2, null, 0],
    mt: "-1px",
  },
  sponsorBox: {
    flexDirection: ["column", null, "row"],
    width: "100%",
    justifyContent: ["flex-start", null, "center", null, "flex-start"],
    sponsor: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "> a": {
        mr: [4, null, 6],
        display: "flex",
        "&:last-of-type": {
          mr: 0,
        },
      },
    },
  },
};
