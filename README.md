# P2 projekt (Dynamic integration of apis)
This repo contains the react project for the website that interacts with the api located at [TSKsmiley/AutoFlowAPI](https://github.com/TSKsmiley/AutoFlowAPI)

# Requirements

 - Node.js 16.x
 - working	 [AutoFlowAPI](https://github.com/TSKsmiley/AutoFlowAPI)

# Installation
First clone the repo 

    git clone https://github.com/TSKsmiley/AutoFlow
then change your directory to the new folder

    cd AutoFlow
next up install the required packages

    npm i
 next up create a  **config.json** file inside the **src** folder. Fill out the following fields accordingly, for this step it is required that you have a running [AutoFlowAPI](https://github.com/TSKsmiley/AutoFlowAPI) 

    {
	   "GOOGLE_TOKEN":  "your token here",
	   "API":  "link to your autoflow api"
    }

There are now two ways to go installation or server deployment
## Development
to run the site in development mode simply run

    npm start
the site should now be available on [localhost:3000](http://localhost:3000)
## Deployment
to deploy the site start by building the project by running

    npm run build
now the site has been built. The site can now be hosted with "**serve**"
to install serve just run:

    npm install -g serve
and to start the site up run

    serve -s build
the site should now be available on [localhost:3000](http://localhost:3000)
