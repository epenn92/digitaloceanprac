import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class AllBuilds extends Component {

    state = {
        builds: [],
    }

    componentDidMount = () => {
        axios.get('/build')
            .then((res) => {
                this.setState({
                    builds: res.data
                })
            })
    }

    render() {
        return (
            <div>
                <h1>View All Builds</h1>
                {this.state.builds.map((build) => {
                    return ( 
                        <div>
                            {console.log(build)}
                            
                            <h3>{build._id}</h3>
                            <h3>{build.ad}</h3>
                            <h3>{build.ap}</h3>
                        </div>
                    )
                })}
                <Link to={`/`}><button>Home</button></Link>
            </div>
        )
    }
}
