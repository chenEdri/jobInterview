import React, { Component } from "react";
import { ItemList } from '../../cmps/item/ItemList';
import { itemService } from '../../services/itemService.js'
import { Filter } from '../../cmps/item/Filter';

export class ItemApp extends Component {

    state = {
        items: null,
        LocationKey: null
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.loadItems()
    }

    async componentDidUpdate(prevProps) {
        if (!prevProps.filterBy) return;
        if (prevProps.filter !== this.props.filterBy) this.loadItems()
    }

    loadItems = async ()=>{
        try{
            const items = await itemService.query();
            this.setState({items})
            }
            catch{
                console.log('ERROR WHILE LOADING ITEMS');
            }
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy });
    };

    
    onRemove = async (_id) => {
        try{
        await itemService.removeItem(_id);
        this.loadItems()
        }
        catch{
            console.log('ERROR WHILE TRYING TO REMOVE THE ITEM');
        }
    };


    render() {
        const { items } = this.state;
        console.log(items);
        return (
            <div className="main-container mb80">
                <div className="flex align-center">
                    <Filter onSetFilter={this.onSetFilter} />
                    <button className="light-btn" onClick={this.saveToFav}>save to favorites</button>
                </div>
                {(items) ? <div>
                    <ItemList bottomBorder={true} items={items} onRemove={this.onRemove} />
                </div> : ''}
            </div>
        )
    }
}

