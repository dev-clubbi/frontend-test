import React, { Component } from 'react';

class Locations extends Component {
  constructor(props) {
    super(props);

    this.state = {
        name: '',
        locations: [],
    }

    this.myLocationApi = this.myLocationApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  async myLocationApi() {
    const response = await fetch("https://ghibliapi.herokuapp.com/locations");
    const data = await response.json();
    return this.setState({ locations: data
      .filter(({name}) => name.toLocaleUpperCase().includes(this.state.name.toLocaleUpperCase()) ) })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ name: e.target.value})
  }

  componentDidMount() {
    this.myLocationApi();
  }

  componentDidUpdate() {
    this.myLocationApi();
  }
    
  render() {
    if (this.state.locations.length === 0 && this.state.name === '') {
      return(<h1 id="loading">Loading...</h1>)
    }

    return (
      <div>
        <input
          type="text"
          name={this.state.name}
          value={this.state.name}
          onChange={this.handleChange}
        />

        <div id='grade'>
          { this.state.locations.map(({ name }, index) => (
            <h3 key={index} className='locationList'>
              {name}
            </h3>
          )) }
        </div>
      </div>
    )
  }
}

export default Locations;