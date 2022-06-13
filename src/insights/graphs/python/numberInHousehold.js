export default function numberInHousehold({ unit }) {
  return `
  def numberInHousehold(df, unit):
    plt.figure(facecolor='white')
    boxplot = df.groupby('Address - Street 1').size().plot.box(figsize = (18,12), title = makeLabel("Number of records in household", unit), vert=False)

    return figureToString(boxplot.get_figure())
  
  numberInHousehold(getFilteredData(${JSON.stringify(unit)}), ${JSON.stringify(
    unit
  )})
  `;
}
