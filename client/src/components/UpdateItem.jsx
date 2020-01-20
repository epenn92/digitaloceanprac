import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class UpdateItem extends Component {

    state = {
    
        newItem: {
            name: '',
            description: '',
            isMelee: false,
            damageType: '',
            ad: 0,
            ap: 0
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
                <h1>Update {this.state.newItem.name}</h1>
            <br></br>
            <form onSubmit={this.onSubmitUpdateForm}>
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
            <button type="submit" value="updateItem">Update Item</button>
            </form>
            </div>
        )
    }
}
