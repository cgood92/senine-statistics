import React, { useCallback, useContext, useMemo, useState } from "react";
import { Switch } from "antd";

import PyodideContext from "../pyodideContext";
import Tabs from "./tabs";
import CompareSheet from "./compareSheet";

export default function Insights() {
  const pyodide = useContext(PyodideContext);
  const [showCompareSelected, setShowCompareSelected] = useState(false);

  const units = useMemo(() => pyodide.runPython(getUnits()).toJs(), [pyodide]);
  const hasMultipleUnits = units.length > 1;

  const toggleCompare = useCallback(
    () => setShowCompareSelected((prev) => !prev),
    []
  );

  return (
    <main>
      {hasMultipleUnits && (
        <Switch
          checkedChildren="Comparing"
          unCheckedChildren="Not comparing"
          onChange={toggleCompare}
        />
      )}
      {showCompareSelected ? (
        <CompareSheet units={units} />
      ) : (
        <Tabs units={units} />
      )}
    </main>
  );
}

function getUnits() {
  return `
  df.Unit.unique().tolist()
  `;
}
