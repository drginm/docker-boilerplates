FROM mongo

# Create app directory
WORKDIR /usr/src/configs

# Install app dependencies
COPY replicaSet.js .
COPY replicaSetCheck.js .
COPY setup.sh .

#RUN mongo < ./replicaSet.js
#CMD ["mongo", "--host", "mongo-rs0-1:27017", "./replicaSet.js"]
ENTRYPOINT ["/bin/bash"]
CMD ["./setup.sh"]
