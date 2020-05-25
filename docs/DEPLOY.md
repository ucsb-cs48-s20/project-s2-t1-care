# Lab05: Deployment Instructions 

## Step 1
Fork the project repo to your own personal GitHub account by clicking on the "Fork" button at the upper right hand of the repo's page on GitHub.  This creates a personal copy of the repo under your own GitHub account. This is necessary because you can't deploy an app to Heroku unless you have admin access to the repo.

## Step 2
Go to https://ucsb-cs48.github.io/s20/lab/lab00_nj/ and follow Steps 9-12
   * Step 9: follow exactly 
   * Step 10: follow exactly 
   * Step 11: Because Auth0 has not been configured, the website will have a homepage, but clicking login will crash 
   * Step 12: follow exactly  -- **make sure to follow the linked readme carefully to docs/auth0-localhost.md, docs/auth0-production.md and docs/auth0-github-actions.md**

## Step 3
Create a MongoDB account and create a project with any name (we named ours “GrowPlant”). Configure your cluster with any cloud provider and with your relevant location and name your cluster “Plant”.  Click on your cluster, navigate to the Collections tab, and click “Add My Own Data.”  **Name your database “Plant” and name your collection “users”. Make sure to spell the cluster and collection exactly as we have stated.**

## Step 4
On the sidebar of your project, click the “Network Access” button (under security). Press *Add an IP address*, and click *allow access from anywhere.* Press the confirm button.

## Step 5
Go back to the Clusters tab, and click your cluster. Click the connect button in the top right corner, and create a Mongodb user with any username and password. **Keep the credentials for the next step.**

## Step 6
Add a new secret named MONGODB_URI to your .env file, into your Github Secrets, and into your Heroku secrets, with the value provided on the page looking like “mongodb+srv://<username>:<password>@plant….” with the proper names substituted in for username and password.

## Step 7
Go to https://ucsb-cs48.github.io/s20/lab/lab00_nj/ and follow Steps 13-14, 16
   * Step 13: follow exactly 
   * Step 14: follow exactly 
   * Step 15: ignore this step -- **make sure to follow the linked readme and navigate to docs/heroku.md**
   * Step 16: follow exactly 

