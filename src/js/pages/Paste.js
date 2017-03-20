import React from "react";
import Fetch from 'react-fetch';
import KittenList from './containers/kitten-list';

export default class Paste extends React.Component {
  constructor(props) {
    super(props);

    // this.handleUsernameChange = this.changeContent.bind(this);
    // this.handllePasswordChange = this.changeContent.bind(this);

    this.state = {
      // kitties : [],
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
    console.log("componentDidMount");
    var data = this;
    console.log(data);
    this.setState({ data : this.props.params.testValue })
  }

  componentWillReceiveProps(nextProps) {
    // fetch('http://pastebin.com/api/api_post.php', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       firstParam: 'yourValue',
    //       secondParam: 'yourOtherValue',
    //   })
    // })
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
