import "regenerator-runtime/runtime";
import React from "react";
import "./global.css";

import getConfig from "./config";
import Navbar from "./components/navbar/navbar";
import SiderBar from "./components/sidebar/sidebar";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "100px" }}>
        <SiderBar />
      </div>
    </>
  );
}
