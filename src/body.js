import React, { useCallback, useState } from "react";
import PyodideContext from "./pyodideContext";
import basePython from "./python/base";
import globalUtilities from "./python/globalUtilities";
import loadPyodide from "./loadPyodide";
import Insights from "./insights";
import Landing from "./landing";

let pyodideLoadable = null;

setTimeout(() => {
  pyodideLoadable = loadPyodide();
}, 1000);

export default function Body() {
  const [isReady, setReady] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [pyodide, setPyodide] = useState();

  const handleUpload = useCallback(async (event) => {
    setLoading(true);

    const file = event.target.files[0];

    const pyodide = await pyodideLoadable;
    await pyodide.runPythonAsync(globalUtilities());
    await pyodide.runPythonAsync(basePython({ file }));

    setReady(true);
    setLoading(false);
    setPyodide(pyodide);
  }, []);

  if (isLoading) {
    return <div>Loading the goodness...</div>;
  }

  if (isReady) {
    return (
      <PyodideContext.Provider value={pyodide}>
        <Insights />
      </PyodideContext.Provider>
    );
  }

  return (
    <div>
      <Landing onUpload={handleUpload} />
    </div>
  );
}
