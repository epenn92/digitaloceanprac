import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Champion extends Component {

    state = {
        champions: [],

    }

    componentDidMount = () => {
        axios.get('/champion')
            .then((res) => {
                this.setState({ champions: res.data})
            })
    }

    render() {
        return (
            <div>
                <h1>View All Champions</h1>
                {this.state.champions.map((champion) => {
                    return (
                        <div>
                            <Link to={`/champion/${champion._id}`}>
                            <h1>Name: {champion.name}</h1> </Link>
                            <h3>Description:{champion.description}</h3>
                            {/* <h3>Melee?{champion.isMelee}</h3>
                            <h3>Damage Type: {champion.damageType}</h3>
                            <h3>Base Attack Damage: {champion.ad}</h3>
                            <h3>Base Ability Power: {champion.ap}</h3> */}
                        </div>
                    )
                } ) }
            </div>
        )
    }
}
