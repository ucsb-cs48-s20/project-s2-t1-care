# Lab05: Deployment Instructions

## Step 1: Forking the Repo

Fork the project repo to your own personal GitHub account by clicking on the "Fork" button at the upper right hand of the repo's page on GitHub. This creates a personal copy of the repo under your own GitHub account. This is necessary because you can't deploy an app to Heroku unless you have admin access to the repo.

## Step 2: Installing Node on your account

Go to https://ucsb-cs48.github.io/s20/lab/lab00_nj/ and follow Steps 9-11

- Step 9: follow exactly
- Step 10: follow exactly
- Step 11: Because Auth0 has not been configured, the website will have a homepage, but clicking login will crash. However, make sure that the webpage runs.

## Step 3: Setting up Auth0 for LocalHost

- Follow the steps here: https://github.com/ucsb-cs48-s20/demo-nextjs-app/blob/master/docs/auth0-localhost.md to create an Auth0 account and place these secrets into your .env file
- Then, follow the steps here: https://github.com/ucsb-cs48-s20/demo-nextjs-app/blob/master/docs/auth0-github-actions.md to add your secrets to GitHub. This will allow npm test to run on GitGub.

## Step 4: Initializing the MongoDB Database

Create a MongoDB account and create a project with any name (we named ours “GrowPlant”). Configure your cluster with any cloud provider and with your relevant location and name your cluster “Plant”. Click on your cluster, navigate to the Collections tab, and click “Add My Own Data.” **Name your database “Plant” and name your collection “users”. Make sure to spell the cluster and collection exactly as we have stated.**

## Step 5: Allow Access to MongoDB from anywhere

On the sidebar of your project, click the “Network Access” button (under security). Press _Add an IP address_, and click _allow access from anywhere._ Press the confirm button.

## Step 6: Setting up MongoDB Credentials

- Go back to the Clusters tab, and click your cluster. Click the connect button in the top right corner, and create a Mongodb user with any username and password. **Keep the credentials for the next step.**

- Add a new secret named MONGODB_URI to your .env file, into your Github Secrets, and into your Heroku secrets, with the value provided on the page looking like “mongodb+srv://<username>:<password>@plant….” with the proper names substituted in for username and password.

## Step 7: Getting Heroku working

Follow the steps here: https://github.com/ucsb-cs48-s20/demo-nextjs-app/blob/master/docs/heroku.md to deploy your app on Heroku.
