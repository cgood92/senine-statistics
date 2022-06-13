export default function adultGender({ unit }) {
  return `
  def adultGender(df, unit):
    data = df[df["Age"] >= 18].replace({ "M": "Male", "F": "Female" }).groupby('Gender').size()
    plt.figure(facecolor='white')
    pie = data.plot.pie(figsize=(12,12), autopct=lambda p : '{:.0f}%  ({:,.0f})'.format(p,p * sum(data)/100), ylabel='', colors = ['pink', 'lightblue'])
    plt.title(makeLabel('Members (18+) gender', unit))
      
    return figureToString(pie.get_figure())
  
  adultGender(getFilteredData(${JSON.stringify(unit)}), ${JSON.stringify(unit)})
  `;
}
