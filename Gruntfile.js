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
        }
    });

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-bumpup');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('test', ['karma:dev']);
    grunt.registerTask('run', ['jshint', 'uglify']);
};
