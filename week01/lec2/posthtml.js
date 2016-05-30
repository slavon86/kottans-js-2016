"use strict";

const PostHTML = require("posthtml");

const regex = '/col-(xs|sm|md|lg)?(-\w+)?-\d+/';

const html = 
`
    <myTag class = "col-lg-push-11"> Hello, AD! </myTag>
	<myTag class = "col-lg-2"> Hello, Hell! </myTag>
	<myTag> Hello, Hades! </myTag>
`;

const plugin = tree => tree.walk( function(node) {
    // do something for node
    //if ( node.class.match(regex) != 0 ) {console.log('Found inclusion')};
    //var dataJs = node.attrs && node.attrs.class;
    if (( node.attrs ) && ( node.attrs.class ) && ( node.attrs.class.match(regex) )) 
    	{console.log('Found inclusion')};
    console.log(node.attrs.class);
    //node.data = node.attrs.class;
    console.log('It`s works.');
    return node;
    });




PostHTML([ plugin ])
	.process(html)
	.then(result =>
	{
		console.log(result.html);
	})