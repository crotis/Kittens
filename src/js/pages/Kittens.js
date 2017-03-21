import React from "react";
import { IndexLink, Link } from "react-router";
import Fetch from 'react-fetch';

import KittenStore from "../../stores/KittenStore";

export default class Kittens extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        kitten: [],
      };
      propTypes: {
        onClick: React.PropTypes.func
      }
    }

    componentWillMount() {}

    componentDidMount() {
      return fetch('https://devtest.tailify.com/api/list')
        // .then(CheckHttpStatus)
          .then((response) => response.json())
          .then((responseJson) => {
            this.setState({
              kitten : Object.values(responseJson)
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
      console.log(this.state.kitten);
      var kitten = this.state.kitten.map((item, key) =>
        <Link to="paste">
          <li key={key}>
            <img style={{width: 200, height: 200}} src={'https://devtest.tailify.com/' + item.path}/>
          </li>
        </Link>);
      return (
        <div>
          <ul>{kitten}</ul>
          { this.props.children }
        </div>
      );
    }
  }
