# Simple replica set in docker with a web app to connect to it

An example of how to create a very simple replica set using docker's docker-compose file.  It can be used for starting developing your app without needing to install a mongo server locally.

## For starting this up

Just use:

docker-compose up

## Url for the different mongo containers

* mongodb://mongo-rs0-1
* mongodb://mongo-rs0-2
* mongodb://mongo-rs0-3

## Some commands for experimenting with the replica set

* docker exec mongodb-replicaset_mongo-rs0-1_1 bash -c 'mongo --eval "rs.status();"'
* docker stop mongodb-replicaset_mongo-rs0-2_1
* docker start mongodb-replicaset_mongo-rs0-2_1

## Resources 
* [Creating a Mongo replicaset using docker: Mongo replicaset + Nodejs + Docker Compose - Video](https://youtu.be/mlw7vWISaF4)
* [Creating a Mongo replicaset using docker: Mongo replicaset + Nodejs + Docker Compose - Post](https://www.dlighthouse.co/2018/03/creating-mongo-replicaset-using-docker.html)
* [Mongo Replication - Replica Set](https://docs.mongodb.com/manual/replication/)
* [Deploy a Replica Set for Testing and Development](https://docs.mongodb.com/manual/tutorial/deploy-replica-set-for-testing/)
* [Replication Options - Configuration File Options](https://docs.mongodb.com/manual/reference/configuration-options/#replication-options)
* [Write Scripts for the mongo Shell](https://docs.mongodb.com/manual/tutorial/write-scripts-for-the-mongo-shell/)
* [Mongoose Getting Started](http://mongoosejs.com/docs/)
* [AdminMongo](https://github.com/mrvautin/adminMongo)
