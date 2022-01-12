import { useEffect } from "react";
import Router from "next/router";
import { initGA, logPageView } from "analytics";
// Load Typeface Fonts
import "typeface-dm-sans";
import "typeface-bree-serif";
import "typeface-roboto-slab";

// Load other package css file
import "react-multi-carousel/lib/styles.css";
import "rc-drawer/assets/index.css";

import "swiper/swiper-bundle.min.css";

import { ThemeProvider } from "theme-ui";
import theme from "theme";

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
