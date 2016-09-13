# Use Gulp

Use gulp only to build a web project.

## Intro

the `gulpfile-dev.js` use in the development , it contains features :

- use `gulp-sass` compile sass file
- use `browser-sync` monitoring file changes.

the `gulpfile-build.js` use to build our project.

- use `gulpfile-sass` compile and compressed the sass file
- use `gulpfile-uglify` compressed the javascript file
- use `gulp-clean` clean the generated files
- use `gulp-rev` and `gulp-rev-collector` avoid static file cache
- use `run-sequence` serialization the gulp task