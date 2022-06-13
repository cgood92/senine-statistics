export default function globalUtilities() {
  return `
  import re
  from datetime import datetime
  from datetime import date

  def figureToString(fig):
    buf = io.BytesIO()
    fig.savefig(buf, format='png')
    buf.seek(0)
    
    return 'data:image/png;base64,' + base64.b64encode(buf.read()).decode('UTF-8')

  
  def labelMedian(median, x = 1.05):
    plt.axvline(median, color='k', linestyle='dashed', linewidth=1)
    min_ylim, max_ylim = plt.ylim()
    plt.text(median*x, max_ylim*0.5, 'Median: {:.0f}'.format(median))
    
  def removeLeft(ax):
    # Remove ticks and spines
    ax.tick_params(left = False, bottom = False)
    # ax.set_yticks([])
    ax.set_ylabel("Members")
    for ax, spine in ax.spines.items():
        spine.set_visible(False)

  def makeLabel(label, unit):
    return unit + " - " + label

  def getFilteredData(unit):
    return df[df['Unit'] == unit]

  def getDateInCalling(rawValue):
    dateStrings = re.findall("\\([^\\)]+\\)", rawValue)
    return list(map(lambda dateString: diffMonth(date.today(), datetime.strptime(dateString[1:-1], '%d %b %Y')), dateStrings))
    
  def diffMonth(date1, date2):
      return (date1.year - date2.year) * 12 + date1.month - date2.month

  def flattenList(regular_list):
      return [item for sublist in regular_list for item in sublist]
  `;
}
