define(['socketio', 'jquery'], function (io, $) {
	var socket = io.connect('http://localhost'),
		contentContainer;
	socket.on('news', function (data) {
		contentContainer = $('.content');
		data = JSON.stringify(data);
		window.data = JSON.parse(data);
		// data.forEach(function(result) {
		// 	contentContainer.append('<img src=' + result.avatar_url + '/>')
		// });
		socket.emit('my other event', { data: 'passed from the client' });
	});
});