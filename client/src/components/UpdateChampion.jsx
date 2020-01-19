import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class UpdateChampion extends Component {

    state = {
    
        newChampion: {
            name: '',
            description: '',
            isMelee: false,
            damageType: '',
            ad: 0,
            ap: 0
        }
    }

    componentDidMount = () => {
        axios.get(`/champion/${this.props.match.params.championId}`)
            .then((res) => {
                this.setState({ newChampion: res.data})
            })
    }

    // updateChampion = () => {}

    onChange = (event) => {
        const value = event.target.value
        const field = event.target.name

        const newState = { ...this.state }
        newState.newChampion[field] = value
        this.setState(newState)
    }

    onSubmitUpdateForm = (event) => {
        event.preventDefault()
        axios.put(`/champion/${this.props.match.params.championId}`, this.state.newChampion)
            .then((res) => {
                this.setState({ redirect: true})
            })
    }


    render() {
        return (
            <div>
                {this.state.redirect === true ? <Redirect to="/champion" /> : null}
                <h1>Update {this.state.newChampion.name}</h1>
            <br></br>
            <form onSubmit={this.onSubmitUpdateForm}>
            <input type="text" name="name" value={this.state.newChampion.name} placeholder="Champion Name" onChange={this.onChange} />
            <input type='text' name='description' placeholder="Description" value= {this.state.newChampion.description} onChange={this.onChange} />
            <select name="isMelee" onChange={this.onChange}>
                <option value={!this.state.newChampion.isMelee} name="melee">Melee</option>
                <option value={this.state.newChampion.isMelee} name="ranged">Ranged</option>
                </select>        
            {/* <select name="damageType">
                <option value={this.state.newChampion.damageType}
            </select> */}
            <input type="text" name="damageType" value={this.state.newChampion.damageType} placeholder="Phy, Mag, mixed Damage" onChange={this.onChange} />
            <input type="number" name="ad" value={this.state.newChampion.ad} placeholder="Base AD" onChange={this.onChange} />
            <input type="number" name="ap" value={this.state.newChampion.ap} placeholder="Base AP" onChange={this.onChange} />
            <button type="submit" value="updateChampion">Update Champion</button>
            </form>
            </div>
        )
    }
}
