FROM mongo

# Workdir configs directory
WORKDIR /usr/src/configs

# Copy config files
COPY mongo.conf .

EXPOSE 27017

CMD ["--config", "./mongo.conf"]
