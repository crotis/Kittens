PROCEEDURE:

SETUP

Go to desired project directory
Run the following in $bash:
npm install
npm init - Intialized package.json (This handles Dependencies)
    Add dev script dependencies to package to make life easier: webpack-dev-server --content-base src --inline --hot"

npm install webpack - Installs webpack(module bundler)
npm install -g webpack (Allows us to run webpack globally)
-touch webpack.config.js
	Add basic configurations found on webpack Docs

Then to Open for Dev run:
bash tab1: npm run dev
bash tab2: webpack --watch (Allows for automatic updates to app so we dont have to compile manually)

Added Babel Dependencies to Package.json
Added modules to webpack.config.js (SPECIFY)

*******

npm install pastebin-js
add module for ^ to package.json