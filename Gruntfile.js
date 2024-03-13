const sass = require('node-sass');

module.exports = function(grunt) {

    //Automatically load each grunt plugin task
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    './src/_public/css/style.css': './src/_public/scss/global.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processor: [
                    require('autoprefixer')({
                        overrideBrowserslist: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: './src/_public/css/*.css'
            }
        },
        cssmin: {
            target: {
                file: {
                    './src/_public/css/style.min.css' : ['./src/_public/css/style.css']
                }
            }
        },
        watch: {
            styles: {
                files: ['./src/_public/scss/**/*.scss'],
                tasks: ['sass', 'postcss', 'cssmin']
            }
        }
    });

    grunt.registerTask('default', ['sass', 'postcss', 'cssmin', 'watch']);
};