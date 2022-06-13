import React, { useState } from "react";
import { Col, Divider, Row, Select } from "antd";

import {
  AdultGender,
  Ages18plus,
  AllAges,
  MarriageStatus,
  MoveInDate,
  NumberInHousehold,
  NumberOfCallings,
  RmStatus,
  TimeInCalling
} from "./graphs";

const { Option } = Select;

export default function CompareSheet({ units }) {
  const [selectedUnits, setSelectedUnits] = useState(units);

  return (
    <section>
      <header>
        Units to compare:
        <Select
          mode="multiple"
          allowClear
          style={{ width: "100%" }}
          defaultValue={units}
          onChange={setSelectedUnits}
        >
          {units.map((unit) => (
            <Option key={unit}>{unit}</Option>
          ))}
        </Select>
      </header>
      <div>
        {renderGraphForUnits(selectedUnits, AllAges)}
        {renderGraphForUnits(selectedUnits, Ages18plus)}
        {renderGraphForUnits(selectedUnits, MoveInDate)}
        {renderGraphForUnits(selectedUnits, AdultGender)}
        {renderGraphForUnits(selectedUnits, MarriageStatus)}
        {renderGraphForUnits(selectedUnits, NumberInHousehold)}
        {renderGraphForUnits(selectedUnits, RmStatus)}
        {renderGraphForUnits(selectedUnits, TimeInCalling)}
        {renderGraphForUnits(selectedUnits, NumberOfCallings)}
      </div>
    </section>
  );
}

function renderGraphForUnits(units, Component) {
  return (
    <>
      <Divider />
      <Row>
        {units.map((unit) => (
          <Col span={12} key={unit}>
            <Component unit={unit} />
          </Col>
        ))}
      </Row>
    </>
  );
}
