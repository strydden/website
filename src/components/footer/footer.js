/** @jsx jsx */
import { jsx, Box, Text, Flex, Container } from "theme-ui";
import { Link } from "components/link";
import menuItems from "./footer.data";
import CallToAction from "sections/call-to-action";
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
            <Link
              path="/"
              sx={{
                variant: "links.logo",
                display: "flex",
                cursor: "pointer",
                ml: 2,
                mr: 2,
                textDecoration: "none",
                color: "primary",
                fontWeight: "bold",
                mt: [3, null, null, null, 0],
              }}
            >
              Strydden
            </Link>
            <Text as="span">Technologies LLP</Text>
          </Flex>
          {/* <Flex as="ul" sx={styles.footerNav}>
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
                  {item?.label}
                </a>
              </li>
            ))}
          </Flex> */}
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
    justifyContent: "center",
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
    span: {
      color: "text_secondary",
      opacity: 0.7,
      fontSize: 1,
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
        fontSize: [1, null, null, 2],
        "&.facebook > svg": {
          color: "#3B5998",
        },
        "&.twitter > svg": {
          color: "#55ACEE",
        },
        "&.github > svg": {
          color: "#161614",
        },
        ":hover": {
          color: "primary",
        },
        ":last-child": {
          mb: "0px",
        },
      },
      svg: {
        width: "17px",
        mr: 2,
        fontSize: 2,
        flexShrink: 0,
      },
    },
  },
};
