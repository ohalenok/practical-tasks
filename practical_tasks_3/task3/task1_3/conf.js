exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'firefox',
        marionette: false
    },
    onPrepare: function() {
        console.log("The test is started");
    }
}