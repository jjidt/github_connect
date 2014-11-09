(function () {
	require.config({
    baseUrl: 'vendor',
    paths: {
        jquery: 'jquery/dist/jquery.min'
    	}
	});

	require(['jquery'], function ($) {
		console.log($);
	});
	
}())