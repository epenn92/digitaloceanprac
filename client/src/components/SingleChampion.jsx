import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export default class SingleChampion extends Component {

    state = {
        champions: [],
        newChampion: {
            name: '',
            description: '',
            isMelee: false,
            damageType: '',
            ad: 0,
            ap: 0,
        }
    }

    componentDidMount = () => {
        axios.get(`/champion/${this.props.match.params.championId}`)
            .then((res) => {
                this.setState({ newChampion: res.data})
            })
    }

    deleteChampion = () => {
        axios.delete(`/champion/${this.props.match.params.championId}`)
            .then(() => {
                this.setState({ redirect: true })
            }) 
    }

    render() {
        return (
            <div>
                <div>
                {this.state.redirect === true ? <Redirect to="/champion" /> : null}
                <h1>Your Champion Stats</h1>
                <h3>{this.state.newChampion.name}</h3>
                <h3>{this.state.newChampion.description}</h3>
                <h3>Melee?{this.state.newChampion.isMelee}</h3>
                <h3>DamageType:  {this.state.newChampion.damageType}</h3>
                <h3>Attack Damage:{this.state.newChampion.ad}</h3>
                <h3>Ability Power:{this.state.newChampion.ap}</h3>
                </div>

                <Link to={`/champion/edit/${this.props.match.params.championId}`} ><button>Edit this Champion</button></Link>

                <button onClick={this.deleteChampion} vlue="Delete">Delete this Champion</button>
            </div>
        )

    }
}
