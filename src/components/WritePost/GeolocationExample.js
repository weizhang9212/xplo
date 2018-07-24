import React, { Component } from 'react';


class GeolocationExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <div style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <span>Latitude: {this.state.latitude}</span>
        <span>Longitude: {this.state.longitude}</span>
        {this.state.error ? <span>Error: {this.state.error}</span> : null}
      </div>
    );
  }
}

export default GeolocationExample;