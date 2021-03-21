
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { itemService } from '../../services/itemService.js'

const loadingImgUrl = 'https://res.cloudinary.com/dygtul5wx/image/upload/v1601042370/sprint%204/users/75_2_cf1ozr.gif';

export class ItemDetails extends Component {

    state={
        item:null
    }

    componentDidMount = async () => {
        let item;
        const { toyId } = this.props.match.params;
        if (toyId){
            try{
                item = await itemService.getById(itemId);
                this.setState({item})
            } 
            catch{
                console.log('ERROR WHILE LOADING ITEM');
            }
        }
    }

    render() {
        let { item } = this.state;
        if (!item || item._id !== this.props.match.params.itemId) return (
            <div className="loader">
                <img src={loadingImgUrl} alt="Loading..." />
            </div>
        )
        return (<div className="main-container">ITEM</div>)
    }
}
