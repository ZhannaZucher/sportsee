import mockData from "../data/data"

const mock = true

//getting requested data from mockData
function getMockData(userId, typeOfData) {
  let mockedData = {}
  switch (typeOfData) {
    case "userData":
      mockedData = mockData.USER_MAIN_DATA.find((user) => user.id === userId)
      break
    case "activity":
      mockedData = mockData.USER_ACTIVITY.find((user) => user.userId === userId)
      break
    case "average-sessions":
      mockedData = mockData.USER_AVERAGE_SESSIONS.find(
        (user) => user.userId === userId
      )
      break
    case "performance":
      mockedData = mockData.USER_PERFORMANCE.find(
        (user) => user.userId === userId
      )
      break
    default:
      console.log("erreur dans le mock")
  }
  return mockedData
}

//getting requested data from API
async function getApiData(userId, typeOfData) {
  let apiData = {}
  switch (typeOfData) {
    case "userData":
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`)
        const res = await response.json()
        apiData = res.data
      } catch (err) {
        console.log(err)
      }
      break
    case "activity":
      try {
        const response = await fetch(
          `http://localhost:3000/user/${userId}/activity`
        )
        const res = await response.json()
        apiData = res.data
      } catch (err) {
        console.log(err)
      }
      break
    case "average-sessions":
      try {
        const response = await fetch(
          `http://localhost:3000/user/${userId}/average-sessions`
        )
        const res = await response.json()
        apiData = res.data
      } catch (err) {
        console.log(err)
      }
      break
    case "performance":
      try {
        const response = await fetch(
          `http://localhost:3000/user/${userId}/performance`
        )
        const res = await response.json()
        apiData = res.data
      } catch (err) {
        console.log(err)
      }
      break
    default:
      console.log("erreur dans api fetch")
  }
  console.log(apiData)
  return apiData
}

//function that manages getting requested data from API or mockAPI
export default function getData(userId, typeOfData) {
  let data = {}
  if (!mock) {
    data = getApiData(userId, typeOfData)
    console.log(data)
  } else {
    //in case if the "mock" is "true" we get necessary data from the mockAPI
    data = getMockData(userId, typeOfData)
  }
  return data
}
