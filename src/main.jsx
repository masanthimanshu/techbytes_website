import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { createRoot } from "react-dom/client";
import { Theme } from "./style/theme";
import { Router } from "./router";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={Theme}>
      <Router />
    </ThemeProvider>
  </BrowserRouter>
);
