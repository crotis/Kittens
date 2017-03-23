import React from "react";

//Component provides information for users to read
export default class Info extends React.Component {
  render() {
    console.log("info");
    return (
      <div >
      <br />

      <div class="cont1">
        <h3>My Message:</h3>
        <p>
          Hey guys! I've had a great time developing the application I now lovingly call "Kitty-Paste!".
          There was a slight learning curve at first with React but I've come to really enjoy using the Library
          so I hope that my work is to your satisfaction!
        </p>

        <h3>View Application:</h3>
        <p>
          I don't currently have a server I can use so we will be running the Application in localhost.
	        Clone the repository to your desired directory.
	        Go to kittens/src then open Index.html (preferebly in chrome)
        </p>

        <h3>The Application:</h3>
       <p>
          The components are structured into a single paged application in 'index.js' using
          React libraries (Router, Route, IndexRoute & hashHistory).
      </p>

      <p>
        The 'Layout' component simply handles the overall layout of all other components:
	      (Kitten, Info, Header and Footer).
     </p>

     <p>
        The Kitten component is where the real fun happens! When this component mounts it automatically
        sends a GET request to DevTests API and receives the path of each image. The JSON array is
        iterated through and "img" tags are created for each path, wrapped and injected into the HTML.
    </p>

    <p>
      The user is then able to click any of these images. Upon doing so a POST request is sent to the
      DevTest API and the response is made visible in the text-areas bellow. This also required
      converting an array of characters to a string. I refactored this method into Util/Tools.
    </p>

    <p>
      The 'Info' component just provides a fun page to read this information, which is also availible
    	in the 'README.md'file in the GitHub Repository.
    </p>

        <h3>Further Development:</h3>
        <p>
          I usually add unit and integration tests to my code as I go (TDD style). However since I was using a new
          framework I thought this might be little much to begin with. Though in retrospect I think it would of helped
          me rather than hindered me! Unfortunately I haven't yet managed to add the tests. I have however between
          looking into testing using Enzym, Expect and Mocha.
       </p>
     </div>
     </div>
   );
 }
}
