# Feature for gymmembers dating online

## Reproduce
* Register an account
* Login
* Go to Profile
* Check Profile
* Edit Profile
* Fill in Details
* BMI is now updated!
* Go back to profilelist
* Click Delete LCW account
* Account is now deleted from Database

## ToC
- [Context](#context)
- [The dating App](#the-dating-app)
- [The feature](#the-feature)
- [How does it work](#how-does-it-work)
  * [Local](#local)
  * [Live version HEROKU](#live-version-heroku)
  * [Database Mongo Atlas](#database-mongo-atlas)
- [Security](#security)
- [More Information](#more-information)


## Context
Love can't Weight is an online dating application built with JavaScript on a node.js localhost. The sole purpose of the project is to learn to make an JavaScript enhanced feature build on top of the regular behaviour of web applications (written in HTML and CSS).

## The dating App
The idea of the app is an online dating application made for gymmembers. Gymmembers can customize their profile to their liking by uploading a picture of themselves. They can add what kind of fitness enthusiast they are (lifting, crossfit, powerlifting, cardioviscular etc). The members will be matched based on their Body Mass Index (BMI). It is the keyvalue in the matching proces. However next to the match the system will look at preferences settings such as on which date a member is avaiable to train at a gym in a given area.
![Home](https://i.imgur.com/P2t6gJV.png)

## The feature
The feature is based on the job stories described in the WIKI of this repo. The feature that I want to create is a feature in where gymmember add their length and weight. The server calculates the BMI of a member and adds it to the profile.
The member can choose between two BMI values in which the system will try to match the member with other members that are withing the given margins.

Update: BMI values cant yet be choosen. However the BMI value itself is based upon the enterred values when one updates its account!
![Profile with BMI](https://i.imgur.com/PkwjFQ9.jpg)

## How does it work
All the files are included in the subfolder within this repo. The subfolder is called 'testserver'. Clone the folder to a directory on your local machine. Make sure Node.JS [How to install node](https://nodejs.org/en/download/package-manager/) is installed and NPM [How to install npm](https://www.npmjs.com/get-npm) as well. Open up the terminal and run '```npm install```' followed by 'node server.js' after the npm command is finished installing all the required packages declared in the .JSON file.

### Local
To run the app locally. Run nodemon in the root directory of the app. Now browse to localhost:8080 in any browser. I advice to use Google Chrome. 

### Live version HEROKU
The application can also be run by visiting the live version. The live version can be reached via [This Link](https://lovecantweight.herokuapp.com/).

### Database Mongo Atlas
Both the local and live version use a cloud based database run by Mongo Atlas. The database is used to retrieve, post and modify data to and from. All your changes made in the client will affect the shared database.

## Security
To maintain some form of security we use Passport.JS, Sessions combined with bcryptjs.
When creating an account, the password entry gets hashed and stored in the database. There is no way for a moderator to locate or view your real password.
![Register](https://i.imgur.com/z8qIYVO.jpg)

When logging in, the hashed password gets compared to your real password. If there is a match you will enter a logged in state of the application by using a session. Logout to get clear of the session.
![Login](https://i.imgur.com/bWPQHzM.jpg)
![Logout](https://i.imgur.com/khnaFmV.jpg)


## More Information
All the research and information can be found in the WIKI of this repo. 
