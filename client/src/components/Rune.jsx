import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Rune extends Component {

    state = {
        runes: [],
       

    }

    componentDidMount = () => {
        axios.get('/api/rune')
            .then((res) => {
                console.log(res.data)
                this.setState({ runes: res.data})
            })
            console.log(this.state.runes)
            console.log(this.state.selectedChampion)
    }

    render() {
        return (
            <div>
                <h1 className="title">View All Runes</h1>
                {this.state.runes.map((rune) => {
                    return (
                        <div className="runePage">
                            <Link to={`/rune/${rune._id}`}>
                            <h1 className="runeName">{rune.runeName}</h1> </Link>
                            <h3>{rune.runeDescription}</h3>
                            <h3>{rune.championId}</h3>
                            
                            {/* <h3>Melee?{rune.isMelee}</h3>
                            <h3>Damage Type: {rune.damageType}</h3>
                            <h3>Base Attack Damage: {rune.ad}</h3>
                            <h3>Base Ability Power: {rune.ap}</h3> */}
                        </div>
                    )
                } ) }
            </div>
        )
    }
}
