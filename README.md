# Northcoders News (the dentednerd Dockerised version)

Beware, Northcoder! This is an old-school version of Northcoders News; the database is in MongoDB, and the React client utilizes Redux. The inner workings of this app will be very different from the NCNews that more recent Northcoders will have worked on!

I've combined both the back-end and front-end NCNews sprints into a single MERN-stack app; the React client is in the `/client` directory, whilst the other directories are part of the Express server. I'm hosting my Mongo database on [mLab](https://mlab.com/).

## prerequisites

- [Nodejs](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

## setup

This will take a little time, so please be patient!

1. `git clone https://github.com/dentednerd/NorthcodersNewsDocker.git`
1. `cd NorthcodersNewsDocker`
1. `docker network create northcoders-news`
1. `docker-compose build`

## development

1. `docker-compose up`

Northcoders News will be available on `localhost:8000`.

## deployment

Northcoders News is hosted remotely on Heroku, at [https://northcoders-news-dentednerd-v2.herokuapp.com/](https://northcoders-news-dentednerd-v2.herokuapp.com/). Pushing to the master branch automatically triggers a deploy to Heroku.

1. `git push origin master`
