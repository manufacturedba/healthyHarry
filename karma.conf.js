module.exports = function(config) {
    config.set({
        frameworks: ['browserify', 'jasmine'],
        files: [
            'src/healthyharry.js',
            'test/**/*.js'
        ],
        preprocessors: {
            'test/**/*.js': ['browserify']
        },
        browserify: {
            transform: ["browserify-shim"]
        },
        browsers: ['Chrome']
    });
};
