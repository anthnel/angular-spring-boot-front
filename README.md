# Asbfront

Inspired from this [article](https://www.baeldung.com/spring-boot-angular-web)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.2.

```
# Create the app
ng new asbfront

```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

```
# Create the model (which stores the data on the UI side - similar to a POJO in Java)
ng g class Employee --type=model
# Create the service (methods to interact with the backend API)
ng g s services/employee
# Create the employee list component
ng generate component employee-list
# Create the employee form component
ng generate component employee-form

```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Configure environments

```
ng generate environments
```

## Build and run it on your workstation from disk

We are using [lite-server](https://github.com/johnpapa/lite-server) for this

```
# Install lite-server globally
npm install --global lite-server

# Create a BrowserSync config file in config/bs-config.json with this content:

   {
        "port": 4200,
       "server": { "baseDir": "./dist/asbfront/browser" }
   }

# Build the app
ng build

# Run it 
lite-server -c config/bs-config.json
```

## Build and run it on your workstation with docker compose

```
# Images are built from the compose file
docker compose up -d
# As a nginx server (without specific configuration) is included in the front images, just head to http://localhost/index.html
```

## Add CI

### Configure Karma and sonarQube

```
# Generate a karma.conf.js file
ng generate config karma

# Add these 2 packages
npm install --save-dev karma-junit-reporter
npm install --save-dev karma-sonarqube-execution-reporter

# Replace the coverageReporter section in karma.conf.js with this :

    coverageReporter: {
      dir: 'reports',
      subdir: '.',
      reporters: [
        // 'text-summary' to let GitLab grab coverage from stdout
        {type: "text-summary"},
        // 'cobertura' to enable GitLab test coverage visualization
        {type: 'cobertura', file: 'ng-coverage.cobertura.xml'},
        // 'lcovonly' to enable SonarQube test coverage reporting
        {type: 'lcovonly', file: 'ng-coverage.lcov.info'}
      ],
    },

# Add a junitReporter section in karma.conf.js with this :

    junitReporter: {
      outputDir: 'reports',
      outputFile: 'ng-test.xunit.xml',
      useBrowserName: false,
    },

# Add a sonarQubeExecutionReporter section in karma.conf.js with this :

    sonarQubeExecutionReporter: {
      outputDir: 'reports',
      outputFile: 'ng-test.sonar.xml',
    },

# Add a sonar-project.properties file with this :

    # see: https://docs.sonarqube.org/latest/analyzing-source-code/test-coverage/javascript-typescript-test-coverage/
    # set your source directory(ies) here (relative to the sonar-project.properties file)
    sonar.sources=src/app
    # exclude unwanted directories and files from being analysed
    sonar.exclusions=node_modules/**,dist/**,**/*.spec.ts

    # set your tests directory(ies) here (relative to the sonar-project.properties file)
    sonar.tests=src/app
    sonar.test.inclusions=**/*.spec.ts

    # tests report: generic format
    sonar.testExecutionReportPaths=reports/ng-test.sonar.xml
    # lint report: TSLint JSON
    #sonar.typescript.tslint.reportPaths=reports/ng-lint.tslint.json
    sonar.typescript.eslint.reportPaths=reports/ng-lint.tslint.json
    # coverage report: LCOV format
    sonar.typescript.lcov.reportPaths=reports/ng-coverage.lcov.info

```

### Add lint

```
# Install the linter by running this command
ng lint
```

### Add .gitlab-ci.yml
