My Message: 

	Hey guys! I've had a great time developing the application I now lovingly call "Kitty-Paste!". 
	There was a slight learning curve at first with React but I've come to really enjoy using the Library
	so I hope the work so far is to your satisfaction!



View Application:

	I don't currently have a server I can use so we will be running the Application in localhost.
	Clone the repository to your desired directory.
	Go to kittens/src then open Index.html (preferebly in chrome)



The Application:

	I currently have the application working as a SPA (single-page-application). 
	The components are structured into a single paged application in 'index.js' using
	React libraries (Router, Route, IndexRoute & hashHistory).

	The 'Layout' component simply handles the overall layout of all other components: 
	(Kitten, Info, Header and Footer).

	The Kitten component is where the real fun happens. When this component mounts it automatically sends
	a GET request to DevTests API to receive the kitten paths. The JSON array is iterated through and 
	img tages are created for each path and injected into the HTML.

	The user is then able to click any of these images. Upon doing so a POST request is sent to the 
	DevTest API and the response is made availible in the textarea's. This also required converting an 
	array of characters to a string (which also got rid of all the commers in the response). I refactored
	this method into Util/Tools and imported it into the class.

	The 'Info' component just provides a fun page to read this information, which is also in the
	'README.md'file in the GitHub Repository.



Further Development:

	I'm in the process of removing the' "undefined" in the textbox. I think the problem occurs when the 
	components state updates after the second API call.
	I usually add unit and integration tests to my code as I go (TDD style). Since I was using a new 
	framework I thought this might be abit much to begin with. Though in retrospect I think it would of helped
	me rather than hindered me! Unfortunately I didn't get round to adding the tests. I have looked into testing
	using Enzym, Expect and Mocha and will be adding them over the next few days as well as cleaning up the code 
	and improving the API.



Developer Concerns:

	Requirments (These should all be installed via npm in the projects working directory): 
		React 
		react-router (For directing between components)
		Flux
		webpack - Bundler for modules, also allows live updating of application via command:
				  "webpack --watch"

	Scripts:
		I added "dev: {"webpack-dev-server --content-base src --inline --hot"} to package.json 
		This will allow for simpler compilation: simply run the command "npm run dev"

	Development:
		When developing, run in seprate terminals the following commands (Their uses are described above):
		cd <projects working directory>
		npm run dev 
		watchman --watch