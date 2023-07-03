export default class FormatData {
  //method formatting the user's today score
  static formatScore(props) {
    const score = props?.todayScore || props?.score
    const data = [
      {
        name: "Score",
        uv: score * 100,
        fill: "#FF0000",
      },
    ]
    return data
  }

  //method formatting value to english notation
  static formatValue(value) {
    return new Intl.NumberFormat("en-IN").format(value)
  }
}
