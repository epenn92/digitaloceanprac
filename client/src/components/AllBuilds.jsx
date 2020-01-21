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
                            <h3>{build.name}</h3>
                            <h3>{build.ad}</h3>
                            <h3>{build.ap}</h3>
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
