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
      sends a GET request to DevTests API and recieves the image paths in the response. The JSON array is
      iterated through and img tages are created for each path and injected into the HTML.
     </p>

     <p>
        The user is then able to click any of these images. Upon doing so a POST request is sent to the
        DevTest API and the response is made availible in the textarea's. This also required converting an
        array of characters to a string (which also got rid of all the commers in the response). I refactored
        this method into Util/Tools and imported it into the class.
    </p>
    <p>
        The 'Info' component just provides a fun page to read this information, which is also in the
        'README.md'file in the GitHub Repository.
    </p>

        <h3>Further Development:</h3>
        <p>
          I'm in the process of removing the "undefined" text which appears in the textbox before the POST response.
          I think the problem occurs when the components state updates after the second API call.
       </p>

       <p>
          I usually add unit and integration tests to my code as I go (TDD style). However since I was using a new
	        framework I thought this might be abit much to begin with. Though in retrospect I think it would of helped
	        me rather than hindered me! Unfortunately I haven't yet managed to add the tests. I have looked into testing
	        using Enzym, Expect and Mocha and will be adding them over the next day or so as well as cleaning up the code
	        and improving on the UI.
       </p>

     <h3>Developer Concers:</h3>
     <h4>
       Requirments (These should all be installed via npm in the projects working directory):
     </h4>
     <li>React</li>
     <li>react-router (For directing between components)</li>
     <li>webpack - Bundler for modules, also allows live updating of application via command
         "webpack --watch"</li>

     <h4>Scripts:</h4>
     <p>
       I added "dev: {"webpack-dev-server --content-base src --inline --hot"} to package.json
       This will allow for simpler compilation: simply run the command "npm run dev"
     </p>
     <h4>Development:</h4>
     <p>When developing, run in seprate terminals the following commands (Their uses are described above):
     </p>
     <p>When developing, run the following commans in seperate terminals</p>
     <li>npm run dev </li>
     <li>watchman --watch</li>
     </div>
     </div>
   );
 }
}
