module.exports = function(grunt){
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'src/**/*.js']
        },
        uglify: {
            game: {
                files: {
                    'healthyharry.min.js': ['src/**/*.js']
                }
            }
        },
        karma: {
            dev: {
                configFile: 'karma.conf.js'
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
        watch: {
            dev: {
                files: ['src/**/*.js', './index.html'],
                tasks: ['jshint', 'uglify'],
                options: {
                    reload: true,
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('serve', ['connect']);
    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('test', ['karma:dev']);
    grunt.registerTask('min', ['jshint', 'uglify']);
};
