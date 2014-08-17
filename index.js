module.exports = function sass ( srcDir, destDir, options, done ) {
	require( 'node-sass' ).render({
		file: require( 'path' ).join( srcDir, options.src ),
		success: function ( css ) {
			require( 'gobble' ).file.write( destDir, options.dest, css ).then( done, done );
		},
		error: done
	});
};
