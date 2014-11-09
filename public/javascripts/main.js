(function () {
	require.config({
    baseUrl: 'vendor',
    shim: {
    	'socketio': {
      	exports: 'io'
    	}
    },
    paths: {
        jquery: 'jquery/dist/jquery.min',
        socketio: '../socket.io/socket.io',
        underscore: 'lodash/dist/lodash.underscore.min.js'
    	}
	});

	require(['jquery', '../javascripts/frontSocket'], function ($, frontSocket) {
	});

}())