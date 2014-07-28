require.config({
    baseUrl: '../../',
    paths: {
        'text': 'bower_components/requirejs-text/text',
        'fixtures': 'tests/fixtures',
        'selectorEngine': 'lib/zeptojs/dist/zepto',
        'zappy': 'bower_components/tappy/tappy',
        'velocity-shim': 'lib/velocity-shim',
        'velocity': 'bower_components/velocity/jquery.velocity',
        'chai': 'node_modules/chai/chai',
        'mocha': 'node_modules/mocha/mocha',
        'shade': 'dist/shade',
        'pinny': 'dist/pinny'
    },
    'shim': {
        'mocha': {
            init: function() {
                this.mocha.setup('bdd');
                return this.mocha;
            }
        },
        'selectorEngine': {
            exports: '$'
        },
        'zappy': {
            deps: ['selectorEngine'],
            exports: '$'
        },
        'velocity-shim': {
            deps: ['selectorEngine'],
            exports: '$'
        },
        'velocity': {
            deps: ['selectorEngine', 'velocity-shim'],
            exports: '$'
        }
    }
});
