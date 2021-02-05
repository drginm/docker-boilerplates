#!/bin/bash

echo ******************************************************
echo Starting the replica set
echo ******************************************************

sleep 20 | echo Sleeping
mongo mongodb://mongo-rs0-1:27017 replicaSet.js
