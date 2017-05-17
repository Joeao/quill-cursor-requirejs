/**
 * Init.js
 */

define(
    "Init",

    [
    	"domReady",
        "quill",
        "quill-cursors"
    ],

    function(domReady, Quill, quillCursors) {
    	domReady(function() {       
            console.log('Initialising Quill instance');

            var quill = new Quill('#editor', {
                theme: 'snow',
                modules: {
                    cursors: true
                }
            });
    	});
    }
);