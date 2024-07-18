import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import Service from "./pages/Service"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"
import Error from "./pages/Error";
import ServiceDetail from "./pages/ServiceDetail";
import GoRest from "./pages/GoRest";
import GoRestDetail from "./pages/GoRestDetail";

import MainLayout from "./Layout/MainLayout";

function App() {

  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
         <Route index element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/services" element={<Service/>}/>
         <Route path="/services/:id" element={<ServiceDetail/>}/>
         <Route path="/gorest" element={<GoRest/>}/>
         <Route path="/gorest/:id" element={<GoRestDetail/>}/>
         <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
