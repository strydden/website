/** @jsx jsx */
import { jsx, Box, Text, Flex, Container } from "theme-ui";
import { Link } from "components/link";
import menuItems from "./footer.data";
export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Flex sx={styles.footerInner}>
          {/* <Flex sx={styles.brand}>
            <Link
              path="/"
              sx={{
                variant: "links.logo",
                display: "flex",
                cursor: "pointer",
                mr: 15,
                textDecoration: "none",
                color: "#F94962",
                fontWeight: "bold",
              }}
            >
              STRYDDEN
            </Link>
            <Text as="span">Technologies LLP</Text>
          </Flex> */}
          <Flex sx={styles.copyright}>
            <Text as="span">&copy; Copyright {new Date().getFullYear()}</Text>
            <Text
              as="span"
              sx={{
                display: "flex",
                ml: 1,
                mr: 1,
                mt: [3, null, null, null, 0],
                color: "primary",
                fontWeight: "600",
                fontSize: 1,
                lineHeight: "18px",
              }}
            >
              Strydden Technologies LLP
            </Text>
          </Flex>
          <Flex as="ul" sx={styles.footerNav}>
            <Text
              as="span"
              sx={{
                fontWeight: "medium",
                textTransform: "uppercase",
                marginRight: "20px",
                fontSize: "12px",
              }}
            >
              Follow us:
            </Text>
            {menuItems?.map((item, index) => (
              <li key={index}>
                <a
                  className={item?.name}
                  href={item?.path}
                  key={index}
                  sx={styles.footer.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item?.icon}
                </a>
              </li>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: "background_secondary",
    pt: [6],
    pb: [6],
  },
  footerInner: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: ["column", null, null, null, "row"],
  },
  brand: {
    alignItems: "center",
    span: {
      color: "text_secondary",
      opacity: 0.7,
      fontSize: 1,
    },
  },
  copyright: {
    alignItems: "center",
    flexDirection: ["column", "row", "row", "row", "row"],
    a: {
      fontSize: [1, null, null, null, 1],
    },
    span: {
      color: "text_secondary",
      opacity: 0.7,
      fontSize: [1, null, null, null, 1],
      lineHeight: "18px",
      // ml: [null, null, null, null, 3],
      mt: [3, null, null, null, 0],
    },
  },
  footerNav: {
    listStyle: "none",
    m: ["25px 0 0", null, null, null, 0],
    p: 0,
    li: {
      "+ li": {
        ml: [3, null, null, null, 4],
      },
      a: {
        display: "flex",
        alignItems: "center",
        color: "text_secondary",
        flexDirection: ["column", "row", "row", "row", "row"],
        cursor: "pointer",
        textDecoration: "none",
        transition: "0.2s",
        fontSize: [1, null, null, 2],
        "&.facebook > svg": {
          color: "var(--theme-ui-colors-primary,#223266)",
        },
        "&.twitter > svg": {
          color: "var(--theme-ui-colors-primary,#223266)",
        },
        "&.github > svg": {
          color: "var(--theme-ui-colors-primary,#223266)",
        },
        ":hover": {
          color: "primary",
          transform: "scale(1.1)",
        },
        ":last-child": {
          mb: "0px",
        },
      },
      svg: {
        width: "18px",
        height: "18px",
        mr: 2,
        fontSize: 2,
        flexShrink: 0,
      },
    },
  },
};
