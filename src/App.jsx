
import './App.css'
import Hero from './Hero';
import Header from './Header'
import About from './About';
import PrayerTimings from './Prayer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Events from './Events';
import Contact from './Contact';
function App() {
  

  return (
    <> 
      <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path='/prayer' element={<PrayerTimings/>}/>
        <Route path='/events' element={<Events/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
