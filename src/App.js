import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'
import User from './pages/User'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import myStore from './config/store'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      members: [],
      events: [],
    }
  }

  componentDidMount() {

    
  }

  render() {
    const { members, events } = this.state

    return (
      <Provider store={myStore}>
        <BrowserRouter>
          <div style={{ paddingLeft: 16, paddingRight: 16 }}>

            <NavBar />
              <Route exact path="/" render={() => (
                <Home members={members} events={events}/>
              )} />
              <Route exact path="/about" component={About} />
              <Route path="/about/me" render={() => <h1>about me</h1>} />
              
              <Route path="/user/:id" component={User}/>
            <Footer />
          </div>
        </BrowserRouter>         
      </Provider>
    );
  }
}

export default App;
