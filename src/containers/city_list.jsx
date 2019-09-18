import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

import City from './city.jsx';

function mapDispatchToProps(dispatch) {
  return bindActionCreators (
    {setCities: setCities}, 
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  }
}


class CityList extends Component {

    
  state = {
    setCities: this.props.setCities()
  }
	render() {
		return (
			 <div className="col-sm-5">
       {this.props.cities.map(city => <City city={city} key={city.slug} />)}
       </div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (CityList);