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
		width: '2em',
		transform: 'rotate(45deg)',
		transition: '1000ms'
	});

	$('#line3').css({
		width: '2em',
		transform: 'translateY(7px) rotate(-45deg)',
		transition: '1000ms'
	});

	$('.initMessage, .about, hr').fadeOut(function(){
		$('.menu').fadeIn(500);
		$('.menu').css({
			display: 'flex'
		});
	});

	menuOpen = true;
}

//Controls animations for closing the menu.
function closeMenu(){
	$('#line2').stop().animate({
		opacity: 1,
		width: '3em'
	}, 1000);

	$('#line1').css({
		width: '3em',
		transform: 'rotate(0deg)',
		transition: '1000ms'
	});

	$('#line3').css({
		width: '3em',
		transform: 'translateY(0px) rotate(0deg)',
		transition: '1000ms'
	});

	$('.menu').fadeOut(function(){
		$('.initMessage, .about, hr').fadeIn(500);
		$('.menu').css({
			display: 'none'
		});
	});

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

//Kinda obvious...
$(function(){
	// menuToggle();

	// $('#menuIcon').click(menuToggle);

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

	$('a[href^="#"]').on('click', function(e){
		var target = $( $(this).attr('href') );

		if (target.length) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});
});
