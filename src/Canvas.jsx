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
     // this.getCoord = this.getCoord.bind(this) 

      this.drawRect = this.drawRect.bind(this) 
    }
    // getCoord() {
    //   this.setState(prevState => { 
    //     return { 
    //       X_0: prevState.X_0 + event.pageX ,
    //       Y_0: prevState.Y_0 + event.pageY         } 
    //   })
    // }

    drawRect() {
      let msgX
      msgX=document.getElementById("messageX")
      let msgY
      msgY=document.getElementById("messageY")
      let msg
      msg=document.getElementById("message")
      let context=document.getElementById("canvas").getContext("2d")
      msgX.innerHTML=event.pageX
      msgY.innerHTML=event.pageY

      this.setState(() => { 
        return { 
          X_0: msgX.innerHTML - document.getElementById("canvas").offsetLeft,
          Y_0: msgY.innerHTML - document.getElementById("canvas").offsetTop 
        } 
      })
      context.fillRect( this.state.X_0, this.state.Y_0 , 3, 3);
      msg.innerHTML=this.state.X_0 + " "+ this.state.Y_0


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
          <canvas id="canvas" width={1000} height={500}
              onMouseDown={func}
              onMouseUp={this.handleMouseUp}
              //onMouseMove={this.handleMouseMove}
              >     
          </canvas>
        </div>
      )
    }
  }