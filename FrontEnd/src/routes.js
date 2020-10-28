import React from "react";
import Chapter1 from '../src/views/chapter1-Basic Computing'
import Chapter2 from '../src/views/chapter2-Linear Equations'
import Chapter3 from '../src/views/chapter3-Interpolation'
import Chapter4 from '../src/views/chapter4-Differentiation'
import Chapter5 from '../src/views/chapter5-Integration'
import Chapter6 from '../src/views/chapter6-Root-finding'
import LandingPage from '../src/views/LandingPage'
import Layout from '../src/layouts/MainLayout'



const routes = [
  {
    path: "/",
    element : <Layout/>,
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "commath", element: <LandingPage /> },
      { path: "b2s", element: <Chapter1 /> },
      { path: "elimination", element: <Chapter2 /> },
      { path: "interpolation", element: <Chapter3 /> },
      { path: "differentiation", element: <Chapter4 /> },
      { path: "integration", element: <Chapter5 /> },
      { path: "root-finding", element: <Chapter6 /> },
    ],
  },



];

export default routes;
