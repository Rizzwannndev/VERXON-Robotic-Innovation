import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './Pages/About';
import TransitionWrapper from "./components/TransitionWrapper"
import SmoothScroll from "./components/SmoothScroll"
import Cursor from "./components/Cursor"


const App = () => {


  return (
    <>
    <Cursor />
    <SmoothScroll>
      <div id="smooth-wrapper" className="relative">
        <div id="smooth-content" className="relative">
          
          <TransitionWrapper>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </TransitionWrapper>

        </div>
      </div>
    </SmoothScroll>
  </>
  )
}

export default App

