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

  //method transforming dates to numbers
  static formatDays(data) {
    const formattedDays = data?.map((element) => element.day.slice(-1))
    return formattedDays
  }

  //method formatting kind of performance data
  static translateToFrench(perfData) {
    perfData.kind = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    }

    //adding text correspondances to performance data
    const translatedData = perfData?.data?.map((element) => ({
      value: element.value,
      kind: perfData.kind[element.kind],
    }))
    //reordering the performance data array
    function orderData(unorderedData) {
      const orderedData = []
      for (let i = unorderedData?.length - 1; i > -1; i--) {
        orderedData.push(unorderedData[i])
      }
      return orderedData
    }
    return orderData(translatedData)
  }
}
