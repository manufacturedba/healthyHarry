module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'node_modules/phaser/build/phaser.min.js',
            'src/**/*.js',
            'test/**/*.js'
        ],
        browsers: ['Chrome']
    });
};
