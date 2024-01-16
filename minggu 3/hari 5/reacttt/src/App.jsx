import ColorPicker from "./ColorPicker"
import NewReduxCounter from "./ReduxCount"


function App() {
  

  return (
    <>
    
    <NewReduxCounter initialValue={10}/>
    <counterSlicer/>
    {/* <ColorPicker/> */}
    </>
  )
}

export default App
