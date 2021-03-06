import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class BuildPage extends Component {

    state = {
        builds: [],
        items: [],
        newItem: {
            itemName: '',
            itemAd: 0,
            itemAp: 0,
            
        },
        newChampion: {
            name: '',
            description: '',
            isMelee: false,
            ad: 0,
            ap: 0,
            image: ''
        },
        newBuild: {
            buildName: '',
            buildAd: 0,
            buildAp: 0,
            championId: '',
        }
    }

    componentDidMount = () => {
        axios.get(`/api/champion/${this.props.match.params.championId}`)
            .then((res) => {
                this.setState({ 
                    newChampion: res.data,
                    // newBuild: res.data
                    newBuild: {
                        buildAd: res.data.ad,
                        buildAp: res.data.ap,
                        championId: this.props.match.params.championId,
                        buildName: ''
                    }
                })
                console.log(this.state.newBuild)
            })
        axios.get(`/api/item`)
            .then((res) => {
                this.setState({ items: res.data})
            })
    }

    componentDidUpdate = (event) => {
        
    }
    
    onChange = (event) => {
        const value = event.target.value
        const field = event.target.name

        const newState = { ...this.state }
        newState.newBuild[field] = value
        this.setState(newState)
    }

    onItemSelection = (event) => {
        const itemId = event.target.value
        // // console.log(typeof event.target.value)
        const items = this.state.items
        const selectedItem = items.find( items => items._id === itemId)
        this.setState({
            value: selectedItem
        })
      
        const baseAd = parseInt(this.state.newChampion.ad)
        const baseAp = parseInt(this.state.newChampion.ap)
        const currentAd = parseInt(this.state.newBuild.buildAd)
        const currentAp = parseInt(this.state.newBuild.buildAp)
        const itemAd = parseInt(selectedItem.itemAd)
        const itemAp = parseInt(selectedItem.itemAp)
            let totalAd = 0
            let totalAp = 0
            totalAd = currentAd + itemAd
            totalAp = currentAp + itemAp

        // let option1 = document.getElementById('op1')
        // let option1Ad =  items.find( items => items._id === option1.value).ad
        // let option1Ap =  items.find( items => items._id === option1.value).ap
        // let option2 = document.getElementById('op2')
        // let option2Ad =  items.find( items => items._id === option2.value).ad
        // let option2Ap =  items.find( items => items._id === option2.value).ap
        // let option3 = document.getElementById('op3')
        // let option3Ad =  items.find( items => items._id === option3.value).ad
        // let option3Ap =  items.find( items => items._id === option3.value).ap
        // let option4 = document.getElementById('op4')
        // let option4Ad =  items.find( items => items._id === option4.value).ad
        // let option4Ap =  items.find( items => items._id === option4.value).ap
        // let option5 = document.getElementById('op5')
        // let option5Ad =  items.find( items => items._id === option5.value).ad
        // let option5Ap =  items.find( items => items._id === option5.value).ap
        // let option6 = document.getElementById('op6')
        // let option6Ad =  items.find( items => items._id === option6.value).ad
        // let option6Ap =  items.find( items => items._id === option6.value).ap

        // let totalAd = option1Ad + option2Ad + option3Ad + option4Ad + option5Ad + option6Ad
        // let totalAp = option1Ap + option2Ap + option3Ap + option4Ap + option5Ap + option6Ap
        // console.log(totalAd)
        // console.log(totalAp)
        // console.log(option1Ad)
        // console.log(option2Ad)
        // console.log(option3)
        // console.log(option4)
        // console.log(option5)
        // console.log(option6)




        // console.log(totalAd)
        // console.log(totalAp)
        // this.setState({ 
        //     selectItems: {
        //         option1: selectedItem,
        //         option2: selectedItem,
        //         option3: selectedItem,
        //         option4: selectedItem,
        //         option5: selectedItem,
        //         option6: selectedItem
        //     },

        // })
        // console.log(selectedItem)
        // console.log(selectedItem)
        // console.log(this.state.selectItems.option2)
        // console.log(this.state.selectItems.option3)
        // console.log(this.state.selectItems.option4)
        // console.log(this.state.selectItems.option5)
        // console.log(this.state.selectItems.option6)

        this.setState({ 
            newBuild: {
                buildAd: totalAd,
                buildAp: totalAp,
                championId: this.props.match.params.championID
                
            }
        })
        console.log(this.state.newBuild)
        // this.addToTotalStats()
      

    }

    

    updateBuildList = () => {
        axios.get('/api/build')
            .then((res) => {
                this.setState({ newBuild: res.data})
            })
    }

    onCreateBuildSubmit = (event) => {
        event.preventDefault()
        axios.post('/api/build/new', this.state.newBuild)
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
                <img src={`${this.state.newChampion.image}`} alt={`${this.state.newChampion.name}`} />
                 <div>
                    <h3>Your current stats</h3>
                    <h3>Attack Damage:{this.state.newBuild.buildAd}</h3>
                    <h3>Ability Power: {this.state.newBuild.buildAp}</h3>
                    {/* {console.log(this.state.newBuild)} */}
                 </div>
                <div>
                    <h2>Select your Items</h2>
                    <form onSubmit={this.onCreateBuildSubmit}>
                    <span>slot1</span>
                    <select id="op1" selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
                    <option value='None'>None</option>
                    {this.state.items.map((item) => {
                        return(
                            // <>
                                // <option defaultValue value=''>None</option>
                            // </>
                            <>
                                <option id="op1" value={item._id}>
                                    {item.itemName}</option>
                            </>
                        )
                    })}
                    </select>

                    <span>slot2</span>
                    <select selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
                    <option value='None'>None</option>
                    {this.state.items.map((item) => {
                        return(
                            // <>
                            //     <option defaultValue value=''>None</option>
                            // </>
                            <>
                                <option id="op2" value={item._id}>
                                    {item.itemName}</option>
                            </>
                        )
                    })}
                    </select>

                    <span>slot3</span>
                    <select selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
                    <option value='None'>None</option>
                    {this.state.items.map((item) => {
                        return(
                            // <>
                            //     <option defaultValue value=''>None</option>
                            // </>
                            <>
                                <option id="op3" value={item._id}>
                                    {item.itemName}</option>
                            </>
                        )
                    })}
                    </select>

                    <span>slot4</span>
                    <select defaultValue={'None'} selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
                    <option value='None'>None</option>
                    {this.state.items.map((item) => {
                        return(
                                <option id="op4" value={item._id}>
                                    {item.itemName}</option>
                        )
                    })}
                    </select>

                    <span>slot5</span>
                    <select selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
                    <option value='None'>None</option>
                    {this.state.items.map((item) => {
                        return(
                            // <>
                            //     <option defaultValue value=''>None</option>
                            // </>
                            <>
                                <option id="op5" value={item._id}>
                                    {item.itemName}</option>
                            </>
                        )
                    })}
                    </select>

                    <span>slot6</span>
                    <select selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
                    <option value='None'>None</option>
                    {this.state.items.map((item) => {
                        return(
                            // <>
                            //     <option defaultValue value=''>None</option>
                            // </>
                            <>
                                <option id="op6" value={item._id}>
                                    {item.itemName}</option>
                            </>
                        )
                    })}
                    </select>

                    <h3>Name your build</h3>
                    <input type="text" name="buildName" placeholder="Build Name" value={this.state.newBuild.buildName} onChange={this.onChange}></input>

                    <button type="submit" value="itemForm">Submit your Build</button>
                    </form>
                </div>
                
            </div>
        )
    }
}
