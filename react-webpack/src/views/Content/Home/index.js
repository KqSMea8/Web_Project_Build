import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setDemoData } from "../../../redux/actions/demo";
import store from "../../../redux/store";

const mapStateToProps = state => ({
  demoData: state.demo.demoData
});

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <button onClick={() => store.dispatch(setDemoData())}>
          change the value
        </button>
        {this.props.demoData.map(item => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Home));
