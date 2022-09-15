import React from 'react'
import MovingText from 'react-moving-text'


const AnimatedText = () => {
  return (
    <MovingText
    style={{color:"#50786D",fontWeight:"bold",letterSpacing:"3px",fontSize:"1.4rem",paddingLeft:"5px", marginBottom:"10px"}}
    className="movingtext"
      type="jelly"
      duration="5000ms"
      delay="0s"
      direction="normal"
      timing="ease-in-out"
      iteration="infinite"
      fillMode="none">
      HOŞGELDİNİZ {" "}:)
    </MovingText>
  )
}

export default AnimatedText;
