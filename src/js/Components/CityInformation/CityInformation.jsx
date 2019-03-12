import React from 'react';

class CityInformation extends React.Component {
    render(){
      const { playerInfo, playerStats, fbCount, weatherIcon, error } = this.props;
      let url = `http://openweathermap.org/img/w/${weatherIcon}.png`;
      //const fastball = fbCount.count;
      //const overAllCount = playerStats.overall.count
      //const fbUsage = Math.round((fastball/overAllCount)*100);

        return(
            <div className='card'>
                <div className='card-header bg-info'>Player Information</div>
                <div className='card-body text-center'>{ error ? <h1 className='error'>Player not found. Please try again!!</h1> : ''}
                  <h1 className='card-title'>
                  {/* { playerInfo ? <img src={ url } alt="Weather Icon"/> : ''} */}
                  { playerInfo ? playerInfo.full_name : 'Choose a Player or Search'} </h1>
                  {/* <p className='card-text'> { playerInfo ? 'Lat/Lon: ' + playerInfo + ',' + playerInfo.coord.lon : 'Coordinates' }</p> */}
                  <hr className='m-1' />
                  <div className='row'>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Height</p>
                      <h5 className='values'>{ playerInfo ? playerInfo.height + 'in': 'in' }</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Weight</p>
                      <h5 className='values'>{ playerInfo ? playerInfo.weight + 'lbs' : 'lbs' }</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>Throw Hand</p>
                      <h5 className='values'>{ playerInfo ? playerInfo.throw_hand + '✋' : '✋' }</h5>
                    </div>
                  </div>
                  <div className='buffer'></div>
                  <div className='row'>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>FastBall Average Speed</p>
                      <h5 className='values'>{ playerStats ? playerStats.pitch_types[2].avg_speed + 'mph': 'mph' }</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>FastBall Max Speed</p>
                      <h5 className='values'>{ playerStats ? playerStats.pitch_types[2].max_speed + 'mph': 'mph' }</h5>
                    </div>
                    <div className='col-sm-4 text-center'>
                      <p className='font-weight-bold'>FastBall Usage</p>
                      <h5 className='values'>{ playerStats ? '43.6%': '%' }</h5>
                    </div>
                  </div>
                </div>
              </div>

        );
    }
}

export default CityInformation;