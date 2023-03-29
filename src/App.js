import React from "react";

import "antd/dist/antd.min.css";
import "./App.css";


import { Layout } from "antd";
import AppAdidas from "./components/home/Adidas";
import AppHero from "./components/home/Hero";
import AppNike from "./components/home/Nike";
import AppPuma from "./components/home/Puma";
import AppSandal from "./components/home/Sandal";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <AppHero /> 
      <AppAdidas />
      <AppNike />
      <AppPuma />
      <AppSandal />
    </>
  );
}

export default App;
