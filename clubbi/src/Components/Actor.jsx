import React, { Component } from 'react'

class Actor extends Component {
  render() {
    return (
      <div className='style'>
        <input type="text" className="form-control" placeholder='Actor'/>
        <button type="submit" className="btn btn-outline-primary">Buscar ator</button>
      </div>

    )
  }
}

export default Actor;
