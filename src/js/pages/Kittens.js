import React from "react";
import { IndexLink, Link } from "react-router";

import Fetch from 'react-fetch';

export default class Kittens extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        kitties : [],
      };
      propTypes: {
        onClick: React.PropTypes.func
      }
    }

    navigate() {
      console.log("I will be executed, only if props.onClick was not specified");
    }

    passInfo() {
      console.log("passInfo");
    }

    componentWillMount() {}

    componentDidMount() {
      return fetch('https://devtest.tailify.com/api/list')
        // .then(CheckHttpStatus)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({

              kitties : Object.values(responseJson)
            });
          })
          .catch((error) => {
            console.error(error);
          });
    }
    componentWillReceiveProps(nextProps) {}
    componentWillUpdate(nextProps, nextState) {}
    componentWillUnmount() {}


    render (){
      var kitties = this.state.kitties.map((item, key) =>
        <Link to="paste">
          <li key={key}>
            <img style={{width: 200, height: 200}} src={'https://devtest.tailify.com/' + item.path} onClick={this.navigate()}/>
          </li>
        </Link>);

      return (
        <div>
          <ul>{kitties}</ul>
          { this.props.children }
        </div>
      );
    }
  }
