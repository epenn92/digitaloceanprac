import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export default class SingleItem extends Component {

    state = {
        items: [],
        newItem: {
            name: '',
            description: '',
            isMelee: false,
            damageType: '',
            ad: 0,
            ap: 0,
        }
    }

    componentDidMount = () => {
        axios.get(`/item/${this.props.match.params.itemId}`)
            .then((res) => {
                this.setState({ newItem: res.data})
            })
    }

    deleteItem = () => {
        axios.delete(`/item/${this.props.match.params.itemId}`)
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
                <h3>{this.state.newItem.name}</h3>
                <h3>{this.state.newItem.description}</h3>
                <h3>Melee?{this.state.newItem.isMelee}</h3>
                <h3>DamageType:  {this.state.newItem.damageType}</h3>
                <h3>Attack Damage:{this.state.newItem.ad}</h3>
                <h3>Ability Power:{this.state.newItem.ap}</h3>
                </div>

                <Link to={`/item/edit/${this.props.match.params.itemId}`} ><button>Edit this Item</button></Link>

                <button onClick={this.deleteItem} vlue="Delete">Delete this Item</button>
            </div>
        )

    }
}
