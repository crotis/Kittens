import React from "react";
import { IndexLink, Link } from "react-router";
import Fetch from 'react-fetch';
import FileReaderInput from 'react-file-reader-input';

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
        filename: "",
        message: "",
      };
      //Binds postKitten method to this
      this.postKitten = this.postKitten.bind(this);
      this.arrayToString = this.arrayToString.bind(this);
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

    postKitten() {
      FileReaderInput

      var path  = "kitties/img1.jpg";
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

    //Converts array of chars into string and (effectively removing commers in textarea)
    arrayToString(arr){
      var str;
      var i;

      for (i=0; i<arr.length; i++){
        str += arr[i];
      }
      return str;
    }


  render (){
      console.log("RESPONSE KITTENS: " + this.state.kitten);
      console.log("RESPONSE POST: " + this.state.post);
      console.log("RESPONSE filename: " + this.state.filename);
      console.log("RESPONSE message: " + this.state.message);
      var kitten = this.state.kitten.map((item, key) =>
        <li key={key} data-columns="2">
            <img style={{width: 200, height: 200}} src={'https://devtest.tailify.com/' + item.path} onClick={this.postKitten}/>
        </li>
      );

      // const reactStringReplace = require('react-string-replace')
      // reactStringReplace('undefined', '', ({this.state.name}, i) => (
      //   <span>{match}</span>
      // ));

      //Converts array of chars into string and removes commers
      if (this.state.filename!=null){
        var name = this.arrayToString(this.state.filename);
        console.log("RESPONSE name: " + name);
      }

      //Converts array of chars into string and removes commers
      if (this.state.message!=null){
        var msg = this.arrayToString(this.state.message);
        console.log("RESPONSE msg: " + msg);
      }

      // var filename = this.state.filename.replace(",", "");
      // var message = this.state.message.replace(",", "");
      // var filename = this.state.filename.map((item, i, arr) => {
      //     let divider = i<arr.length-1 && <div>|</div>;
      //
      // var message = this.state.message.map((item, i, arr) => {
      //     let divider = i<arr.length-1 && <div>|</div>;


      return (
        <div>
          <h5>Click on your favorite picture and post to Tailify!</h5><br />
          <div class="cont1">
            <ul>{kitten}</ul>
          </div>
          <textarea rows="1" cols="32"  value = {name} placeholder={"Filename sent will show here"}></textarea>
          <br />
          <textarea rows="2" cols="32"  value = {msg} placeholder={"Return message will show here"}></textarea>
          { this.props.children }
        </div>
      );
    }
  }
