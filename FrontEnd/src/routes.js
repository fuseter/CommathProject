import React from "react";
import Chapter1 from '../src/views/chapter1-Basic Computing'
import Chapter2 from '../src/views/chapter2-Linear Equations'
import Chapter3 from '../src/views/chapter3-Interpolation'
import Chapter4 from '../src/views/chapter4-Differentiation'
import Chapter5 from '../src/views/chapter5-Integration'
import Chapter6 from '../src/views/chapter6-Root-finding'
import LandingPage from '../src/views/LandingPage'



const routes = [
  {
    path: "/",
    children: [
      { path: "/", element: <LandingPage /> },
      { path: "chapter1-Basic-Computing", element: <Chapter1 /> },
      { path: "chapter2-Linear-Equations", element: <Chapter2 /> },
      { path: "chapter3-Interpolation", element: <Chapter3 /> },
      { path: "chapter4-Differentiation", element: <Chapter4 /> },
      { path: "chapter5-Integration", element: <Chapter5 /> },
      { path: "chapter6-Root-finding", element: <Chapter6 /> },
    ],
  },



];

export default routes;
