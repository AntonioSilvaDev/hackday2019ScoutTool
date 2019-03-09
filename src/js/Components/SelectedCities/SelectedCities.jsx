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
                    <button className='btn btn-primary' value='d3351c6e-12cf-4ab5-b651-ad23d49c4245' onClick={this.clickHandler}>Clatyon Kershaw</button>
                    <button className='btn btn-primary' value='2fe6cb9b-c41e-4ee2-9b22-f8b27bf6c5be' onClick={this.clickHandler}>Justin Verlander</button>
                    <button className='btn btn-primary' value='48982279-0e43-4d94-95fb-fd5e623b54b6' onClick={this.clickHandler}>Corey Kluber</button>
                    <button className='btn btn-primary' value='2527770b-cf48-42b9-81fa-9323756fb311' onClick={this.clickHandler}>Max Scherzer</button>
                    <button className='btn btn-primary' value='ba554801-7322-487c-a998-74fd132712e8' onClick={this.clickHandler}>Zach Greinke</button>
                    <button className='btn btn-primary' value='8efcf551-b514-4aed-a52b-94c3c8bbcdde' onClick={this.clickHandler}>Phil Maton</button>
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
