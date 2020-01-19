
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Homepage extends Component {

    render() {
        return (
            <div className="buttons">
                <h1>Welcome to my LeagueApp</h1>
                <div>
               <Link to="/items"><button>View All Items</button></Link>
               </div>
               <div>
               <Link to="/champion/new"><button>Create a Champion!</button></Link>
               </div>
               <div>
               <Link to="/results"><button>View All Results</button></Link>
               </div>
               <div>
               <Link to="/champion"><button>View All Champions</button></Link>
                </div>
            </div>
        )
    }
}
