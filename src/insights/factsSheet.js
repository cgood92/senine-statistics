import React from "react";
import { Col, Divider, Row } from "antd";

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

export default function FactsSheet({ unit }) {
  return (
    <div>
      <Divider orientation="left" plain>
        General facts
      </Divider>
      <Row>
        <Col span={12}>
          <AllAges unit={unit} />
        </Col>
        <Col span={12}>
          <Ages18plus unit={unit} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <MoveInDate unit={unit} />
        </Col>
        <Col span={12}>
          <AdultGender unit={unit} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <MarriageStatus unit={unit} />
        </Col>
        <Col span={12}>
          <NumberInHousehold unit={unit} />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <RmStatus unit={unit} />
        </Col>
      </Row>
      <Divider orientation="left" plain>
        Callings
      </Divider>
      <Row>
        <Col span={12}>
          <TimeInCalling unit={unit} />
        </Col>
        <Col span={12}>
          <NumberOfCallings unit={unit} />
        </Col>
      </Row>
    </div>
  );
}
