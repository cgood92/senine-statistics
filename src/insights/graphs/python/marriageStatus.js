export default function marriageStatus({ unit }) {
  return `
  def marriageStatus(df, unit):
    data = df[df["Age"] >= 18].groupby('Marriage Status').size()
    plt.figure(facecolor='white')
    pie = data.plot.pie(figsize=(12,12), autopct=lambda p : '{:.0f}%  ({:,.0f})'.format(p,p * sum(data)/100), ylabel='')
    plt.title(makeLabel('Members (18+) marriage status', unit))
      
    return figureToString(pie.get_figure())
  
  marriageStatus(getFilteredData(${JSON.stringify(unit)}), ${JSON.stringify(
    unit
  )})
  `;
}
