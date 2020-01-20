import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class NewChampion extends Component {

    state = {
        champions: [],
        newChampion: {
            name: '',
            description: '',
            isMelee: false,
            damageType: '',
            ad: 0,
            ap: 0
        },
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
        axios.get('/champion/')
            .then((res) => {
                this.setState({ champions: res.data})
            })
        axios.get('/')
            .then((res) => {
                this.setState({ items: res.data})
            })
    }


    updateChampionList = () => {
        axios.get('/champion')
            .then((res) => {
                this.setState({ champions: res.data})
            })
    }

    onChange = (event) => {
        const value = event.target.value
        const field = event.target.name

        const newState = { ...this.state }
        newState.newChampion[field] = value
        this.setState(newState)
    }

    onSubmitCreateForm = (event) => {
        event.preventDefault()
        axios.post('/champion/new', this.state.newChampion)
            .then(() => {
                this.updateChampionList()
                this.setState({ redirect: true})
            })
    }


    render() {
        return (
            <div>
                {this.state.redirect === true ? <Redirect to="/champion" /> : null}
                <h1>Create a Champion</h1>
            <br></br>
            <form onSubmit={this.onSubmitCreateForm}>
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
            <button type="submit" value="CreateChampion">Create Champion</button>
            </form>
            </div>
        )
    }
}
