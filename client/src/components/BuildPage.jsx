================vxcggt option2Ad =  items.find( items => items._id === option2.value).ad
        let option2Ap =  items.find( items => items._id === option2.value).ap
        let option3 = document.getElementById('op3')
        let option3Ad =  items.find( items => items._id === option3.value).ad
        let option3Ap =  items.find( items => items._id === option3.value).ap
        let option4 = document.getElementById('op4')
        let option4Ad =  items.find( items => items._id === option4.value).ad
        let option4Ap =  items.find( items => items._id === option4.value).ap
        let option5 = document.getElementById('op5')
        let option5Ad =  items.find( items => items._id === option5.value).ad
        let option5Ap =  items.find( items => items._id === option5.value).ap
        let option6 = document.getElementById('op6')
        let option6Ad =  items.find( items => items._id === option6.value).ad
        let option6Ap =  items.find( items => items._id === option6.value).ap

        let totalAd = option1Ad + option2Ad + option3Ad + option4Ad + option5Ad + option6Ad
        let totalAp = option1Ap + option2Ap + option3Ap + option4Ap + option5Ap + option6Ap
        console.log(totalAd)
        console.log(totalAp)




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
        console.log(selectedItem)
        // console.log(this.state.selectItems.option2)
        // console.log(this.state.selectItems.option3)
        // console.log(this.state.selectItems.option4)
        // console.log(this.state.selectItems.option5)
        // console.log(this.state.selectItems.option6)

        this.setState({ 
            newBuild: {
                 
                ad: totalAd,
                ap: totalAp,
                
            }
        })
        // console.log(this.state.newBuild)
        // this.addToTotalStats()
      

    }

    

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
                    <select id="op1" selectedvalue={this.state.value}  onChange={this.onItemSelection}> 
                    <option value='None'>None</option>
                    {this.state.items.map((item) => {
                        return(
                            // <>
                            //     <option defaultValue value=''>None</option>
                            // </>
                            <>
                                <option id="op1" value={item._id}>
                                    {item.name}</option>
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
                                    {item.name}</option>
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
                                    {item.name}</option>
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
                                    {item.name}</option>
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
                                    {item.name}</option>
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
