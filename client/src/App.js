import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Homepage from './components/Homepage.jsx'
import Champion from './components/Champion.jsx'
import SingleChampion from './components/SingleChampion.jsx'
import NewChampion from './components/NewChampion.jsx'
import BuildPage from './components/BuildPage.jsx'
import AllBuilds from './components/AllBuilds.jsx'
import AllItems from './components/AllItems.jsx'
import UpdateChampion from './components/UpdateChampion.jsx'
import NewItem from './components/NewItem.jsx'
import UpdateItem from './components/UpdateItem.jsx'
import SingleItem from './components/SingleItem.jsx'
import SingleBuild from './components/SingleBuild.jsx'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='siteContainer'>
          <Router>
            <div className='Routes'>
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/champion" component={Champion} />
                <Route exact path="/champion/new" component={NewChampion} />
                <Route exact path="/champion/edit/:championId" component={UpdateChampion} />
                <Route exact path="/champion/:championId" component={SingleChampion} />
                <Route exact path="/champion/items/:championId" component={BuildPage} />
                <Route exact path="/build" component={AllBuilds} />
                <Route exact path="/build/:buildId" component={SingleBuild} />
                <Route exact path="/item" component={AllItems} />
                <Route exact path="/item/new" component={NewItem} />
                <Route exact path="/item/edit/:itemId" component={UpdateItem} />
                <Route exact path="/item/:itemId" component={SingleItem} />
              </Switch>
            </div>
          </Router>
          <div className="wrap">
            <nav className="navbar">
              <ul className="navbarOptions">

                <li><a href="/">Home</a></li>
                <li><a href="/champion">All Champions</a></li>
                <li><a href="/item">All Items</a></li>
                <li><a href="/build">Your Builds</a></li>


              </ul>
            </nav>

          </div>




        </div>
        <footer id='footer'>
          <nav className="footerNavbar">
            <ul className="footerNavbarOptions">
              <li><p className="thanks">Thanks for visiting</p></li>
              <li className="socialMedia">
                <button className="icon"><a href="" className="fa fa-twitter"></a></button>
                <button className="icon"><a href="" className="fa fa-facebook"></a></button>
                <button className="icon"><a href="" className="fa fa-linkedin"></a></button>
                <button className="icon"><a href="" className="fa fa-github"></a></button>
                <button className="icon"><a href="" className="fa fa-rss"></a></button>
              </li>
              <li><p className="followUs">Follow us</p></li>
            </ul>
          </nav>
        </footer>
      </div>


    );
  }
}

export default App;
