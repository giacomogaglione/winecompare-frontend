

import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';

import "/styles/globals.css";
import theme from '../styles/theme';

import Header from "../components/Header";
import Footer from "@components/Footer";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import darkTheme from "../styles/darkTheme";
import ColorModeContext from "../styles/ColorModeContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  // Set dark mode based on media query
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  useEffect(() => {
    const mode = localStorage.getItem("mode") === "true";
    // set mode
    console.log(`get localStore ${mode}`);
    setDarkMode(mode);
  }, []);

  const _setDarkMode = (newmode) => {
    console.log(`set localStore ${newmode}`);
    localStorage.setItem("mode", newmode);
    setDarkMode(newmode);
  };

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Wine Compare</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <ColorModeContext.Provider value={colorMode}> */}
      <ColorModeContext.Provider
        value={{ darkMode, setDarkMode: _setDarkMode }}
      >
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </CacheProvider>
  );
}