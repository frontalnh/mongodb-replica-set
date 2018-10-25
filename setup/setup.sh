#!/bin/sh
echo ************************************
echo Starting the replica Set
echo ************************************

sleep 10 | echo Sleeping

mongo mongodb://mongo-rs0-1:27017 replicaSet.js