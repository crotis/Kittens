import React from "react";
import { IndexLink, Link } from "react-router";
import Fetch from 'react-fetch';

import * as KittenAction from "../actions/KittenActions"
import KittenStore from "../stores/KittenStore";

//Component handles retrieval and rendering of Kitten images
export default class Kittens extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //Array in which Kitten URL's are saved after component mounts
        //Data initialized via method: componentDidMount
        kitten: [],
      };
    }

    //Triggered when component mounts, gets Kitten URL's from devtest API
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

          //Creates Kittens in KittenStore
          // this.createKitten.bind(this) = this.state.kitten;
    }
    //Currently unecessary state change methods
    // componentWillMount() {}
    // componentWillReceiveProps(nextProps) {}
    // componentWillUpdate(nextProps, nextState) {}
    // componentWillUnmount() {}


    render (){
      console.log(KittenStore.getAll());
      var kitten = this.state.kitten.map((item, key) =>
        <li key={key} data-columns="2"> 
          <Link to="paste"><img style={{width: 200, height: 200}} src={'https://devtest.tailify.com/' + item.path}/></Link>
        </li>
      );

      return (
        <div>
          <h3>Choose a Kitten to sent to PasteBin!</h3>
          <ul>{kitten}</ul>
          { this.props.children }
        </div>
      );
    }
  }
