/*
		Author: Luke Newell (@Myzostal)
		Created: 07/09/2015

        Updated By: Luke Newell (@Myzostal)
		Updated: 01/11/2015
*/


var menuOpen = false;

//Controls animations for opening the menu.
function openMenu(){
	$('#line2').stop().animate({
		opacity: 0,
		width: '0.5em'
	}, 250);

	$('#line1').css({
		// width: '1.8em',
		transform: 'rotate(45deg)',
		transition: '500ms'
	});

	$('#line3').css({
		// width: '1.8em',
		transform: 'translateY(0.6rem) rotate(-45deg)',
		transition: '500ms'
	});

	$('.menuParent').fadeIn(500).css({display: "flex"});
	$('#menuIcon').css({
		height: '1.5rem'
	});

	$('.content').css({
		'-webkit-filter': 'blur(3px)',
		'-moz-filter': 'blur(3px)',
		'-ms-filter': 'blur(3px)',
		filter: 'blur(3px)',
		transition: '500ms'
	});

	// $('.initMessage, .about, hr').fadeOut(function(){
	// 	// $('.menu').fadeIn(500);
	// 	$('.menu').css({
	// 		display: 'flex'
	// 	});
	// });

	menuOpen = true;
}

//Controls animations for closing the menu.
function closeMenu(){
	$('#line2').stop().animate({
		opacity: 1,
		width: '2em'
	}, 500);

	$('#line1').css({
		// width: '2em',
		transform: 'rotate(0deg)',
		transition: '500ms'
	});

	$('#line3').css({
		// width: '2em',
		transform: 'translateY(0px) rotate(0deg)',
		transition: '500ms'
	});

	$('.menuParent').fadeOut(500);
	$('#menuIcon').css({
		height: '0.925rem'
	});

	$('.content').css({
		'-webkit-filter': '',
		'-moz-filter': '',
		'-ms-filter': '',
		filter: '',
		transition: '500ms'
	});

	// $('.menu').fadeOut(function(){
	// 	$('.initMessage, .about, hr').fadeIn(500);
	// 	$('.menu').css({
	// 		display: 'none'
	// 	});
	// });

	menuOpen = false;
}

//Toggles menu anims.
function menuToggle(){
	if(menuOpen == false){
		openMenu();
	}else{
		closeMenu();
	}
}

function redirectPage(){
	window.location = linkLocation;
}

function linkScroll(e){
	var target = $( $(this).attr('href') );

	if (target.length) {
		e.preventDefault();
		menuToggle();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	}
}

//Kinda obvious...
$(function(){
	// menuToggle();

	$('#menuIcon').on('touchstart', function(e){
		e.preventDefault();
		menuToggle();
	});
	$('#menuIcon').click(menuToggle);

	// $(document).keyup(function(e){
	// 	if(e.which == 77 || e.which == 27){
	// 		menuToggle();
	// 	}
	// });

	// $('a li.menuItems').click(function(e){
	// 	e.preventDefault();
	// 	linkLocation = this.href;
	// 	menuToggle();
	// 	window.setTimeout(redirectPage, 500);
	// });

	// $('html').on('contextmenu', function(e){
	// 	e.preventDefault();
	// });

	$('.menu').fadeIn(2000).css({display: 'flex'});

	$('a[href^="#"]').on('touchstart', linkScroll);
	$('a[href^="#"]').on('click', linkScroll);
});
