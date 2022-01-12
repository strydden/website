/** @jsx jsx */
import { jsx, Link as A } from "theme-ui";
import NextLink from "next/link";

export const NavLink = ({ href, label, activeClass, ...rest }) => {
  return (
    <NextLink href={href}>
      <A {...rest} className={activeClass ? "active" : ""}>
        {label}{" "}
      </A>
    </NextLink>
  );
};

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children ? children : label}
    </A>
  );
}
