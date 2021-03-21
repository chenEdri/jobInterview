import React, { Component } from 'react'
import { connect } from 'react-redux'
import { itemService } from '../../services/ItemService.js'
import { saveItem } from '../../store/action/ItemAction.js'


export class ItemEdit extends Component {

    state = {
        item: ''
    }

    async componentDidMount() {
        let item;
        const itemId = this.props.match.params.itemId;
        if (itemId) {
            try {
                item = await itemService.getById(itemId)
                this.setState({ item })
            }
            catch {
                const item = itemService.getEmpty();
                this.setState({ item });
            }
        }
    }

    handleField = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        this.setState(prevState => {
            return {
                item: {
                    ...prevState.item,
                    [field]: value
                }
            }
        })
    }

    onSave = async (ev) => {
        const {item} = this.state
        ev.preventDefault()
        itemService.saveItem(item)
        this.props.history.push('/item')
    }


    render() {

        const { item } = this.state;
        if (!item) return <h1>Loading...</h1>
        const { name, price, inStock } = item;
        return (
            // <MyForm 
            <form onSubmit={(event) => this.onSave(event, item)}>
                <label htmlFor="txt">Item name</label>
                <Field type="text" id="txt" value={name || ''} name='name' onChange={this.handleField} placeholder="item name" />
                <label htmlFor="txt"> Price </label>
                <Field type="number" value={price || 0} name='price' onChange={this.handleField} />
                <label htmlFor="txt"> stcok </label>
                <Field type="checkbox" value={inStock} name='inStock' onChange={this.handleField} />
                <button onClick={this.onSave}>Save</button>
                <button onClick={() => this.props.history.push('/item')}>back to stor</button>
            </form>
        )
    }


}

