
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


export default class Homepage extends Component {

   
    state = {
        
    }

   
    componentDidMount() {

    }

   
    render() {
        return (
            <div>
               <Link path="/items"><button>View All Items</button></Link>
               <Link path="/champion/new"><button>Create a Champion!</button></Link>
               <Link path="/results"><button>View All Results</button></Link>
               <Link path="/champion"><button>View All Champions</button></Link>
            
            </div>
        )
    }
}
