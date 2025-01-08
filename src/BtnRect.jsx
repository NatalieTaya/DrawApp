import React from 'react'


export default class BtnRect extends React.Component {
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
                    Rectangle  
          </button>
        </div>
      )
    }
  }