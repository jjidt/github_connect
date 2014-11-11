define(['socketio', 'jquery'], function (io, $) {
	var socket = io.connect('http://localhost'),
		contentContainer,
		url;

	socket.on('news', function (data) {
		contentContainer = $('.content');
		window.data = data;
		data.items.forEach(function(result) {
		console.log(result);
			contentContainer.append('<p><img class="user-image" width="50px" src=' + result.avatar_url + ' id=' + result.login + '/>' + result.login + '</p>')
		});
		$('.user-image').on('click', function(){
			url = $(this).attr('id');
			console.log(url);
			socket.emit('userSelect', url);
		});
	});
});