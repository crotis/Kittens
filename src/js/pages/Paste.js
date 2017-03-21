import React from "react";
import Fetch from 'react-fetch';
import KittenList from './containers/kitten-list';
import getTextFromFile from '../Util/Tools';

export default class Paste extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username : "",
      password : "",
      data : ""
    };
  }

  handleSubmit(e) {
   //TRIGGER POST
  }

  handleUsernameChange() {
    this.setState({ username: e.target.value });
  }

  handleUsernameChange() {
    this.setState({ password: e.target.value });
  }

  componentWillMount() {}

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

  componentWillUpdate(nextProps, nextState) {}
  componentWillUnmount() {}

  render() {
    return (
      <div>
      <div id="stylized" class="myform">
        <form>

          <div class="column">
            <br />
              <label>
                Username:
                <br />
                <input type="text" name="name" value={this.state.username} onChange={this.handleUsernameChange} />
              </label><br />
              <label>
                Password:
                <br />
                <input type="text" name="name" value={this.state.email} onChange={this.handllePasswordChange}/>
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
      </div>
    );
  }
}
