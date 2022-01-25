/** @jsx jsx */
import { jsx, Container, Flex, Image } from "theme-ui";
import { keyframes } from "@emotion/core";
import { DrawerProvider } from "contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import { Link, NavLink } from "components/link";
import Divider from "assets/divider.svg";
import { useRouter } from "next/router";
import logo from "assets/logo.png";

const Header = ({ className }) => {
  const router = useRouter();
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Link
            path="/"
            sx={{
              variant: "links.logo",
              display: "flex",
              cursor: "pointer",
              mr: 15,
              textDecoration: "none",
              color: "primary",
              fontWeight: "bold",
            }}
          >
            <Image sx={styles.logo} src={logo} alt="logo" />
          </Link>
          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, index) => (
              <NavLink
                href={path}
                label={label}
                key={index}
                activeClass={
                  router.pathname === path ||
                  router.asPath.split("/")[1] === path.split("/")[1]
                }
              />
            ))}
          </Flex>
          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
};

export default Header;

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    py: [4, null, 5],
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
      backgroundImage: ["none", null, null, null, `url(${Divider})`],
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center bottom",
      backgroundSize: "contain",
      backgroundColor: ["#FEEDEF", null, null, null, "transparent"],
      color: "primary",
      fontWeight: "bold",
      py: ["12px", null, null, null, 2],
      px: [3, null, null, null, 0],
      ":hover": {
        backgroundColor: ["primary", null, null, null, "transparent"],
        color: ["white", null, null, null, "primary"],
      },
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "heading",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: "20px",
      "nev > a": {
        color: "heading",
      },
      ".donate__btn": {
        border: "0px solid",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    ml: "auto",
    mr: 6,
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: "16px",
      fontWeight: "heading",
      px: 20,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      color: "heading",
      textTransform: "uppercase",
      fontWeight: "bold",
      "&:hover": {
        color: "#DB1F26",
      },
      "&.active": {
        color: "#DB1F26",
      },
    },
  },
  logo: {
    height: "auto",
    width: "160px",
  },
};
