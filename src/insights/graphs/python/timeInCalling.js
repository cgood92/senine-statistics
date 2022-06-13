export default function timeInCalling({ unit }) {
  return `
  def timeInCalling(df, unit):
    timeInCallings = flattenList(df[df['Callings with Date Sustained'].notnull()]['Callings with Date Sustained'].apply(getDateInCalling).tolist())
      
    fig, ax = plt.subplots(figsize = (18,12), facecolor='white')
    plt.hist(timeInCallings, bins=24)
    
    labelMedian(np.median(timeInCallings))
    ax.set_title(makeLabel("Time in calling", unit))
    ax.set_xlabel("Months in calling")
    removeLeft(ax)
    
    return figureToString(fig)
  
  timeInCalling(getFilteredData(${JSON.stringify(unit)}), ${JSON.stringify(
    unit
  )})
  `;
}
