import React, { Component } from 'react';
import { connect } from 'react-redux';
import apiLocation from '../redux/actions';

 class Location extends Component {
  componentDidMount() {
    console.log(apiLocation()[0]);
  }
  render() {
    return (
      <div className='style'>
        <input type="text" className="form-control" placeholder='Location'/>
        <button type="submit" className="btn btn-outline-primary">Buscar locação</button>
      </div>
    )
  }
}

// const mapStateToProps = (state) => (

// );

const mapDispatchToProps = (dispatch) => (
  {
    locationInfo: () => dispatch()
  }
);

export default connect(null, mapDispatchToProps)(Location);
