import React from "react";
import { Tabs } from "antd";

import FactsSheet from "./factsSheet";

const { TabPane } = Tabs;

export default function TabsComponent({ units }) {
  return (
    <Tabs defaultActiveKey={units[0]}>
      {units.map((unit) => (
        <TabPane tab={unit} key={unit}>
          <FactsSheet unit={unit} />
        </TabPane>
      ))}
    </Tabs>
  );
}
