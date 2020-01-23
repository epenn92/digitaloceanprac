import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class UpdateItem extends Component {

    state = {
    
        newItem: {
            itemName: '',
            itemDescription: '',
            isMelee: false,
            damageType: '',
            itemAd: 0,
            itemAp: 0
        }
    }

    componentDidMount = () => {
        axios.get(`/item/${this.props.match.params.itemId}`)
            .then((res) => {
                this.setState({ newItem: res.data})
            })
    }

    // updateItem = () => {}

    onChange = (event) => {
        const value = event.target.value
        const field = event.target.name

        const newState = { ...this.state }
        newState.newItem[field] = value
        this.setState(newState)
    }

    onSubmitUpdateForm = (event) => {
        event.preventDefault()
        axios.put(`/item/edit/${this.props.match.params.itemId}`, this.state.newItem)
            .then(() => {
                this.setState({ redirect: true})
            })
    }


    render() {
        return (
            <div>
                {this.state.redirect === true ? <Redirect to="/item" /> : null}
                <h1>Update {this.state.newItem.itemName}</h1>
            <br></br>
            <form onSubmit={this.onSubmitUpdateForm}>
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
            <button type="submit" value="updateItem">Update Item</button>
            </form>
            </div>
        )
    }
}
