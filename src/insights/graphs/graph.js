import React, { useContext, useEffect, useState } from "react";
import { Image, Result, Spin } from "antd";
import PyodideContext from "../../pyodideContext";

export default function Graph({ python }) {
  const [isError, setError] = useState(false);
  const [src, setSrc] = useState();
  const pyodide = useContext(PyodideContext);

  useEffect(() => {
    pyodide
      .runPythonAsync(python)
      .then(setSrc)
      .catch((error) => {
        setError(true);
        console.error(error);
      });
  }, [pyodide, python]);

  if (isError) {
    return (
      <Result
        status="error"
        title="Chart failed to load"
        subTitle="Sorry for the inconvenience"
      />
    );
  }

  if (src) {
    return (
      <Image
        src={src}
        width="100%"
        preview={{ mask: null }}
        style={{ padding: 8 }}
      />
    );
  }

  return <Loading />;
}

function Loading() {
  return (
    <div
      style={{
        height: 400,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Spin size="large" />
    </div>
  );
}
