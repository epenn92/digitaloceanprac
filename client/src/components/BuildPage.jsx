import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

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
            ap: 0,
            championId: '',
        }
    }

    componentDidMount = () => {
        axios.get(`/champion/${this.props.match.params.championId}`)
            .then((res) => {
                this.setState({ 
                    newChampion: res.data,
                    // newBuild: res.data
                    newBuild: {
                        ad: res.data.ad,
                        ap: res.data.ap,
                        isMelee: res.data.isMelee,
                        championId: this.props.match.params.championId
                    }
                })
                console.log(this.state.newBuild)
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
        // console.log(typeof event.target.value)
        const items = this.state.items
        const selectedItem = items.find( items => items._id === itemId)
        // console.log(selectedItem.ad)
        // console.log(selectedItem.ap)
        // console.log(this.state.newChampion.ad)
        // this.setState({
        //     value: selectedItem
        // })
        const baseAd = parseInt(this.state.newChampion.ad)
        const baseAp = parseInt(this.state.newChampion.ap)
        const currentAd = parseInt(this.state.newBuild.ad)
        const currentAp = parseInt(this.state.newBuild.ap)
        const itemAd = parseInt(selectedItem.ad)
        const itemAp = parseInt(selectedItem.ap)
        let totalAd = currentAd + itemAd
        let totalAp = currentAp + itemAp
        // console.log(totalAd)
        // console.log(totalAp)
        this.setState({ 
            newBuild: {
                ...this.state.newBuild, 
                name: this.state.newBuild.name,
                ad: totalAd,
                ap: totalAp,
                championId: this.props.match.params.championId
            }
        })
        // console.log(this.state.newBuild)
        // this.addToTotalStats()
    }

    // addToTotalStats = () => {
    //     const baseAd = parseInt(this.state.newChampion.ad)
    //     const baseAp = parseInt(this.state.newChampion.ap)
    //     const itemAd = parseInt(this.state.selectedItem.ad)
    //     const itemAp = parseInt(this.state.selectedItem.ap)
    //     const totalAd = baseAd + itemAd
    //     const totalAp = baseAp + itemAp
    //     this.setState({ 
    //         newBuild: {
    //             ...this.state.newBuild, 
    //             ad: totalAd,
    //             ap: totalAp
    //         }
    //     })
    //     console.log(this.newBuild)
    // }
    updateBuildList = () => {
        axios.get('/build')
            .then((res) => {
                this.setState({ newBuild: res.data})
            })
    }

    onCreateBuildSubmit = (event) => {
        event.preventDefault()
        axios.post('/build/new', this.state.newBuild)
            .then(() => {
                this.updateBuildList()
                this.setState({ redirect: true})
            })
    }

    render() {
        return (
            <div>
                {this.state.redirect === true ? <Redirect to="/build" /> : null}
                <h1>Build Your Champion</h1>
                <h1>{this.state.newChampion.name}</h1>
                 <div>
                    <h3>Your current stats</h3>
                    <h3>Attack Damage:{this.state.newBuild.ad}</h3>
                    <h3>Ability Power: {this.state.newBuild.ap}</h3>
                    {/* {console.log(this.state.newBuild)} */}
                 </div>
                <div>
                    <h2>Select your Items</h2>
                    <form onSubmit={this.onCreateBuildSubmit}>
                    <span>slot1</span>
                    <select selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
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

                    <span>slot2</span>
                    <select selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
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

                    <span>slot3</span>
                    <select selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
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

                    <span>slot4</span>
                    <select defaultValue={'None'} selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
                    {this.state.items.map((item) => {
                        return(
                            // <>
                                
                            // </>
                            <>
                            <option value='None'>None</option>
                                <option value={item._id}>
                                    {item.name}</option>
                            </>
                        )
                    })}
                    </select>

                    <span>slot5</span>
                    <select selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
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

                    <span>slot6</span>
                    <select selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
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

                    <button type="submit" value="itemForm">Submit your Build</button>
                    </form>
                </div>
                
            </div>
        )
    }
}
