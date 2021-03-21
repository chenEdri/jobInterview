import React from 'react'

// Creating an illusion of slots
export function Card({ header, body, footer, img }) {
    return (
        <div className="card flex column align-center">
            <h3 className="card-title tac ">{header}</h3>
          <div className="card-img">  { img && <img src={img} alt="" /> }</div>
            <div className="card-body">{ body }</div>
        </div>
    )
}
