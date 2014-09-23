require.config({
    baseUrl: '../',
    paths: {
        'text': 'bower_components/requirejs-text/text',
        '$': 'bower_components/jquery/dist/jquery',
        'bouncefix': 'bower_components/bouncefix.js/dist/bouncefix.min',
        'velocity': 'bower_components/velocity/velocity',
        'modal-center': 'dist/effect/modal-center',
        'sheet-bottom': 'dist/effect/sheet-bottom',
        'sheet-left': 'dist/effect/sheet-left',
        'sheet-right': 'dist/effect/sheet-right',
        'sheet-top': 'dist/effect/sheet-top',
        'plugin': 'bower_components/plugin/dist/plugin.min',
        'shade': 'bower_components/shade/dist/shade.min',
        'pinny': 'dist/pinny'
    },
    'shim': {
        '$': {
            exports: '$'
        }
    }
});