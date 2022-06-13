export default function numberOfCallings({ unit }) {
  return `
  def numberOfCallings(df, unit):
    data = df[df["Age"] >= 18].groupby('Number of Callings').size()

    plt.figure(facecolor='white')
    pie = data.plot.pie(figsize=(12,12), autopct=lambda p : '{:.0f}%  ({:,.0f})'.format(p,p * sum(data)/100), ylabel='')
    plt.title(makeLabel('Members (18+) with callings', unit))
      
    return figureToString(pie.get_figure())
  
  numberOfCallings(getFilteredData(${JSON.stringify(unit)}), ${JSON.stringify(
    unit
  )})
  `;
}
