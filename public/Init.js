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
            console.log(Quill, quillCursors);

              var quill = new Quill('#editor', {
                theme: 'snow'
              });
    	});
    }
);