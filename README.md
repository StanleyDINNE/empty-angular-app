# Empty Angular App

## For performance testing 

## Project setup
```
npm install
```

### Run the application in production mode:

1) Run prod command
```
npm run start:prod
```

Note: If you want to run the build-report command on your own angular app, you need to add the command in the `package.json`.
```
    "start:prod": "ng serve --prod",
```

2) Access to the page at `http://localhost:4200`

5) Open the chrome's console, go to the `Lighthouse` tab and run an audit with the Performance box checked (you can remove the other checkboxes)

### Measure the bundle size:

Build the bundle size report:
```
npm run build:report
```

Launch the report result:
```
npm run watch:report
```

Note: If you want to run the build-report command on your own angular app, you need to add the command in the `package.json`.
```
    "build:report": "ng build --prod --stats-json"
```

Click on the button `Show content of concatenated modules` in the left menu to see the details.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.