import { useEffect, useRef } from 'react'
import './App.css'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Desc from './components/Desc';
import AboutUs from './components/AboutUs';


import Camera from './components/Camera';


function App() {
    const appRef = useRef(null);
    const toRef = useRef(null);

    useEffect( () => {
        const moveGradient = (event) => {
            const winWidth = window.innerWidth;
            const winHeight = window.innerHeight;

            const mouseX = Math.round((event.pageX / winWidth) * 100)
            const mouseY = Math.round((event.pageY / winHeight) * 100)

            if (appRef) {
                appRef.current.style.setProperty("--mouse-x", mouseX.toString() + "%")
                appRef.current.style.setProperty("--mouse-y", mouseY.toString() + "%")
            }   
        }

        document.addEventListener("mousemove", moveGradient)
            return function cleanup() {
                document.removeEventListener("mousemove", moveGradient)
            }
    }, [appRef])
  
    return (
        <>
            {/* Background do not touch */}
            <div className="bg" id="bg" ref={appRef} data-scroll-container/> 

            <Nav/>
            <Hero/>
            <Desc/>

            <Camera/>
            <AboutUs/>
        </>
    
  )
}

export default App
