import { Autocomplete } from '@material-ui/lab';
import TextField from '@material-ui/core/TextField';
import React, { Component } from 'react'
import { itemService } from '../../services/itemService.js'

export class Filter extends Component {

    state = {
        name: '',
        minPrice: '',
        maxPrice: '',
        inStock: '',
        options:[]
    }

    handleChange = ({ target }) => {
        console.log('inside!');
        let field;
        (target.name) ? field = target.name : field = target.id;
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => this.props.onSetFilter(this.state))
    }

    render() {
        let places = null;
        const { location } = this.state;
        if (location) places = location.map(a => a.LocalizedName)
        return (
            <form className="filter flex sb align-center" onSubmit={(event) => this.onSave(event)}>
                {/* <div>
                    <label htmlFor="">Enter a Location</label> */}
                    {/* <Autocomplete
                        id="combo-box-demo"
                        options={this.state.options}
                        getOptionLabel={(place) => place.LocalizedName}
                        style={{ width: 300, height: 80 }}
                        renderInput={(params) => <TextField {...params} 
                        label="look for an item" 
                        variant="outlined" 
                        onChange={this.handleChange}
                       />}  */}
                    {/* /> */}
                {/* </div> */}
                <div>
                    <label htmlFor="">By Name</label>
                    <input name="name" autoComplete="off" value={this.state.name} onChange={this.handleChange} type="text" />
                </div>
                <div>
                    <label htmlFor="">Min-Price</label>
                    <input type="number" name="minPrice" onChange={this.handleChange} />
                </div>
                <div>
                    <label htmlFor="">Max-Price</label>
                    <input type="number" name="maxPrice" onChange={this.handleChange} />
                </div>
                <div>
                <label htmlFor="inStock">Availabile</label>
                <select id="inStock" onChange={this.handleChange}>
                    <option value="all" >All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                </div>
                <button className="classic-btn" onClick={this.onSave}>Save</button>
            </form>
        )
    }
}
