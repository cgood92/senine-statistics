function loadScript(src) {
  return new Promise((resolve) => {
    var script = document.createElement("script");
    script.onload = function () {
      resolve();
    };
    script.src = src;

    document.head.appendChild(script);
  });
}

export default async function fetchPyodide() {
  // TODO: figure out better long-term solution, but this resolves a "require not defined" error
  delete window.process;
  await loadScript("https://cdn.jsdelivr.net/pyodide/v0.20.0/full/pyodide.js");
  const pyodide = await loadPyodide({ fullStdLib: false });
  await pyodide.loadPackage(["pandas", "matplotlib"]);

  return pyodide;
}
