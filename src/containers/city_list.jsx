import React, { Component } from 'react';
import City from './city.jsx';

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

export default CityList;