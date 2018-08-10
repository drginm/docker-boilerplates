# Use aem as the base image
FROM aem

# Expose the default port for the publish instance
EXPOSE 4502

# Define the entry command so that this container always start AEM in Author mode
ENTRYPOINT ["java", "-jar", "cq-quickstart.jar", "-Dsling.run.modes=author", "-p", "4502"]
