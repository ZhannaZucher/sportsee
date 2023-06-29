import mockData from "../data/data"

const mock = true

function getMockData(id, typeOfData) {
  let mockedData = {}
  switch (typeOfData) {
    case "userData":
      mockedData = mockData.USER_MAIN_DATA.find(
        (user) => user.id === parseInt(id)
      )
      break
    case "activity":
      mockedData = mockData.USER_ACTIVITY.find(
        (user) => user.userId === parseInt(id)
      )
      break
    case "average-sessions":
      mockedData = mockData.USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === parseInt(id)
      )
      break
    case "performance":
      mockedData = mockData.USER_PERFORMANCE.find(
        (user) => user.userId === parseInt(id)
      )
      break
    default:
      console.log("erreur dans le mock")
  }
  return mockedData
}

export default function getData(id, typeOfData) {
  let data = {}
  if (!mock) {
    //const userId = parseInt(id)
    console.log("a faire")
  } else {
    //in case if the "mock" is "true" we get necessary data from the mockAPI
    data = getMockData(id, typeOfData)
    return data
  }
}
