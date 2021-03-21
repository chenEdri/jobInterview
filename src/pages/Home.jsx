import React, { Component } from "react"

import { Jumbo } from "../cmps/Jumbo"

export class Home extends Component {
  render() {
    return (
      <section className="main-container">
        <Jumbo />
        <div>
          HOME
        </div>
      </section>
    );
  }
}


