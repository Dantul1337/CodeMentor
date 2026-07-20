import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import Courses from '../pages/Courses';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Admin from '../pages/Admin';
import Course from '../pages/Course';

import Layout from '../components/layout/Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'courses/:id',
        element: <Course />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
    ],
  },
]);
