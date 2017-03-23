import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    // const kittensClass = location.pathname === "/" ? "active" : "";
    // const pasteClass = location.pathname.match(/^\/paste/) ? "active" : "";
    // const infoClass = location.pathname.match(/^\/info/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (

  <header>
    <div class="container">


        <t1>KITTEN-PASTE!</t1>

      <nav>
        <ul>
        <li>
        <a>
          <Link to="/" onClick={this.toggleCollapse.bind(this)}>Kittens</Link>
          </a>
        </li>
        <li>
        <a>
          <Link to="info" onClick={this.toggleCollapse.bind(this)}>Info</Link>
          </a>
        </li>
        </ul>
      </nav>
    </div>
  </header>

      // <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
      //   <div class="container">
      //     <div class="navbar-header">
      //       <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
      //         <span class="sr-only">Toggle navigation</span>
      //         <span class="icon-bar"></span>
      //         <span class="icon-bar"></span>
      //         <span class="icon-bar"></span>
      //       </button>
      //     </div>
      //     <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
      //       <ul class="nav navbar-nav">
      //         <li activeClassName="active" onlyActiveOnIndex={true}>
      //           <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Kittens</IndexLink>
      //         </li>
      //         <li activeClassName="active">
      //           <Link to="info" onClick={this.toggleCollapse.bind(this)}>Info</Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}
