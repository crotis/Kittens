import React from "react";
import ReactDOM from 'react-dom';
import { Link } from "react-router";
import thunk from 'react-redux';
import promise from 'redux-promise';
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

//Contains and handles the layout of all other components
export default class Layout extends React.Component {
  render() {
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>
        <Nav location={location} />
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
