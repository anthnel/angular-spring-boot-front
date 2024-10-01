// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    // coverageReporter: {
    //   dir: require('path').join(__dirname, './coverage/asbfront'),
    //   subdir: '.',
    //   reporters: [
    //     { type: 'html' },
    //     { type: 'text-summary' }
    //   ]
    // },
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
    junitReporter: {
      outputDir: 'reports',
      outputFile: 'ng-test.xunit.xml',
      useBrowserName: false,
    },
    sonarQubeExecutionReporter: {
      outputDir: 'reports',
      outputFile: 'ng-test.sonar.xml',
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['Chrome'],
    restartOnFileChange: true
  });
};
