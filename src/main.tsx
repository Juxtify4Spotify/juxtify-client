import './styles/globals.css';
import './styles/fonts.css';
import Menu from './components/Menus';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import { ThemeProvider } from './components/Theme/theme-provider';
import Sidebar from './components/Sidebar';
import Playlist from './routes/playlist';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/playlist',
    element: <Playlist />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Menu />
      <Sidebar>
        <RouterProvider router={router} />
      </Sidebar>
    </ThemeProvider>
  </React.StrictMode>,
);
