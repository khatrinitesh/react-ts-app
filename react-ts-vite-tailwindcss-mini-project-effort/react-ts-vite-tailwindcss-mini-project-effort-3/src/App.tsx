// LIBRARY
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
// LAYOUT
import MainLayout from "./layout/MainLayout"

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <Router>
      {/* S > MAINLAYOUT AND  COMPONENT WITH HEADER/FOOTER */}
      <Routes>
        <Route path="/" element={<MainLayout/>}>
         <Route index element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/service" element={<Service/>}/>
         <Route path="/contact" element={<Contact/>}/>
        </Route>
        {/* E > MAINLAYOUT AND  COMPONENT WITH HEADER/FOOTER */}
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
