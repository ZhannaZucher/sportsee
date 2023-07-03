import { useState, useEffect } from "react"
import mockData from "../../data/data"

//manages the data sourcing : false = we get data from API, true = data from mockData
const mock = true

export default function useFetch(userId, typeOfData) {
  const [data, setData] = useState({})
  const [error, setError] = useState(false)

  useEffect(() => {
    async function getData() {
      if (!mock) {
        switch (typeOfData) {
          case "userData":
            try {
              const response = await fetch(
                `http://localhost:3000/user/${userId}`
              )
              const res = await response.json()
              setData(res.data)
            } catch (error) {
              console.log(error)
              setError(error)
            }
            break
          case "activity":
            try {
              const response = await fetch(
                `http://localhost:3000/user/${userId}/activity`
              )
              const res = await response.json()
              setData(res.data)
            } catch (error) {
              console.log(error)
              setError(error)
            }
            break
          case "average-sessions":
            try {
              const response = await fetch(
                `http://localhost:3000/user/${userId}/average-sessions`
              )
              const res = await response.json()
              setData(res.data)
            } catch (error) {
              console.log(error)
              setError(error)
            }
            break
          case "performance":
            try {
              const response = await fetch(
                `http://localhost:3000/user/${userId}/performance`
              )
              const res = await response.json()
              setData(res.data)
            } catch (error) {
              console.log(error)
              setError(error)
            }
            break
          default:
            setData({})
        }
      } else {
        let mockedData = {}
        switch (typeOfData) {
          case "userData":
            mockedData = mockData.USER_MAIN_DATA.find(
              (user) => user.id === userId
            )
            setData(mockedData)
            break
          case "activity":
            mockedData = mockData.USER_ACTIVITY.find(
              (user) => user.userId === userId
            )
            setData(mockedData)
            break
          case "average-sessions":
            mockedData = mockData.USER_AVERAGE_SESSIONS.find(
              (user) => user.userId === userId
            )
            setData(mockedData)
            break
          case "performance":
            mockedData = mockData.USER_PERFORMANCE.find(
              (user) => user.userId === userId
            )
            setData(mockedData)
            break
          default:
            setData({})
        }
      }
    }
    getData()
  }, [])
  return { data, error }
}
