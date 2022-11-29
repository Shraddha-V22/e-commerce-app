import React from "react";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
