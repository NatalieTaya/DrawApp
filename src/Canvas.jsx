import React from 'react'
import myLets from './SomeVarandFunc'

let canvas = document.getElementById("canvas")
let context;

export default class Canvas extends React.Component {
    
    drawRect() {
      // context.fillStyle=document.getElementById("color").value
      context.fillRect(50, 50, 3, 3);
    }
    handleMouseDown() {
      let msg
      msg=document.getElementById("message")
      context=document.getElementById("canvas").getContext("2d")
      //if(myLets.penBtnIsclicked==true){
      //this.drawRect
      msg.innerHTML="Context!"
     // }
    }
    handleMouseUp() {
    }
    handleMouseMove() {
    }



   drawLine1() {
     // context.strokeStyle=document.getElementById("color").value
     // context.beginPath()
     // context.moveTo(event.clientX-canvas.offsetLeft, event.clientY-canvas.offsetTop)
  }
   drawLine2() {
     // context.lineTo(event.clientX-canvas.offsetLeft, event.clientY-canvas.offsetTop)
    //  context.stroke()
  }
   startdrawing() {
    //isdrawing = true;
   // context.beginPath()
  }
   isDrawing() {
    if (!isdrawing) {
       return;
    } else {
      //context.strokeStyle=document.getElementById("color").value
     // context.lineTo(event.clientX-canvas.offsetLeft, event.clientY-canvas.offsetTop)
     // context.stroke()
    }
  }
   notdrawing() {
    //isdrawing = false;
  }

    render() {
      return (
        <div>
          <canvas id="canvas"
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp}
              onMouseMove={this.handleMouseMove}>  
                      
          </canvas>
        </div>
      )
    }
  }