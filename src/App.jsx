import { Routes, Route, BrowserRouter } from "react-router-dom"
import Profile from "./pages/Profile/Profile"
import Header from "./components/Header/Header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
