import React from 'react'
import { ItemPreview } from './ItemPreview'
import { Card } from '../Card'

export function ItemList({ items }) {

    return (
        <div className= "card-grid">
            {
                items.map((item,idx)=>
                <Card key={ idx } img={`#`} header={item.date } body={ <ItemPreview item={ item } 
                /> } footer='The footer' />)
            }
        </div>
    )
}
