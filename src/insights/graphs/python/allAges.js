export default function allAges({ unit }) {
  return `
  def allAges(df, unit):
      age = df['Age']
      
      fig, ax = plt.subplots(figsize = (18, 12), facecolor='white')
      age.plot(kind = "hist", bins = 20)
      
      labelMedian(age.median())
      ax.set_title(makeLabel("All ages", unit))
      ax.set_xlabel("Age")
      
      return figureToString(fig)
  
  allAges(getFilteredData(${JSON.stringify(unit)}), ${JSON.stringify(unit)})
  `;
}
