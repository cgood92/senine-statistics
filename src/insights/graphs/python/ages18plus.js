export default function ages18plus({ unit }) {
  return `
  def ages18plus(df, unit):
    age = df['Age'][df["Age"] >= 18]
    
    fig, ax = plt.subplots(figsize = (18,12), facecolor='white')
    age.plot(kind = "hist", bins = 20)
    
    labelMedian(age.median(), 0.6)
    ax.set_title(makeLabel("Ages 18+", unit))
    ax.set_xlabel("Age")
    removeLeft(ax)
    
    return figureToString(fig)
  
  ages18plus(getFilteredData(${JSON.stringify(unit)}), ${JSON.stringify(unit)})
  `;
}
