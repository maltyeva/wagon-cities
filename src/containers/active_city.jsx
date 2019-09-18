import React, { Component } from 'react';
import {connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  }
}
class ActiveCity extends Component {
  render() {
    console.log(this.props)
    let activeCity = null;
    let imageUrl = null;

    if (this.props.activeCity) {
      activeCity = <div><h2>{this.props.activeCity.name}</h2>
                    <p>{this.props.activeCity.address}</p>
                    </div>
      imageUrl = `https://kitt.lewagon.com/placeholder/cities/${this.props.activeCity.slug}`
    }

    return(
      <div>
      { activeCity }
      <img src={imageUrl} className="active-image" />
      </div>
      )
  }
}

export default connect(mapStateToProps) (ActiveCity);