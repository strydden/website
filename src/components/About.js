/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Grid, Heading, Text } from "theme-ui";
import { IoIosCheckmarkCircle } from "react-icons/io";

const About = ({ data, backgroundColor, flexDirection }) => {
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
          <Box sx={styles.rightContent}>
            <Box sx={styles.rightContentText}>
              <Box sx={styles.coreStrengthsBox}>
                <Text as="p" sx={styles.coreStrengthsTitle}>
                  {data.coreStrengthsTitle}
                </Text>
                {data.coreStrengthsDescList && (
                  <Grid sx={styles.list} as="ul">
                    {data.coreStrengthsDescList.map((item, i) => (
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
              <Box sx={styles.coreStrengthsBox}>
                <Text as="p" sx={styles.coreStrengthsTitle}>
                  {data.ourMissionTitle}
                </Text>
                <Text as="p" sx={styles.coreStrengthsDesc}>
                  {data.ourMissionDesc}
                </Text>
              </Box>
              <Box sx={styles.coreStrengthsBox}>
                <Text as="p" sx={styles.coreStrengthsTitle}>
                  {data.ourVisionTitle}
                </Text>
                <Text as="p" sx={styles.coreStrengthsDesc}>
                  {data.ourVisionDesc}
                </Text>
              </Box>
            </Box>
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

const styles = {
  rightContent: {
    display: "flex",
    flexDirection: "column",
  },
  rightContentText: {},
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 420, 560, "none"],
    margin: [null, null, null, "0 auto", "unset"],
    textAlign: ["left", null, null, null, "left"],
  },
  title: {
    color: "heading",
    fontFamily: "headingAlt",
    fontSize: [4, null, null, 8, null, null, 11],
    fontWeight: 500,
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
    gridTemplateColumns: "repeat(1, 1fr)",
    justifyContent: [null, null, null, "center", "unset"],
    listStyle: "none",
    mt: [4, null, null, 3, 3, 3],
    p: 0,
    li: {
      display: "grid",
      gridTemplateColumns: "30px 1fr",
      alignItems: "center",
      textAlign: "left",
      py: 1,
    },
    "li > p": {
      fontSize: [0, 1, null, 2, "15px", 2],
      fontWeight: 500,
      color: "textSecondary",
    },
  },
  coreStrengthsBox: {
    mt: [4, null, null, 5, 4, 5],
    maxWidth: 470,
  },
  coreStrengthsTitle: {
    fontSize: [0, 1, null, 2, "15px", 2],
    fontWeight: 600,
    alignItems: "center",
    color: "primary",
    display: "flex",
    textAlign: "left",
  },
  coreStrengthsDesc: {
    fontSize: [0, 1, null, 2, "15px", 2],
    fontWeight: 500,
    alignItems: "center",
    color: "textSecondary",
    display: "flex",
    textAlign: "left",
  },
};
