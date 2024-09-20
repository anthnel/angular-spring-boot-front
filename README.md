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
# Create a BrowserSync config file in config/bs-config.json :
#   {
#        "port": 4200,
#       "server": { "baseDir": "./dist/asbfront/browser" }
#   }
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
