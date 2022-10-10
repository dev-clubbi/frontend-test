import React, { Component } from 'react'

 class Films extends Component {
  render() {
    return (
      <div className='style'>
        <input type="text" className="form-control" placeholder='Films'/>
        <button type="submit" className="btn btn-outline-primary">Buscar</button>
      </div>
    )
  }
}

export default Films;
