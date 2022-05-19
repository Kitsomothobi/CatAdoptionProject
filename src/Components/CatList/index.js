import React, { Component } from 'react';
import "./catslist.scss";
import Cat from "../Cat/Cat";

// use curly braces since we are importing an actual elemnt from the file, not the entire file itself
import { catData } from "../catData";



export default class Catlist extends Component {

  state = {
    cats: catData
    };

    
    catHandler = (id) => {
      const {cats} = this.state;
      
      const sortedCats = cats.filter(item =>
        item.id !== id
      );

      this.setState({
        cats: sortedCats
      })
    }

  render() {
   const  {cats} = this.state; 
    return (
     <section className="catslist">
        {cats.map(item =>{
          return(
            <Cat key={item.id} info={item} removeCats={this.catHandler} />
          )
        })}
     </section> 
    )
  }
}
