export default function base({ file }) {
  return `
    import pandas as pd
    import matplotlib.pyplot as plt
    import numpy as np
    import pyodide
    import io, base64

    def prepareData():
      df['Number of Callings'] = list(map(lambda string: "0 calling(s)" if pd.isna(string) else str(len(getDateInCalling(string))) + " calling(s)", df['Callings with Date Sustained'].tolist()))

    df = pd.read_csv(pyodide.open_url("${URL.createObjectURL(file)}"))

    prepareData()
  `;
}
