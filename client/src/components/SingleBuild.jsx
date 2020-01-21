import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

export default class SingleBuild extends Component {

    state = {
        builds: [],
        newBuild: {
            name: '', 
            ad: 0,
            ap: 0,
            championId: ''
        }
    } 

    componentDidMount = () => {
        axios.get(`/build/${this.props.match.params.buildId}`)
            .then((res) => {
                this.setState({ newBuild: res.data }
                    )
                })
                // console.log(newBuild)
    }

    deleteBuild = () => {
        axios.delete(`/build/${this.props.match.params.buildId}`)
            .then(() => {
                this.setState({ redirect: true})
            })
    }

    render() {
        return (
            <div>
                <div>
                    {console.log(this.state.newBuild)}
                    {this.state.redirect === true ? <Redirect to="/build" /> : null}
                    
                    <h1>Single Build</h1>
                    <h3>{this.state.newBuild.name}</h3>
                    <h3>{this.state.newBuild.ad}</h3>
                    <h3>{this.state.newBuild.ap}</h3>
                    <button onClick={this.deleteBuild} value="DeleteBuild">Delete this Build</button>
                    <Link to={`/build`} ><button>Return to Builds</button></Link>
                </div>
            </div>
        )
    }
}
