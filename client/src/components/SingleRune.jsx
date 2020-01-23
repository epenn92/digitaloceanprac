import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export default class SingleRune extends Component {

    state = {
        runes: [],
        newRune: {
            runeName: '',
            runeDescription: '',
            championId: ''
        }
    }

    componentDidMount = () => {
        axios.get(`/api/rune/${this.props.match.params.runeId}`)
            .then((res) => {
                this.setState({ newRune: res.data},
                console.log(res.data))
            })
    }

    deleteRune = () => {
        axios.delete(`/api/rune/${this.props.match.params.runeId}`)
            .then(() => {
                this.setState({ redirect: true })
            }) 
    }

    render() {
        return (
            <div>
                <div>
                {this.state.redirect === true ? <Redirect to="/rune" /> : null}
                <h1>Your Rune Stats</h1>
            
                <h3>{this.state.newRune.runeName}</h3>
                <h3>{this.state.newRune.runeDescription}</h3>
            
                </div>


                <button onClick={this.deleteRune} value="DeleteRune">Delete this Rune</button>

            
            </div>
        )

    }
}
