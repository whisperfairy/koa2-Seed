/**
 * Created byon .
 *  User:  whisperfairy
 *  Date:  2016/11/19
 *  Time:  15:35
 */
const gulp = require('gulp');
const path = require('path');
const config = require('./config/GlobalConfig')
const sourcemap=require('gulp-sourcemaps');
const babel = require('gulp-babel');
var helper =require('./config/gulp-helper');
const glob = require('glob')
console.log(path.join(config.SourceDir,"/**/*.js"));
gulp.task('default', ['es6'],function() {
    "use strict";
    glob(path.join(config.SourceDir,"/**/*.es"), {}, function (er, files) {
        files.map((item) => {
            console.log(item);
            var result = helper.filepath(item);
            console.log(result);
            return gulp.src(item.toString())
                .pipe(sourcemap.init({loadMaps: true,debug:true}))
                .pipe(babel())
                .pipe(sourcemap.write(path.join(__dirname,'./maps')))
                .pipe(gulp.dest(path.join( config.distdir,result.folderPath)));
        })
    });
});
gulp.task('es6',[],function()
{
    glob(path.join(config.SourceDir,"/**/*.es"), {}, function (er, files) {
        // files is an array of filenames.
        // If the `nonull` option is set, and nothing
        // was found, then files is ["**/*.js"]
        // er is an error object or null.
        files.map((item) => {
            var watcher = gulp.watch(item.toString(),
                function(event) {
                console.log(__dirname);
                    var result=helper.filepath(event.path);
                    return gulp.src(event.path.toString())
                        .pipe(sourcemap.init({loadMaps: true,debug:true}))
                        .pipe(babel())
                        .pipe(sourcemap.write(path.join(__dirname,'./maps')))
                        .pipe(gulp.dest(path.join( config.distdir,result.folderPath)));
                });

        });

    });
});
