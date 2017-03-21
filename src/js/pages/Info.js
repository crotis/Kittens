import React from "react";

//Component provides information for users to read
export default class Info extends React.Component {
  render() {
    console.log("info");
    return (
      <div>
        <h3>My Message:</h3>
            <p> hey guys! Ive had a great time developing this application, although since i have very little
	              experianced with React, JS and even with web-development in general it has meant for quite a steep
	              learning curve in such a short period!
            </p>


      </div>
    );
  }
}
