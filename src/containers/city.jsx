import React, { Component } from 'react';

class City extends Component {
	render() {
    const image = `https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`
		return(
      <div className="card-product">
        <img src={image} />
        <div className="card-product-infos">
          <h2>{this.props.city.name}</h2>
          <p>{this.props.city.address}</p>
        </div>
      </div>
			)
	}
}

export default City;