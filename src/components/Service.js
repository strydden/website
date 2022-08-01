/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from "theme-ui";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from "components/image";

const Service = ({ data, backgroundColor, flexDirection }) => {
  return (
    <Box
      as="section"
      sx={{
        py: [30, 40, 50, 60, 80, 100],
        backgroundColor: backgroundColor,
      }}
    >
      <Container>
        <Box
          sx={{
            gap: [null, null, null, null, 2],
            display: "flex",
            flexDirection: ["column-reverse", null, null, flexDirection],
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={styles.illustration}>
            <Image src={data.servicesImage} loading="lazy" alt="support" />
          </Box>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>{data.title}</Heading>
            <Text as="p" sx={styles.desc1}>
              {data.desc1}
            </Text>
            <Box sx={styles.desc2Box}>
              {data.desc2 && (
                <Text as="p" sx={styles.desc2}>
                  {data.desc2}
                </Text>
              )}
            </Box>

            {data.subServicesList && (
              <Grid sx={styles.list} as="ul">
                {data.subServicesList.map((item, i) => (
                  <Box as="li" key={i}>
                    <IoIosCheckmarkCircle
                      sx={{ color: "primary", mr: 2 }}
                      size="20px"
                    />
                    <Text as="p">{item}</Text>
                  </Box>
                ))}
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Service;

const styles = {
  illustration: {
    textAlign: "center",
    position: "relative",
    display: "flex",
    alignItems: "center",
    mt: [2, null, null, 0, 4, 0],
    img: {
      maxWidth: ["100%", null, null, null, null, "100%"],
    },
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 420, 560, "none"],
    margin: [null, null, null, "0 auto", "unset"],
    textAlign: ["left", null, null, null, "left"],
  },
  title: {
    color: "heading",
    fontFamily: "heading",
    fontSize: [4, null, null, 8, null, null, 9],
    fontWeight: 600,
    lineHeight: [1.33, null, 1.4, 1.53],
    letterSpacing: ["-0.5px", null, null, "-1px"],
    mb: 3,
    span: {
      backgroundSize: "cover",
      px: 2,
    },
  },
  desc1: {
    color: "textSecondary",
    fontSize: ["13px", null, null, 2, "15px", 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
    m: [null, null, null, "20px auto 0", "15px 0 0", null, "unset"],
  },
  desc2: {
    color: "textSecondary",
    fontSize: ["13px", null, null, 2, "15px", 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
    m: [null, null, null, "20px auto 0", "15px 0 0", null, "unset"],
  },
  desc2Box: {
    mt: "1rem",
  },
  list: {
    gap: "0 18px",
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(2, 230px)",
    ],
    justifyContent: [null, null, null, "center", "unset"],
    listStyle: "none",
    mt: [4, null, null, 3, 3, 3],
    p: 0,
    li: {
      display: "grid",
      gridTemplateColumns: "30px 1fr",
      alignItems: "center",
      width: "max-content",
      textAlign: "left",
      width: "max-content",
      py: 1,
    },
    
    "li > p": {
      fontSize: [0, 1, null, 2, "15px", 2],
      fontWeight: 500,
      color: "textSecondary",
    },
  },
};
