import './App.css'
import BtnLine from './BTNLine'
import BtnRect from './BtnRect'
import BtnPencil from './BtnPencil'
import Canvas from './Canvas'

function App() {
  return (
    <>
      <div className='instuments'>
      <input type="color" id="color"></input>
        <BtnLine />
        <BtnRect />
        <BtnPencil />
      </div>
        <div id="message">
          Message
        </div>
      <Canvas />
    </>
  )
}

export default App
