# Northcoders News (the dentednerd Dockerised version)

Caution! This is an old-school version of Northcoders News; the database is in MongoDB, and the React client utilizes Redux. The inner workings of this app will be very different from what newer Northcoders will have worked on, so beware!

## setup

1. `git clone https://github.com/dentednerd/NorthcodersNewsDocker.git`
1. `cd NorthcodersNewsDocker`
1. `docker network create northcoders-news`
1. `docker-compose build`
1. `docker-compose up`
