import "./assets/styles/globals.css";
import "./assets/styles/fonts.css";
import Menu from "./components/Menu";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { ThemeProvider } from './components/Theme/theme-provider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Menu />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
