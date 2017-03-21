import React from "react";
import Fetch from 'react-fetch';

import KittenList from '../containers/kitten-list';
import getTextFromFile from '../Util/Tools';
import KittenStore from "../stores/KittenStore";

//Allows user to POST to PasteBin API
export default class Paste extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Paste bin user information
      username : "",
      password : "",
      data : "",
      //Array in which Kitten URL's are saved after component mounts
      //Data initialized after image clicked in Kitten component
      kitten: KittenStore.getAll(),
    };
  }

  //Submit POST to pastebin onClick: submit
  handleSubmit(e) {
  }

  //Updates state of username
  handleUsernameChange() {
    this.setState({ username: e.target.value });
  }

  //updates state of password
  handleUsernameChange() {
    this.setState({ password: e.target.value });
  }

  //Triggered when component mounts, posts data to PasteBin
  //Currently get bad response
  componentDidMount() {
    // fetch('http://pastebin.com/api/api_post.php', {
    //   method: 'POST',
    //   //This alows us to overcome Access-Control-Allow-Origin issue
    //   mode: 'no-cors',
    //   headers: {
    //      "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   body: JSON.stringify({
    //      api_dev_key: getTextFromFile("../../../DevKey"),
    //     api_option: 'paste',
    //     api_paste_code: 'test',
    //   })
    //
    // })
    //   .then(function(response) {
    //     console.log(response);
    //   }).catch(function(error) {
    //     console.log('Request failed', error)
    //   });
  }

  //Currently unsed state-change methods
  // componentWillMount() {}
  // componentWillUpdate(nextProps, nextState) {}
  // componentWillUnmount() {}

  render() {
    return (
      <div>
      <h3>Input your PasteBin User Credentials!</h3>
      <div id="stylized" class="myform">
        <form>
          <div class="column">
            <br />
              <label>
                Username:
                <br />
                <input type="username" name="name" value={this.state.username} onChange={this.handleUsernameChange} />
              </label><br />
              <label>
                Password:
                <br />
                <input type="password" name="password" value={this.state.email} onChange={this.handllePasswordChange}/>
              </label><br />
            <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
            <br />
          </div>
          <div class="column">
          <br />
            <textarea rows="1" placeholder={this.state.data}></textarea>
          </div>
        </form>
        </div>
        {this.props.kitten}
      </div>
    );
  }
}
