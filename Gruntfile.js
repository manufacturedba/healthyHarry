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
        }
    });

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
}
