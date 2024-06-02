import './styles/globals.css'
import './styles/font.css'
import Menu from "./components/Menu";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";

import { ThemeProvider } from './components/theme-provider';

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
