export default function rmStatus({ unit }) {
  return `
  def rmStatus(df, unit):
    data = df[df["Age"] >= 20].groupby('Is Returned Missionary').size()
    plt.figure(facecolor='white')
    pie = data.plot.pie(figsize=(12,12), autopct=lambda p : '{:.0f}%  ({:,.0f})'.format(p,p * sum(data)/100), ylabel='')
    plt.title(makeLabel('Members (20+) that are returned missionaries', unit))
      
    return figureToString(pie.get_figure())
  
  rmStatus(getFilteredData(${JSON.stringify(unit)}), ${JSON.stringify(unit)})
  `;
}
