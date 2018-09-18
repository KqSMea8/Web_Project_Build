import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { push } from "connected-react-router";

import { setDemoData } from "../../../redux/actions/demo";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.setDemoData()}>
          change the value
        </button>
        <br />
        <br />
        <br />
        <button onClick={() => this.props.dispatch(push("/about"))}>
          arrive about page
        </button>
        <br />
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <br />
        <br />
        <button onClick={() => this.setState({ value: "重制value" })}>
          重制value
        </button>
        {this.props.demoData.map(item => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  demoData: state.demo.demoData
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      setDemoData
    },
    dispatch
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
