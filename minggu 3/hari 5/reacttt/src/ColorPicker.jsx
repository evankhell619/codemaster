import { useEffect, useState } from "react"
import randomColor from "randomcolor"

function ColorPicker () {
  const [color1, setColor1] = useState(randomColor())
  const [color2, setColor2] = useState(randomColor())


  function handleColorChange(event) {
    setColor(event.target.value)
  }

  useEffect(() => {
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`
    document.body.style.background = gradient
  },[color1,color2])

  return (

    <div className="whatGradient">
      <h1>Whats Gradient you Wants</h1>
      <div className="colorPick">
        <input type="color" name="color1" value={color1} onChange={handleColorChange} />
        <input type="color" name="color2" value={color2} onChange={handleColorChange}  />
      </div>
    </div>
    
  
    // !<div className="color-picker-container">
    // !  <h1>What Color you want?</h1>
    // !  <div className="color-display" style={{backgroundColor: color}}>
    // !  </div>
    // !  <label> Your Color </label>
    // !  <input type="color" value={color} onChange={handleColorChange} />
    // !</div>
  )
}
export default ColorPicker