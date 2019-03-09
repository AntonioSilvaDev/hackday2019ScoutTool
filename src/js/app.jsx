import React from 'react';
import SelectedCities from './Components/SelectedCities';
import CityInformation from './Components/CityInformation';
import SearchHistory from './Components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron header' >
          <h1 className='display-3 text-center'>Scout Em'</h1>
          <h4 className='lead text-center'>Scouting Report Tool</h4>
        </div>
        <div className='row'>
          <SelectedCities />
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <CityInformation />
          </div>
          <div className='col-sm-6'>
            <SearchHistory />
          </div>
        </div>  
      </div>
    );
  }
}
