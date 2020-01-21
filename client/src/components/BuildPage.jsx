import React, { Component } from 'react'
import axios from 'axios'

export default class BuildPage extends Component {

    state = {
        builds: [],
        items: [],
        newItem: {
            name: '',
            description: '',
            ad: 0,
            ap: 0
        },
        newChampion: {
            name: '',
            description: '',
            isMelee: false,
            ad: 0,
            ap: 0
        },
        newBuild: {
            name: '',
            description: '',
            ad: 0,
            ap: 0
        }
    }

    componentDidMount = () => {
        axios.get(`/champion/${this.props.match.params.championId}`)
            .then((res) => {
                this.setState({ newChampion: res.data})
            })
        axios.get(`/item`)
            .then((res) => {
                this.setState({ items: res.data})
            })
    }

    
    
    onChange = (event) => {
        const value = event.target.value
        const field = event.target.name

        const newState = { ...this.state }
        newState.newChampion[field] = value
        this.setState(newState)
    }

    onItemSelection = (event) => {
        const itemId = event.target.value
        const items = this.state.items
        const selectedItem = items.find( item => itemId === itemId)
        this.setState({
            value: selectedItem
        })
        console.log(this.state.value)
    }

    render() {
        return (
            <div>
                <h1>Build Your Champion</h1>
                <h1>{this.state.newChampion.name}</h1>
                 <div>
                    <h3>Your current stats</h3>
                    <h3>Attack Damage:{this.state.newChampion.ad}</h3>
                    <h3>Ability Power: {this.state.newChampion.ap}</h3>
                 </div>
                <div>
                    <h2>Select your Items</h2>
                    
                    <select selectedValue={this.state.value}  onChange={this.onItemSelection}> 
                    {this.state.items.map((item) => {
                        return(
                            // <>
                            //     <option defaultValue value=''>None</option>
                            // </>
                            <>
                                <option value={item._id}>
                                    {item.name}</option>
                            </>
                        )
                    })}
                    </select>
                    {/* {{#each allRestaurants}}
  
  <option value="new/{{_id}}" {{#if selected}} selected
  {{/if}}>{{name}}</option>
  {{/each}}


 </select> */}
                </div>
                
            </div>
        )
    }
}
