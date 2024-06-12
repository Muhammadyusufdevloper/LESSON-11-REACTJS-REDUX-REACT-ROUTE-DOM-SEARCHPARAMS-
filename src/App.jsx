import { Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Footer from "./components/footer"
import SingleRout from "./pages/single-rout"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single-rout" element={<SingleRout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
