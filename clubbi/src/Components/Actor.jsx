import React, { Component } from 'react';

class Locations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      people: [],
      gender: '',
      age: ''
    }

    this.myLocationApi = this.myLocationApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async myLocationApi() {
    const response = await fetch("https://ghibliapi.herokuapp.com/people");
    const data = await response.json();
    return this.setState({
      people: data
        .filter(({ name }) => name.toLocaleUpperCase().includes(this.state.name.toLocaleUpperCase()))
    })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ name: e.target.value })
  }

  componentDidMount() {
    this.myLocationApi();
  }

  componentDidUpdate() {
    this.myLocationApi();
  }

  render() {
    if (this.state.people.length === 0 && this.state.name === '') {
      return (<h1 id="loading">Loading...</h1>)
    }

    return (
      <div className='div-input'>
        <input
          type="text"
          name={this.state.name}
          value={this.state.name}
          onChange={this.handleChange}
          placeholder='Pesquise por personagem'
          className="form-control"
        />
        <a href="films" className="btn btn-outline-primary">Films</a>
        <a href="location" className="btn btn-outline-primary">Location</a>
        <div id='grade'>
          {this.state.people.map(({ name }, index) => (
            <h3 key={index} className='list'>
              {name}
            </h3>
          ))}
        </div>
      </div>
    )
  }
}

export default Locations;