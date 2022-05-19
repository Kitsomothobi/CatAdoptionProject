import React, { Component } from "react"

import "./App.scss"
import Navbar from "./Components/Navbar/navbar"
import Catslist from "./Components/CatList/index"


export default class App extends Component {
  render(){
    return(
      <main>
        <Navbar/>
        <Catslist/>
      </main>
    )
  }
}
