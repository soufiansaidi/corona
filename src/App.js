import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DataContextProvider } from './Context/DataContext'
import { ApplicationContextProvider } from './Context/ApplicationContext'

import Header from './Components/Header'
import Menu from './Components/Menu'
import Share from './Components/Share'

import Home from './Pages/Home'
import Deaths from './Pages/Deaths'
import Recovered from './Pages/Recovered'
import Cases from './Pages/Cases'
import Informations from './Pages/Informations'

const App = () => {
  return (
    <ApplicationContextProvider>
      <DataContextProvider>
        <Router>
          <div className="container">
            <Header />
            <Menu />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/deaths" component={Deaths} />
              <Route path="/recovered" component={Recovered} />
              <Route path="/cases" component={Cases} />>
              <Route path="/informations" component={Informations} />
            </Switch>
            <Share />
          </div>
        </Router>
      </DataContextProvider>
    </ApplicationContextProvider>
  );
}

export default App;
