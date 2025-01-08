import React from 'react'
import myLets from './SomeVarandFunc'

export default class BtnPencil extends React.Component {
    handleMouseDown() {
      myLets.penBtnIsclicked = true
    }
    handleMouseUp() {
  //    alert("onMouseUp");
    }
    handleMouseMove() {
  //    alert("onMouseMove");
    }

    render() {
      return (
        <div>
        
          <button type="button" id="line"
              onMouseDown={this.handleMouseDown}
              onMouseUp={this.handleMouseUp()}
              onMouseMove={this.handleMouseMove()}>  
                    Pencil  
          </button>
        </div>
      )
    }
  }