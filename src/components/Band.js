import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteBand} from '../actions/bandActions'

class Band extends Component {

  render() {
    debugger
    const {band: {id, name}, deleteBand} = this.props
    return(
      <li>
        {name}
        <button onClick={() => deleteBand(id)}>DELETE</button>
      </li>
    );
  }
};



export default Band
