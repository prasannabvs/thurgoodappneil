import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Lawyer", "Judge"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/thurgoodmarshall.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Introduction to,</h1>
          <h2>Thoroughgood(Thurgood) Marshall</h2>
          <h1>By: Neil Kumar</h1>
          <h3><span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
