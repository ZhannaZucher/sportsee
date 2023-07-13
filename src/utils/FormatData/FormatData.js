import energy from "../../assets/calories-icon.png"
import chicken from "../../assets/protein-icon.png"
import apple from "../../assets/carbs-icon.png"
import burger from "../../assets/fat-icon.png"

export default class FormatData {
  constructor(data) {
    this.data = data
  }

  //method formatting user's main data
  formatUserData() {
    const formatedData = {
      id: this.data?.id,
      userInfos: {
        firstName: this.data?.userInfos?.firstName,
      },
      score: [
        {
          name: "Score",
          uv: this.data?.todayScore * 100 || this.data?.score * 100,
          fill: "#FF0000",
        },
      ],
      keyData: [
        {
          count: new Intl.NumberFormat("en-IN").format(
            this.data?.keyData?.calorieCount
          ),
          unit: "kCal",
          name: "Calories",
          icon: energy,
        },
        {
          count: new Intl.NumberFormat("en-IN").format(
            this.data?.keyData?.proteinCount
          ),
          unit: "g",
          name: "Proteines",
          icon: chicken,
        },
        {
          count: new Intl.NumberFormat("en-IN").format(
            this.data?.keyData?.carbohydrateCount
          ),
          unit: "g",
          name: "Glucides",
          icon: apple,
        },
        {
          count: new Intl.NumberFormat("en-IN").format(
            this.data?.keyData?.lipidCount
          ),
          unit: "g",
          name: "Lipides",
          icon: burger,
        },
      ],
    }
    return formatedData
  }

  //method formatting activity data
  formatActivityData() {
    // transforming dates in weekdays' numbers
    const formatedData = this.data?.sessions?.map((session) => ({
      day: session?.day.slice(-1),
      kilogram: session.kilogram,
      calories: session.calories,
    }))
    return formatedData
  }

  //method formatting sessionsData
  formatSessionsData() {
    const weekDays = { 1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D" }
    //transforming days in corresponding weekdays' initials
    return this.data?.sessions?.map((session) => ({
      day: weekDays[session.day],
      sessionLength: session.sessionLength,
    }))
  }

  //method formatting performance data
  formatPerformanceData() {
    //French translation of kind of performance
    this.data.kind = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    }
    //adding text correspondances to performance data
    const translatedData = this.data?.data?.map((element) => ({
      value: element.value,
      kind: this.data.kind[element.kind],
    }))
    //reordering the performance data array
    return translatedData?.reverse()
  }
}
