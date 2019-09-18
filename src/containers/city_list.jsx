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

class CityList extends Component {
	render() {
    console.log(this)
		return (
			 <div className="col-sm-7">
       {this.props.cities.map(city => <City city={city} key={city.slug} />)}
       </div>
			)
	}
}

export default connect(null, mapDispatchToProps) (CityList);