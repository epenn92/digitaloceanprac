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
                // }, () => {
                //     this.sortBuildsBy()
                })
                console.log(res.data)
            })
    }

    // sortBuildsBy = () => {
    //     let builds = this.state.builds
        
    //     // builds.sort((a,b) => a.name.localeCompare(b.name))
    // }

    

    render() {
        return (
            <div>
                <h1>View All Builds</h1>
                {console.log(this.state.builds)}
                {this.state.builds.map((build) => {
                    return ( 
                        <div>
                            <h3>Build Name:{build.buildName}</h3>
                            <h3>{build.buildAd}</h3>
                            <h3>{build.buildAp}</h3>
                            <h3>{build.championId}</h3>

                            <Link to={`/build/${build._id}`}><button>View This Build</button> </Link>
                        </div>
                    )
                })}
                <Link to={`/`}><button>Home</button></Link>
            </div>
        )
    }
}
