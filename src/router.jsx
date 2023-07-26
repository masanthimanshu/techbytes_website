import { CssBaseline, Divider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Spacer } from "./components/Spacer";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";
import "./style/global.css";

export const Router = () => {
  return (
    <>
      <CssBaseline />
      <header>
        <Header />
        <Spacer />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <Spacer />
        <Divider />
        <Footer />
      </footer>
    </>
  );
};
