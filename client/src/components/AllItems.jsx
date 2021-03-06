import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllItems extends Component {

    state = {
        items: [],
    }

    componentDidMount = () => {
        axios.get('/api/item')
            .then((res) => {
                this.setState({ items: res.data})
            })
    }

    render() {
        return (
            <div>
                <h1>View All Items</h1>
                {this.state.items.map((item) => {
                    return (
                        <div>
                            <Link to={`/item/${item._id}`}>
                            <h1>Name: {item.itemName}</h1> </Link>
                            <h3>Description:{item.itemDescription}</h3>
                            <h3>Base Attack Damage: {item.itemAd}</h3>
                            <h3>Base Ability Power: {item.itemAp}</h3>
                            {/* <h3>Melee?{item.isMelee}</h3>
                            <h3>Damage Type: {item.damageType}</h3>
                            */}
                        </div>
                    )
                } ) }
            </div>
        )
    }
}
