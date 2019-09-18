import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setActiveCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {setActiveCity: setActiveCity}, 
    dispatch
    );
  }

function mapStateToProps (state) {
  return {
    activeCity: state.activeCity
  }
}

class City extends Component {

  selectCity = () => {
    this.props.setActiveCity(this.props.city)
  }

	render() {
    const image = `https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`
		return(
      <div className="card-product" onClick={this.selectCity}>
        <img src={image} />
        <div className="card-product-infos">
          <h2>{this.props.city.name}</h2>
          <p>{this.props.city.address}</p>
        </div>
      </div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (City);