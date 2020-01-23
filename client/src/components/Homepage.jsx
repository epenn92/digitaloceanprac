
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Homepage extends Component {

    render() {
        return (
            <div className="buttons">
                <h1 className="title">Welcome to my LeagueApp</h1>
                <div>
               <Link to="/item"><button>View All Items</button></Link>
               </div>
               <div>
               <Link to="/champion/new"><button>Create a Champion!</button></Link>
               </div>
               <div>
               <Link to="/build"><button>View All Builds</button></Link>
               </div>
               <div>
               <Link to="/champion"><button>View All Champions</button></Link>
                </div>
                <div>
                    <Link to="/item/new"><button>Create an Item!</button></Link>
                </div>
                <div>
                    <Link to="/rune/new"><button>Create a Rune!</button></Link>
                </div>
            </div>
        )
    }
}
