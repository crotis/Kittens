import React from "react";

//Component provides information for users to read
export default class Info extends React.Component {
  render() {
    console.log("info");
    return (
      <div>
      <br />
        <h3>My Message:</h3>
        <p> hey guys! Ive had a great time developing this application, although since i have very little
	          experianced with React, JS and even with web-development in general it has meant for quite a steep
	          learning curve in such a short period!
        </p>
        <h3>View Application:</h3>
        <p> I dont currently have a server I can use so we will be running the Application in localhost.
	          Clone the repository to your desired directory.
	          Go to kittens/src then open Index.html
        </p>
        <h3>The Application:</h3>
        <p>
        As of midday Tuesday (21/03/2017) it will have been 48 hours since I started developing the application,
        so I wanted to give you an idea of where I'm currently at.
        I do however plan on continuing with development and updating the project repository untill completion!
        So I hope the work so far is to your satisfaction!
        </p>
        <p>
          I currently have the application working as a SPA (single-page-application). Each component
	       (Kittens, Paste and Info) are imported into the 'Layout' component which handles the overall layout of
	        the application.
        </p>
        <p>
          The 'Kittens' tab when loaded for the first time calls the Devtest API and retrieves the URL's.
	        This data is then saved into the components state, mapped and rendered.
	        When one of the Kitten images is clicked, the 'Paste' component is fired and will recieve the relevent
	        image data. Currently the Paste component opens but the data is not recieved, Im currently working with
	        'React Flux' to make the data availible to the component and its not far from working!
       </p>
       <p>
          The 'Paste' component will allow the user to input their credentials as well as to specify options such
	        as (public/private, duration). The user can then create a new pastebin post from this data! If no data,
	        or no user credentials are specified, the app will use defauls and/or an anonymous post.
	        Unfortunately currently the post aren't working, I ran into some issue with an
          'Access-Control-Allow-Origin' error, which means you can't access the API from certain origins,
	        (such as a localhost) which is what I've been using for development! I've gotten past the error but am
	        still having issues with bad responses. I have gotten good responses and created pastes via API mapping
	        using Postman but I have yet to do so in the application.
      </p>
      <p>
          The 'Info' component just provides a fun page to read this message, which is also in the 'README.md'
	        file in the GitHub Repository.
      </p>
      <h3>Further Development:</h3>
      <p>
          I am disappointed I did not get further in the 48 hours, however I plan on continuing the
		      applications development and completing the following:
      </p>
      <li>FLUX data storage</li>
      <li>PasteBin Posts and displaying the response data such as the PasteBin link</li>
      <li>Unit and Itegration Testing</li>

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
    );
  }
}
