module.exports = function(grunt){
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        uglify: {
            game: {
                files: {
                    'healthyharry.min.js': 'healthyharry.min.js'
                },
                options: {
                    sourceMap: true,
                    compress: false
                }
            }
        },
        karma: {
            dev: {
                configFile: 'karma.conf.js'
            },
            watch: {
                configFile: 'karma.conf.js',
                background: true,
                singleRun: false
            }
        },
        connect: {
            server: {
                options: {
                    // Don't care. Just keep it all browserable
                    keepalive: true,
                    livereload: true,
                    open: true
                }
            }
        },
        copy: {
            // Browserify hack. Thanks @woutercommandeur
            // https://github.com/photonstorm/phaser/issues/1186
            phaser: {
                files: [{
                    expand: false,
                    flatten: true,
                    src: ['node_modules/phaser/dist/phaser.min.js'],
                    dest: 'build/phaser.min.js'
                }]
            }
        },
        browserify: {
            dist: {
                files: {
                    'healthyharry.min.js': ['src/healthyharry.js']
                },
                options: {
                    transform: ["browserify-shim"],
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        watch: {
            dev: {
                files: ['src/**/*.js'],
                tasks: ['build'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['./index.html'],
                options: {
                    livereload: true
                }
            },
            test: {
                files: ['test/**/*.js'],
                tasks: ['karma:watch:run']
            }
        }
    });

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('dev', ['karma:watch', 'watch']);
    grunt.registerTask('test', ['karma:dev']);
    grunt.registerTask('build', ['jshint', 'copy', 'browserify', 'uglify']);
};
