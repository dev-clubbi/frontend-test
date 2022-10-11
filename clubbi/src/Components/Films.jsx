import React, { Component } from 'react'
import '../App.css';


 class Films extends Component {
  constructor () {
    super();
    this.state = {
      title: '',
      films: []
    }

    this.myFilmsApi = this.myFilmsApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async myFilmsApi() {
    const response = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = await response.json();
    return this.setState({ films: data
      .filter(({title}) => title.toLocaleUpperCase().includes(this.state.title.toLocaleUpperCase()) ) })
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ title: e.target.value })
  }

  componentDidMount() {
    this.myFilmsApi();
  }

  componentDidUpdate() {
    this.myFilmsApi();
  }

  render() {
    if (this.state.films.length === 0 && this.state.title === '') {
      return(<h1 id='loading'>Loading</h1>)
    }

    return (
      <div className='div-input'>
        <input
          type="text"
          name={this.state.title}
          value={this.state.title}
          onChange={this.handleChange}
          className="form-control"
          placeholder='Pesquise por filme'
        />
        
        <a href="actor" className="btn btn-outline-primary">Actor</a>
        <a href="location" className="btn btn-outline-primary">Location</a>
        <div className='cards'>
          { this.state.films.map(({ title, image, description, director, release_date }) => (
            <div key={title} id='films-card'>
              <h1>{ title }</h1>
              <img src={ image } alt={ title } className='films-image'/>
              <h4> <strong>Ano de criação:</strong> { release_date }</h4>
              <p className='description'> <strong> Descrição:</strong> { description }</p>
              <h4> <strong> Diretor:</strong> { director }</h4>
            </div>
          )) }
        </div>
      </div>
    )
  }
}

export default Films;
