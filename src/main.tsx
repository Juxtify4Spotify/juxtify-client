import './styles/globals.css'
import './styles/fonts.css'

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import { ThemeProvider } from './components/Theme/theme-provider';
import Header from './components/header';
import Sidebar from './components/sidebar';
import PlaybackControlBar from './components/playback-control-bar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex h-full gap-2 p-2">
        <Sidebar />
        <div className="flex flex-1">
          <div className="flex flex-col flex-1 gap-2">
            <Header />
            <main className="flex-1 overflow-auto border rounded-xl border-secondary">
              <RouterProvider router={router} />
            </main>
            <PlaybackControlBar />
          </div>
        </div>
      </div>
    </ThemeProvider>
  </React.StrictMode>,
);