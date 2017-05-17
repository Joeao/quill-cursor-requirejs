requirejs.config({
    baseUrl: '/',
    paths: {
        "domReady": "../libs/domReady",
		"quill": "./libs/quill.min",
        "quill-cursors": "./libs/quill-cursors/quill-cursors"
    },
    shim: {
        "quill-cursors": {
            deps: ['quill'],
            exports: 'quill-cursors'
        }
    }
});

require(
    [
        "Init"
    ]
);