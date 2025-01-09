import React from 'react'
import myLets from './SomeVarandFunc'
import BtnPencil from './BtnPencil'

export default class Canvas extends React.Component {
    constructor() {
      super()
      this.state ={
        BtnPencilIsClicked : true,
        BtnLineIsClicked : true,
        BtnRectIsClicked : true,
        X_0 : 0,
        Y_0 : 0,
        X_e : 0,
        Y_e : 0,
      }
      this.drawRect = this.drawRect.bind(this) 
    }

    drawRect() {
      let msg
      msg=document.getElementById("message")
      let context=document.getElementById("canvas").getContext("2d")
      this.setState({ X_0: event.pageX, Y_0: event.pageY });      
      context.fillRect( this.state.X_0, this.state.Y_0 , 3, 3);
      msg.innerHTML=this.state.X_0 + " " + this.state.Y_0
    }
    handleMouseMove() {
      
    }

    render() {
      let func
      if (this.state.BtnPencilIsClicked){
        func = this.drawRect
      }
    
      return (
        <div>
          <canvas id="canvas"
              onMouseDown={func}
              onMouseUp={this.handleMouseUp}
              onMouseMove={this.handleMouseMove}>     
          </canvas>
        </div>
      )
    }
  }