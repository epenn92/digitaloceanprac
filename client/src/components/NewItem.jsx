import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class NewItem extends Component {

    state = {
    
        items: [], 
        newItem: {
            name: '',
            description: '',
            isMelee: false,
            damageType: '',
            ad: 0,
            ap: 0,
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
            <input type="text" name="name" value={this.state.newItem.name} placeholder="Item Name" onChange={this.onChange} />
            <input type='text' name='description' placeholder="Description" value= {this.state.newItem.description} onChange={this.onChange} />
            <select name="isMelee" onChange={this.onChange}>
                <option value={!this.state.newItem.isMelee} name="melee">Melee</option>
                <option value={this.state.newItem.isMelee} name="ranged">Ranged</option>
                </select>        
            {/* <select name="damageType">
                <option value={this.state.newItem.damageType}
            </select> */}
            <input type="text" name="damageType" value={this.state.newItem.damageType} placeholder="Phy, Mag, mixed Damage" onChange={this.onChange} />
            <input type="number" name="ad" value={this.state.newItem.ad} placeholder="Base AD" onChange={this.onChange} />
            <input type="number" name="ap" value={this.state.newItem.ap} placeholder="Base AP" onChange={this.onChange} />
            <button type="submit" value="CreateItem">Create Item</button>
            </form>
            </div>
        )
    }
}