import React from "react";

import adultGender from "./python/adultGender";
import ages18plus from "./python/ages18plus";
import allAges from "./python/allAges";
import marriageStatus from "./python/marriageStatus";
import moveInDate from "./python/moveInDate";
import numberInHousehold from "./python/numberInHousehold";
import numberOfCallings from "./python/numberOfCallings";
import rmStatus from "./python/rmStatus";
import timeInCalling from "./python/timeInCalling";

import Graph from "./graph";

export const AdultGender = ({ unit }) => (
  <Graph python={adultGender({ unit })} />
);
export const Ages18plus = ({ unit }) => <Graph python={ages18plus({ unit })} />;
export const AllAges = ({ unit }) => <Graph python={allAges({ unit })} />;
export const MarriageStatus = ({ unit }) => (
  <Graph python={marriageStatus({ unit })} />
);
export const MoveInDate = ({ unit }) => <Graph python={moveInDate({ unit })} />;
export const NumberInHousehold = ({ unit }) => (
  <Graph python={numberInHousehold({ unit })} />
);
export const NumberOfCallings = ({ unit }) => (
  <Graph python={numberOfCallings({ unit })} />
);
export const RmStatus = ({ unit }) => <Graph python={rmStatus({ unit })} />;
export const TimeInCalling = ({ unit }) => (
  <Graph python={timeInCalling({ unit })} />
);
