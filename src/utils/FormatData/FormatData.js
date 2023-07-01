export default class FormatData {
  //method formatting the user's today score
  static formatScore(props) {
    const score = props?.todayScore || props?.score
    const formattedScore = score * 100
    return formattedScore
  }

  //method formatting value to english notation
  static formatValue(value) {
    return new Intl.NumberFormat("en-IN").format(value)
  }
}
