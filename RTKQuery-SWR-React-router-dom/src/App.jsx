import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Container from "./components/pages/Container"
import Row from "./components/pages/Row"
import RTKQuery from "./components/pages/RTKQuery"
import SWR from "./components/pages/SWR"
import SWRCategory from "./components/pages/SWRKategory"
import Ross from "./components/Ross"
import RTKQueryCategory from "./components/pages/RTKQueryCategory"


function App() {


  return (
    <>
      <Navbar />
      <Container props="mt-4 mb-4">
        <Row props="mt-1 mb-1 text-info">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/RTKQ-category" element={<RTKQuery />} />
            <Route path="/RTKQ-category/:categoryName" element={<RTKQueryCategory />} />
            <Route path="/SWR" element={<SWR />} />
            <Route path="/SWRCategory/:categoryName" element={<SWRCategory />} />
            <Route path="/SWRCategory/Ross" element={<Ross />} />
         </Routes>
        </Row>
      </Container>
    </>
  )
}

export default App
