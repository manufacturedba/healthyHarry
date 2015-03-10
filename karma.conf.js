'use strict';

module.exports = function(config) {
    config.set({
        frameworks: ['jasmine','browserify'],
        files: [
            './node_modules/sinon/lib/sinon.js',
            'src/healthyharry.js',
            'test/**/*Spec.js'
        ],
        preprocessors: {
            './node_modules/sinon/sinon.js': ['browserify'],
            'test/**/*Spec.js': ['browserify']
        },
        browserify: {
            debug: true,
            transform: ["brfs", "browserify-shim"],
            extensions: ['.js']
        },
        browsers: ['Chrome'],
        logLevel: 'LOG_DEBUG',
        plugins: [
            'karma-jasmine',
            'karma-browserify',
            'karma-chrome-launcher'
        ]
    });
};
