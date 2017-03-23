import React from "react";
import { IndexLink, Link } from "react-router";
import Fetch from 'react-fetch';

import * as KittenAction from "../actions/KittenActions"
import arrayToString from "../Util/Tools";

//Component handles retrieval and rendering of Kitten images
export default class Kittens extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        //Array in which Kitten URL's are saved after component mounts
        //Data initialized via method: componentDidMount
        kitten: [],
        filename: "",
        message: "",
      };
      //Binds postKitten method to this
      this.postKitten = this.postKitten.bind(this);
    }

    //Triggered when component mounts, gets Kitten URL's from devtest API
    componentDidMount() {
      return fetch('https://devtest.tailify.com/api/list')
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

    postKitten(itemPath) {
      // var path  = "kitties/img1.jpg";
      var path = itemPath;
      //Usually I'd never hardcore a key in but for simplicity
      var key = "2d9fec7ea5adf12306b7476a45c84990"
      var url = "https://devtest.tailify.com/api/upload/" +
                "?filename=" + path +
                "&pastebin_api_key=" + key;
      fetch(url, {
        method: 'POST',
        headers: {
        },
        body: JSON.stringify({
        })
        }).then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            filename: Object.values(responseJson.filename),
            message: Object.values(responseJson.message),
          });
      })
      .catch((responseJson) => {
        this.setState({
          filename: Object.values(responseJson.filename),
          message: Object.values(responseJson.message),
        });
      });
    }

  render (){
      console.log("RESPONSE KITTENS: " + this.state.kitten);
      console.log("RESPONSE POST: " + this.state.post);
      console.log("RESPONSE filename: " + this.state.filename);
      console.log("RESPONSE message: " + this.state.message);

      //Adds unique keys to Kitten array
      //Maps Array of Kitten paths into nested image tags.
      var kitten = this.state.kitten.map((item, key) =>
        <li key={key} data-columns="2">
            <img style={{width: 200, height: 200}} src={'https://devtest.tailify.com/' + item.path} onClick={() =>this.postKitten(item.path)}/>
        </li>
      );

      //Converts array of chars into string and removes commers
      if (this.state.filename!=null){
        var name = arrayToString(this.state.filename);
        console.log("RESPONSE name: " + name);
      }

      //Converts array of chars into string and removes commers
      if (this.state.message!=null){
        var msg = arrayToString(this.state.message);
        console.log("RESPONSE msg: " + msg);
      }

      return (
        <div>
          <h5>Click on your favorite picture and post to Tailify!</h5>
          <div class="cont1">
            <ul>{kitten}</ul>
          </div>
          <h5>API Response:</h5>
          <textarea rows="1" cols="32"  value = {name} placeholder={"Filename sent will show here"}></textarea>
          <br />
          <textarea rows="2" cols="32"  value = {msg} placeholder={"Return message will show here"}></textarea>
          { this.props.children }
        </div>
      );
    }
  }
