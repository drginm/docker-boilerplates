# Start from an apache httpd image
FROM httpd:2.4

# Set default directory
WORKDIR /usr/src/app

# Download the dispatcher from adobe's page
ADD https://www.adobeaemcloud.com/content/companies/public/adobe/dispatcher/dispatcher/_jcr_content/top/download_8/file.res/dispatcher-apache2.4-linux-x86-64-4.2.3.tar.gz ./dispatcher/

# Unzip and copy the module into apache's modules folder
RUN tar -xzvf ./dispatcher/dispatcher-apache2.4-linux-x86-64-4.2.3.tar.gz -C ./dispatcher && \
    cp ./dispatcher/dispatcher-apache2.4-4.2.3.so /usr/local/apache2/modules/mod_dispatcher.so

# Copy a default dispatcher configuration
ADD dispatcher.any /usr/local/apache2/conf/dispatcher.any

# Replace the httpd.conf file with one that already has the dispatcher configured
COPY httpd.conf /usr/local/apache2/conf/httpd.conf
