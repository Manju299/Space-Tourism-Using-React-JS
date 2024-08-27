import './App.css'
import Home from './components/Home'
import Destination from './components/Destination'
import Crew from './components/Crew'
import Technoogy from './components/Technology'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './components/Nav'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        {/* <Route> */}
          <Route path="/" element={  <Home/>}/>
          <Route path="/Destination" element={  <Destination/>}/>
          <Route path="/Crew" element={  <Crew/>}/>
          <Route path="/Technology" element={  <Technoogy/>}/>
      </Routes>
    </BrowserRouter>
  
      
 
    </>
  )
}

export default App
