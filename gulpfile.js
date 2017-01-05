var del = require('del');
var gulp = require("gulp");

var util = require('gulp-util');
var less = require('gulp-less');

var cssmin = require('gulp-cssmin');
var rename = require("gulp-rename");

var sourcemaps = require("gulp-sourcemaps");
var source = require('vinyl-source-stream');
var concat = require("gulp-concat");

var rollup = require('rollup-stream');

var buble = require("rollup-plugin-buble");
var includePaths = require("rollup-plugin-includepaths");
var nodeResolve = require("rollup-plugin-node-resolve");
var commonjs = require("rollup-plugin-commonjs");

var config = {
    bundleName: "gameSite",
    production: !!util.env.production,

    distLocation: "browser/dist",
    distLocationModifier: function (currentValue) {
        return config.distLocation + currentValue
    },
    srcLocation: "browser/src",
    srcLocationModifier: function (currentValue) {
        return "browser/src" + currentValue
    },

    includePathOptions: {
        include: {
            'vue': 'node_modules/vue/dist/vue.js'
        },
        paths: ['browser/src/javascript-es6']
    },

    bundleFiles: [
        "/css/main.min.css",
        "/js/all.js"
    ]
};

gulp.task("default", ["less", "javascript"]);

gulp.task('javascript', function() {

    return rollup({
            // any option supported by Rollup can be set here.
            format: 'iife',
            sourceMap: true,
            entry: config.srcLocation +'/javascript-es6/main.js',
            moduleName: config.bundleName,
            plugins: [
                buble(),
                includePaths(config.includePathOptions),
                nodeResolve({ browser: true, jsnext: true, main: true }),
                commonjs()
            ]
        })
        .pipe(source('all.js'))
        .pipe(gulp.dest(config.distLocation +'/js'));

});

gulp.task('less', function() {
    // less styles from src/less folder
    // only one root file need compile
    gulp.src(config.srcLocation +'/less/main.less')
        .pipe(less())
        .pipe(config.production ? cssmin() : util.noop())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.distLocation +'/css'));
});

gulp.task('clean', function() {
    del([config.distLocation]).then(paths => {
        console.log('Deleted files and folders:\n', paths.join('\n'));
    });
});