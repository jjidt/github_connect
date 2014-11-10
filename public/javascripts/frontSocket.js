define(['socketio', 'jquery'], function (io, $) {
	var socket = io.connect('http://localhost'),
		contentContainer;
	socket.on('news', function (data) {
		contentContainer = $('.content');
		window.data = data;
		data.items.forEach(function(result) {
			console.log(result);
			contentContainer.append('<p><img width="50px" src=' + result.avatar_url + '/>' + result.login + '</p>')
		});
		socket.emit('my other event', { data: 'passed from the client' });
	});
});