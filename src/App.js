import React, { useState, useEffect } from 'react';

import Cases from './img/cases.svg';
import Death from './img/death.svg';
import Recovered from './img/death.svg';

import Uae from './img/united-arab-emirates.svg';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://3.15.26.157:8000/api/v1/admin/sites/corona/ar")
    .then(res => res.json())
    .then( data => setData(data) )
  }, [])
  

  console.log(data.entries.length)

  return (

    <div className="container">
      <div className="statistics-generale">
        <div className="single-static">
          <img src={ Cases } alt="الحالات" />
          <div className="wrap cases">
            <h3>الحالات</h3>
            <div>{ data.total_cases }</div>
          </div>
        </div>
        <div className="single-static">
          <img src={ Death } alt="الموت" />
          <div className="wrap death">
            <h3>الموت</h3>
            <div>{ data.total_deaths }</div>
          </div>
        </div>
        <div className="single-static">
          <img src={ Recovered } alt="تعافى" />
          <div className="wrap recovery">
            <h3>تعافى</h3>
            <div>{ data.total_deaths }</div>
          </div>
        </div>
      </div>
      {
        (data.entries.length > 0) && 
        (
          <div className="countries">
            <ul>
              { 
                data.entries.map(
                  (entry, i) => (
                    <li key={i}>
                      <img src={ Uae } alt="flag" />
                      <div className="country-statics">
                        <div className="cases">{ entry.cases }</div>
                        <div className="death">{ entry.deaths }</div>
                        <div className="recovery">{ entry.recovered }</div>
                      </div>
                    </li>
                  )
                )
              }
            </ul>
          </div>
        )
      }
    </div>
  );
}

export default App;
