/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui";

export default function ContactText({ title }) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <Heading as="h2" sx={styles.wrapper.title}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexShrink: 0,
    ".btn__link": {
      mx: ["auto", null, null, 0],
    },
    ".list__box": {
      pt: [5, null, null, null, 6],
      width: "100%",
    },
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: [-2, null, null, null, -3],
    title: {
      fontSize: [6, 7, 8, null, 9, null, 10],
      color: "heading",
      lineHeight: [1.4, 1.45],
      fontWeight: "body",
      fontFamily: "heading",
      letterSpacing: "heading",
      mb: [3, 4],
      px: [0, null, 7, 0],
    },
  },
};
