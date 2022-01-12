/** @jsxRuntime classic */
/** @jsx jsx */
import NextLink from "next/link";
import { jsx, Link as A } from "theme-ui";
import { IoIosArrowForward } from "react-icons/io";
import { keyframes } from "@emotion/react";

export const ViewMore = ({ path, label, children, ...rest }) => {
  return (
    <NextLink href={path}>
      <A sx={styles.viewMore} {...rest}>
        {label ?? "View More"} <IoIosArrowForward size="16px" />
      </A>
    </NextLink>
  );
};

const fadeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;

const styles = {
  viewMore: {
    color: "#3183FF",
    cursor: "pointer",
    fontSize: [1, null, null, "14px"],
    fontWeight: 500,
    display: "inline-flex",
    alignItems: "center",
    svg: {
      transform: "translateX(3px)",
      width: ["13px", null, null, "16px"],
    },
    ":hover": {
      svg: {
        animation: `${fadeRight} 0.5s linear`,
      },
    },
  },
};
