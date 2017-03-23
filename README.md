My Message:

	Hey guys! I've had a great time developing the application I now lovingly call "Kitty-Paste!".
	There was a slight learning curve at first with React but I've come to really enjoy using the Library
	so I hope that my work is to your satisfaction!



View Application:

	I don't currently have a server I can use so we will be running the Application in localhost.
	Clone the repository to your desired directory.
	Go to kittens/src then open Index.html (preferebly in chrome)



The Application:

	The components are structured into a single paged application in 'index.js' using
	React libraries (Router, Route, IndexRoute & hashHistory).

	The 'Layout' component simply handles the overall layout of all other components:
	(Kitten, Info, Header and Footer).

	The Kitten component is where the real fun happens! When this component mounts it automatically
	sends a GET request to DevTests API and receives the path of each image. The JSON array is
	iterated through and <img> tags are created for each path, wrapped and injected into the HTML.

	The user is then able to click any of these images. Upon doing so a POST request is sent to the
	DevTest API and the response is made visible in the text-areas bellow. This also required
	converting an array of characters to a string. I refactored this method into Util/Tools.

	The 'Info' component just provides a fun page to read this information, which is also availible
	in the 'README.md'file in the GitHub Repository.



Further Development:

	I usually add unit and integration tests to my code as I go (TDD style). However since I was using a new
	framework I thought this might be little much to begin with. Though in retrospect I think it would of helped
	me rather than hindered me! Unfortunately I haven't yet managed to add the tests. I have however between
	looking into testing using Enzym, Expect and Mocha.



Developer SetpUp:

	Install Requirements (These should all be installed via npm in the projects working directory):
			npm install
			npm install flux
			npm install react-fetch

	Run:
		When developing, run the following command in terminal (their uses are described above):
		(Make sure you have first installed the requirements above!)
		cd <projects working directory>
		npm run dev

	Scripts:
		I added "dev: {"webpack-dev-server --content-base src --inline --hot"} to package.json
		This will allow for simpler compilation.
