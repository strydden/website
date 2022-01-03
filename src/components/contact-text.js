import { Box, Heading, Text } from "theme-ui";

export default function ContactText({
  title,
  subtitle,
  address,
  mobile,
  email,
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <Box sx={styles.box}>
          <Heading as="h2" sx={styles.wrapper.title}>
            {title}
          </Heading>
          <Text sx={styles.wrapper.subTitle}>{subtitle}</Text>
        </Box>
        <Box sx={styles.box}>
          <Heading as="h6" sx={styles.wrapper.label}>
            Address
          </Heading>
          <Text sx={styles.wrapper.value}>{address}</Text>
        </Box>
        <Box sx={styles.box}>
          <Heading as="h6" sx={styles.wrapper.label}>
            Mobile
          </Heading>
          <Text sx={styles.wrapper.value}>{mobile}</Text>
        </Box>
        <Box sx={styles.box}>
          <Heading as="h6" sx={styles.wrapper.label}>
            Email
          </Heading>
          <Text sx={styles.wrapper.value}>{email}</Text>
        </Box>
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
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    mt: [-2, null, null, null, -3],
    div: {
      pb: "2",
    },
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
    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
    label: {
      fontSize: [2, 3, 3, null, null, null, 4],
      color: "heading",
      lineHeight: [1.4, 1.45],
      fontWeight: "500",
      fontFamily: "heading",
      letterSpacing: "1",
      textTransform: "uppercase",
      px: [0, null, 7, 0],
    },
    value: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
    },
  },
};
