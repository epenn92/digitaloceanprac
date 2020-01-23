import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export default class SingleItem extends Component {

    state = {
        items: [],
        newItem: {
            itemName: '',
            itemDescription: '',
            isMelee: false,
            damageType: '',
            itemAd: 0,
            itemAp: 0,
        }
    }

    componentDidMount = () => {
        axios.get(`/api/item/${this.props.match.params.itemId}`)
            .then((res) => {
                this.setState({ newItem: res.data})
            })
    }

    deleteItem = () => {
        axios.delete(`/api/item/${this.props.match.params.itemId}`)
            .then(() => {
                this.setState({ redirect: true })
            }) 
    }

    render() {
        return (
            <div>
                <div>
                {this.state.redirect === true ? <Redirect to="/item" /> : null}
                <h1>Your Item Stats</h1>
                <h3>{this.state.newItem.itemName}</h3>
                <h3>{this.state.newItem.itemDescription}</h3>
                <h3>Melee?{this.state.newItem.isMelee}</h3>
                <h3>DamageType:  {this.state.newItem.damageType}</h3>
                <h3>Attack Damage:{this.state.newItem.itemAd}</h3>
                <h3>Ability Power:{this.state.newItem.itemAp}</h3>
                </div>

                <Link to={`/item/edit/${this.props.match.params.itemId}`} ><button>Edit this Item</button></Link>

                <button onClick={this.deleteItem} vlue="Delete">Delete this Item</button>
            </div>
        )

    }
}
