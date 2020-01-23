import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class CreateRune extends Component {

    state = {
        selectedChampion: '',
        runes: [],
        newRune: {
            runeName: '',
            runeDescription: '',
            championId: ''
        },
        champions: []
        // items: [], 
        // newItem: {
        //     name: '',
        //     description: '',
        //     isMelee: false,
        //     damageType: '',
        //     ad: 0,
        //     ap: 0,
        //     unique: false
        // }
    }

    componentDidMount = () => {
        axios.get('/api/rune')
            .then((res) => {
                this.setState({ runes: res.data})
            })
        axios.get('/api/champion')
            .then((res) => {
                this.setState({champions: res.data})
            })
            console.log(this.state.runes)
    }


    updateRuneList = () => {
        axios.get('/api/rune')
            .then((res) => {
                this.setState({ newRune: res.data,
                selectedChampion: res.data
                })
            })
    }

    getChampions = (event) => {
       const championId = event.target.value
       const champions = this.state.champions
       const selectedChampion = champions.find( champions => champions._id === championId) 
       console.log(selectedChampion._id)
       this.setState({
           selectedChampion: selectedChampion._id
       
        })
      
    }

    

    onChange = (event) => {
        const value = event.target.value
        const field = event.target.name

        const newState = { ...this.state }
        newState.newRune[field] = value
        this.setState(newState)
        console.log(newState)
    }

    componentWillUnmount = () => {
    }
    
    
    onSubmitCreateForm = (event) => {
        event.preventDefault()
        console.log(this.state.selectedChampion)
        this.setState({
            newRune: {
                runeName: this.state.newRune.runeName,
                runeDescription: this.state.newRune.runeDescription,
                championId: this.state.selectedChampion,
            },
            selectedChampion: this.state.selectedChampion
        })
        axios.post('/api/rune/new', this.state.newRune)
        .then(() => {
            console.log(this.state.newRune)
            this.updateRuneList()
            this.setState({ redirect: true})
            
               
            })
    }


    render() {
        return (
            <div>
                {this.state.redirect === true ? <Redirect to="/rune" /> : null}
                <h1>Create a Rune</h1>
            <br></br>
            <form onSubmit={this.onSubmitCreateForm}>
            <input type="text" name="runeName" value={this.state.newRune.runeName} placeholder="Rune Name" onChange={this.onChange} />
            <input type='text' name='runeDescription' placeholder="Description" value= {this.state.newRune.runeDescription} onChange={this.onChange} />
            <select value={this.state.value} onChange={this.getChampions}>
            <option value="None">None</option>
            {this.state.champions.map((champion) => {
            return(
                    <option value={champion._id}>
                        {champion.name}</option>
            )}
            )}
                      </select>
            
            <button type="submit" value="CreateRune">Create Rune</button>
            </form>
            </div>
        )
    }
}
