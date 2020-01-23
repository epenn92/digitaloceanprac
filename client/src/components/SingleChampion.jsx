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
            image: ''
        }
    }

    componentDidMount = () => {
        axios.get(`/api/champion/${this.props.match.params.championId}`)
            .then((res) => {
                this.setState({ newChampion: res.data},
                console.log(res.data))
            })
    }

    deleteChampion = () => {
        axios.delete(`/api/champion/${this.props.match.params.championId}`)
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
                <img src={`${this.state.newChampion.image}`} alt={`Champion ${this.state.newChampion.name}`}></img>
                <h3>{this.state.newChampion.name}</h3>
                <h3>{this.state.newChampion.description}</h3>
                <h3>Melee?{this.state.newChampion.isMelee}</h3>
                <h3>DamageType:  {this.state.newChampion.damageType}</h3>
                <h3>Attack Damage:{this.state.newChampion.ad}</h3>
                <h3>Ability Power:{this.state.newChampion.ap}</h3>
                </div>

                <Link to={`/champion/edit/${this.props.match.params.championId}`} ><button>Edit this Champion</button></Link>

                <button onClick={this.deleteChampion} value="DeleteChampion">Delete this Champion</button>

                <Link to={`/champion/items/${this.props.match.params.championId}`}><button>Preview a build</button></Link>
            </div>
        )

    }
}
