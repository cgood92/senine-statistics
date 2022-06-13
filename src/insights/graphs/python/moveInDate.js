export default function moveInDate({ unit }) {
  return `
  def moveInDate(df, unit):
    moveInDates = df.drop_duplicates(['Address - Street 1'])['Move In Date'].apply(lambda dateString: diffMonth(date.today(), datetime.strptime(dateString, '%d-%b-%y'))).tolist()
      
    fig, ax = plt.subplots(figsize = (18,12), facecolor='white')
    plt.hist(moveInDates, bins=36)

    removeLeft(ax)
    labelMedian(np.median(moveInDates))
    ax.set_title(makeLabel("Time in ward", unit))
    ax.set_xlabel("Months in ward")
    ax.set_ylabel("Households")
      
    return figureToString(fig)
  
  moveInDate(getFilteredData(${JSON.stringify(unit)}), ${JSON.stringify(unit)})
  `;
}
