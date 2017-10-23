# Check Writer Application


This repository holds the Angular JS source code of the check writer application.

It's been extended with testing support so you can start writing tests immediately.


## Prerequisites

Node.js and npm are essential to this application. 
    
## Create a new project

Clone this repo into new project folder (e.g., `check-writer`).
```shell
git clone https://github.com/mmukul0409/numberConverter 
cd check-writer
```

## Install npm packages the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

## Install Bower

```shell
npm install -g bower
```

## Unit Testing

This repo adds both karma/jasmine unit test.

karma tests are in test/unit folder and can be run with below command

PhantomJS has been used as browser

```shell
karma start app/js/test/karma.conf
```

## End-to-end (E2E) Tests

This repo adds protractor end-to-end testing support.

Protractor tests are in test/protractor folder and can be installed and then run with below commands

1 . Protractor Installation

```shell
npm install –g protractor
webdriver-manager update
```

To start the web driver manager, the following command needs to be executed from the command prompt.

```shell
webdriver-manager start
```

3 . Execution of the Code

```shell
Open a new command prompt and give the command as "protractor conf.js" to run the configuration file conf.js in js/test/protractor folder.
```


