import { useEffect, useRef, useState } from 'react'
import './App.css'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Desc from './components/Desc';
import AboutUs from './components/AboutUs';


import Camera from './components/Camera';


function App() {
    const appRef = useRef(null);
    const toRef = useRef(null);
    const SPEED = 2000
    var [date,setDate] = useState(new Date());
    // This ref will store the start time only once when the component is mounted
    const startTime = useRef(Date.now()).current; // Captures the time when component first renders
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(Date.now()), 17 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    useEffect( () => {
        
        const time = date - startTime
        console.log(date)
        console.log(startTime)
        console.log(time)
        const x = (Math.cos((time)/SPEED)+ 1)/ 2 * 100; // Horizontal position
        const y = (Math.sin((time)/SPEED)+ 1)/ 2 * 100; // Vertical position
        console.log(x)
        console.log(y)


        if (appRef.current) {
            appRef.current.style.setProperty("--mouse-x", x.toString() + "%");
            appRef.current.style.setProperty("--mouse-y", y.toString() + "%");
        }
        }, [date])


    return (
        <>
            {/* Background do not touch */}
            <div className="bg" id="bg" ref={appRef} data-scroll-container />

            <Nav />
            <Hero />
            <Desc />
            <Camera />
            <AboutUs />
        </>

    )
}

export default App
