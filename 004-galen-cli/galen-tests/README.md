Galen Tests
=====================================

This project is a simplified version from [Galen Sample Tests](https://github.com/galenframework/galen-sample-tests) it is used in order to demonstrate the features of [Galen Framework](http://galenframework.com) against a static page using docker

The web application that it is testing is [https://drginm.github.io/simple-vue-tensorflow/](https://drginm.github.io/simple-vue-tensorflow/)

### Local
If you have Galen Framework installed you can just checkout this project and run it with the following command:

```
galen test tests/ --htmlreport reports
```

### Selenium grid
#### Local

```
galen test tests/ --htmlreport reports -Dgalen.browserFactory.selenium.runInGrid=true -Dgalen.browserFactory.selenium.grid.url=http://IP:PORT/wd/hub
```

#### BrowserStack

```
galen test tests/ --htmlreport reports -Dgalen.browserFactory.selenium.runInGrid=true -Dgalen.browserFactory.selenium.grid.url=http://USERNAME:ACCESSKEY@hub.browserstack.com/wd/hub
```

#### Sauce Labs

```
galen test tests/ --htmlreport reports -Dgalen.browserFactory.selenium.runInGrid=true -Dgalen.browserFactory.selenium.grid.url=http://USERNAME:ACCESSKEY@ondemand.saucelabs.com:80/wd/hub
```
