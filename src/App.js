import React from 'react';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Portfolio } from './Portfolio';
import { NoMatch } from './NoMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from './components/Navigation';




class App extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Navigation />
        <Router>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route component={NoMatch} />
        </Switch>
      </Router>
      </React.Fragment>
    )

  }
}

export default App;