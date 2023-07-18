import { Routes, Route, BrowserRouter } from "react-router-dom"
import Profile from "./pages/Profile/Profile"
import Header from "./components/Header/Header"
import VerticalNav from "./components/VerticalNav/VerticalNav"
import Error from "./pages/Error/Error"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <VerticalNav />
      <Routes>
        <Route path="/:id" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
