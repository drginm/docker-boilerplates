
## Building
### AEM base image
```
docker build -t aem .
```

All at once using the docker compose command or one by one
```
docker-compose up
```

### AEM Publish image
```
docker build -t publish .

docker run -p 4503:4503 publish
```

### AEM Author image
```
docker build -t author .

docker run -p 4502:4502 author
```

### AEM Dispatcher image
```
docker build -t dispatcher .

docker run -p 8080:80 dispatcher
```

# Creating the app
## With docker
```
docker run -it --rm --name my-maven-project -v "$(pwd)":/usr/src/workdir -w /usr/src/workdir -v "$(pwd)"/.m2:/root/.m2 maven:3.5.4-jdk-8 mvn org.apache.maven.plugins:maven-archetype-plugin:2.4:generate "-DarchetypeGroupId=com.adobe.granite.archetypes" "-DarchetypeArtifactId=aem-project-archetype" "-DarchetypeVersion=12" "-DarchetypeCatalog=https://repo.adobe.com/nexus/content/groups/public/" "-DgroupId=co.dlighthouse" "-DartifactId=aem-docker-examples" "-Dversion=0.1.0-SNAPSHOT" "-Dpackage=co.dlighthouse.aem.aemdocker" "-DappsFolderName=aem-docker-examples" "-DconfFolderName=aem-docker-examples" "-DartifactName=AEM Docker Examples" "-DcomponentGroupName=AEM Docker Examples" "-DcontentFolderName=aem-docker-examples" "-DcssId=aem-docker-examples" "-DpackageGroup=aem-docker-examples" "-DsiteName=AEM Docker Examples"
```

### Install author
```
docker run -it --rm --name my-maven-project -v "$(pwd)":/usr/src/workdir -w /usr/src/workdir -v "$(pwd)"/.m2:/root/.m2 maven:3.5.4-jdk-8 mvn clean install -Padobe-public -PautoInstallPackage -Daem.host=192.168.99.100
```

### Install publish
```
docker run -it --rm --name my-maven-project -v "$(pwd)":/usr/src/workdir -w /usr/src/workdir -v "$(pwd)"/.m2:/root/.m2 maven:3.5.4-jdk-8 mvn clean install -Padobe-public -PautoInstallPackagePublish -Daem.publish.host=192.168.99.100
```

## Without docker
```
mvn org.apache.maven.plugins:maven-archetype-plugin:2.4:generate "-DarchetypeGroupId=com.adobe.granite.archetypes" "-DarchetypeArtifactId=aem-project-archetype" "-DarchetypeVersion=12" "-DarchetypeCatalog=https://repo.adobe.com/nexus/content/groups/public/" "-DgroupId=co.dlighthouse" "-DartifactId=aem-docker-examples" "-Dversion=0.1.0-SNAPSHOT" "-Dpackage=co.dlighthouse.aem.aemdocker" "-DappsFolderName=aem-docker-examples" "-DconfFolderName=aem-docker-examples" "-DartifactName=AEM Docker Examples" "-DcomponentGroupName=AEM Docker Examples" "-DcontentFolderName=aem-docker-examples" "-DcssId=aem-docker-examples" "-DpackageGroup=aem-docker-examples" "-DsiteName=AEM Docker Examples"
```

### Install author
```
mvn clean install -PautoInstallPackage -PautoInstallPackagepublish -Padobe-public -PautoInstallPackage -Daem.host=192.168.99.100
```

### Install publish
```
mvn clean install -PautoInstallPackage -PautoInstallPackagepublish -Padobe-public -PautoInstallPackagePublish -Daem.publish.host=192.168.99.100
```

## Resources 

[]()
