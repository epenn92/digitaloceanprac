import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage.jsx'
import Champion from './components/Champion.jsx'
import SingleChampion from './components/SingleChampion.jsx'
import NewChampion from './components/NewChampion.jsx'
import ChampionItems from './components/ChampionItems.jsx'
import ChampionResults from './components/ChampionResults.jsx'
import AllResults from './components/AllResults.jsx'
import AllItems from './components/AllItems.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <Switch>
            <Route exact path="/homepage" Component={Homepage} />
            <Route path="/champion" Component={Champion} />
            <Route exact path="/champion/:championId" Component={SingleChampion} />
            <Route path="/champion/new" Component={NewChampion} />
            <Route path="/champion/items/:championId" Component={ChampionItems} />
            <Route path="/champion/results/:championId" Component={ChampionResults} />
            <Route path="/results" Component={AllResults} />
            <Route path="/items" Component={AllItems} />


          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
