import React from 'react';

import {
    updateSearchCity,
    fetchData
} from './selectedActions';

export default class SelectedCities extends React.Component {
    constructor(props) {
        super(props);

        this.clickHandler=this.clickHandler.bind(this);
        this.handlePlayerInput=this.handlePlayerInput.bind(this);
    }

    handlePlayerInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;

        dispatch(updateSearchCity(value));
    }

    clickHandler(event){
        if(event.target.value) {
        const { value } = event.target;
        const { dispatch } = this.props;
        
        dispatch(fetchData(value));
        }
        else {
            return alert('Please enter a value for city and try again!');
        }
    }

    render() {
        const { city } = this.props;
        return(
            <div className='col-12 mb-3'>
                <div className='btn-group btn-group-toggle' data-toggle='buttons'>
                    <button className='btn btn-primary' value='Clatyon Kershaw' onClick={this.clickHandler}>Clatyon Kershaw</button>
                    <button className='btn btn-primary' value='Justin Verlander' onClick={this.clickHandler}>Justin Verlander</button>
                    <button className='btn btn-primary' value='Corey Kluber' onClick={this.clickHandler}>Corey Kluber</button>
                    <button className='btn btn-primary' value='Max Scherzer' onClick={this.clickHandler}>Max Scherzer</button>
                    <button className='btn btn-primary' value='Zach Greinke' onClick={this.clickHandler}>Zach Greinke</button>
                    
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" aria-label="player-name" value={ city } placeholder='Player Name...' aria-describedby="basic-addon2" onChange={this.handlePlayerInput} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" value={ city } onClick={this.clickHandler}>Go!</button>
                    </div>
                </div>
            </div>
        );
    }
}
