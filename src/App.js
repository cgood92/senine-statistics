import React from "react";
import "./styles.css";
import "antd/dist/antd.css";

import { Layout } from "antd";

import Body from "./body";
import Header from "./header";

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={{ padding: "8px 16px 8px 16px" }}>
        <Body />
      </Layout.Content>
      <Layout.Footer></Layout.Footer>
    </Layout>
  );
}
