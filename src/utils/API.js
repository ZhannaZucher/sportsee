import mockData from "../data/data"

const mock = true

export default function fetchData(id, typeOfData) {
  let data = {}
  if (mock === false) {
    console.log("a faire")
  } else {
    switch (typeOfData) {
      case "userData":
        data = mockData.USER_MAIN_DATA.find((user) => user.id === parseInt(id))
        break
      case "activity":
        data = mockData.USER_ACTIVITY.find(
          (user) => user.userId === parseInt(id)
        )
        break
      case "average-sessions":
        data = mockData.USER_AVERAGE_SESSIONS.find(
          (user) => user.userId === parseInt(id)
        )
        break
      case "performance":
        data = mockData.USER_PERFORMANCE.find(
          (user) => user.userId === parseInt(id)
        )
        break
      default:
        console.log("erreur dans le mock")
    }
    return data
  }
}
