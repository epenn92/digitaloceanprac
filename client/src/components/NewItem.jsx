import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class NewItem extends Component {

    state = {
    
        items: [], 
        newItem: {
            itemName: '',
            itemdescription: '',
            isMelee: false,
            damageType: '',
            itemAd: 0,
            itemAp: 0,
            unique: false
        }
    }

    componentDidMount = () => {
        axios.get('/item/')
            .then((res) => {
                this.setState({ items: res.data})
            })
    }


    updateItemList = () => {
        axios.get('/item')
            .then((res) => {
                this.setState({ items: res.data})
            })
    }

    onChange = (event) => {
        const value = event.target.value
        const field = event.target.name

        const newState = { ...this.state }
        newState.newItem[field] = value
        this.setState(newState)
    }

    onSubmitCreateForm = (event) => {
        event.preventDefault()
        axios.post('/item/new', this.state.newItem)
            .then(() => {
                this.updateItemList()
                this.setState({ redirect: true})
            })
    }


    render() {
        return (
            <div>
                {this.state.redirect === true ? <Redirect to="/item" /> : null}
                <h1>Create a Item</h1>
            <br></br>
            <form onSubmit={this.onSubmitCreateForm}>
            <input type="text" name="itemName" value={this.state.newItem.itemName} placeholder="Item Name" onChange={this.onChange} />
            <input type='text' name='itemDescription' placeholder="Description" value= {this.state.newItem.itemDescription} onChange={this.onChange} />
            <select name="isMelee" onChange={this.onChange}>
                <option value={!this.state.newItem.isMelee} name="melee">Melee</option>
                <option value={this.state.newItem.isMelee} name="ranged">Ranged</option>
                </select>        
            {/* <select name="damageType">
                <option value={this.state.newItem.damageType}
            </select> */}
            <input type="text" name="damageType" value={this.state.newItem.damageType} placeholder="Phy, Mag, mixed Damage" onChange={this.onChange} />
            <input type="number" name="itemAd" value={this.state.newItem.itemAd} placeholder="Base AD" onChange={this.onChange} />
            <input type="number" name="itemAp" value={this.state.newItem.itemAp} placeholder="Base AP" onChange={this.onChange} />
            <button type="submit" value="CreateItem">Create Item</button>
            </form>
            </div>
        )
    }
}