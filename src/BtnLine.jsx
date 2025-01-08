import React from 'react'


export default class BtnLine extends React.Component {
    handleMouseDown() {
    //  alert("onMouseDown");
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
                    Line  
          </button>
        </div>
      )
    }
  }