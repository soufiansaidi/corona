import React from 'react'

import Header from './components/Header'
import FilterForm from './components/FilterForm'
import CountriesSwiper from './components/CountriesSwiper'
import StatusCounter from './components/StatusCounter'
import Share from './components/Share'

// import Coronavirus from './img/coronavirus.png'

const App = () => {
  return (
    <div className="container">
      
      <div className="half-page">
          <Header />
        
          <StatusCounter />
      </div>

      <div className="half-page">
        <FilterForm />
        <CountriesSwiper />
      </div>

      <Share />
      
    </div>
  );
}

export default App;
