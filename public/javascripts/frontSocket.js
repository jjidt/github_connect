define(['socketio'], function (io) {
	var socket = io.connect('http://localhost');
	socket.on('news', function (data) {
		
		socket.emit('my other event', { data: 'passed from the client' });
	});
});