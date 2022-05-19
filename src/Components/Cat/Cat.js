import React, { Component } from 'react'

import "./Cat.scss"



export default class Cat extends Component {

  state = {
    showInfo: false
  }

  handleTrivia = () =>{
    this.setState({
      showInfo:!this.state.showInfo,
    })
  }

  render() {
    // destruction
 const {id, breed, img, traits, trivia} = this.props.info;

 const {removeCats} = this.props

    return (
      <article className="cat">
        {/* Image container */}
        <div className="image-container">
          <img alt="cat" src={img} />
          
          {/* delete button */}
            <span onClick={()=>{removeCats(id)}} className="close-btn">
              <i  className="fas fa-window-close "></i>
            </span>
            
        
        </div>

        

        {/* Information section */}
        <div className="cat-info">
          <h3>{breed}</h3>
          <h4>{traits}</h4>
          <h5>Trivia <span onClick={this.handleTrivia} className="fas fa-caret-square-down"></span></h5>
          {this.state.showInfo && <p>{trivia}</p>}
        </div>

      </article>
    )
  }
}
