$(document).ready(function(){

	var $winWidth = $('#width p').text('Width: ' + $(window).width() / parseFloat($("html").css("font-size")) + 'em');
	var $winHeight = $('#height p').text('Height: ' + $(window).height() / parseFloat($("html").css("font-size")) + 'em');

	$(window).resize(function(){

		var $winWidth = $('#width p').text('Width: ' + $(window).width() / parseFloat($("html").css("font-size")) + 'em');
		var $winHeight = $('#height p').text('Height: ' + $(window).height() / parseFloat($("html").css("font-size")) + 'em');

	});

});