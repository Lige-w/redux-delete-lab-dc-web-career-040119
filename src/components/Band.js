import React, { Component } from 'react';
import {connect} from "react-redux";
import {deleteBand} from '../actions/bandActions'

class Band extends Component {

  render() {
    const {band: {name}} = this.props
    return(
      <li>
        {name}
      </li>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  deleteBand: (id) => ({
    type: "DELETE_BAND",
    id
  })
})


export default connect()(Band);
