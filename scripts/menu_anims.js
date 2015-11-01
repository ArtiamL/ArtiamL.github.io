/*
		Author: Luke Newell (@Myzostal)
		Created: 07/10/2015
		
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
		transition: '500ms'
	});

	$('#line3').css({
		width: '2em',
		transform: 'translateY(7px) rotate(-45deg)',
		transition: '500ms'
	});

	// $('#menu').removeClass('menuClose').addClass('menuOpen');
	// $('#menuIcon').removeClass('menuCloseContainer').addClass('menuOpenContainer');
	// $('#mainContent').removeClass('menuCloseContainer').addClass('menuOpenContainer');

	$('#menuIcon, .mainContent').css({
		transform: 'translateX(16em)',
		// '-webkit-transform': 'translateX(16em)',
		// left: '16em',
		transition: '500ms'
	});

	$('.menu').css({
		transform: 'translateX(16em)',
		// '-webkit-transform': 'translateX(16em)',
		// left: '0em',
		transition: '500ms'
	});

	// TweenMax.to('#menuIcon', 0.5, {left: '16em'})
	// TweenMax.to('.menu', 0.5, {left: '0em'});
	// TweenMax.to('.mainContent', 0.5, {left: '16em'});

	menuOpen = true;
}

//Controls animations for closing the menu.
function closeMenu(){
	$('#line2').stop().animate({
		opacity: 1,
		width: '3em'
	}, 250);

	$('#line1').css({
		width: '3em',
		transform: 'rotate(0deg)',
		transition: '500ms'
	});

	$('#line3').css({
		width: '3em',
		transform: 'translateY(0px) rotate(0deg)',
		transition: '500ms'
	});

	// $('#menu').removeClass('menuOpen').addClass('menuClose');
	// $('#menuIcon').removeClass('menuOpenContainer').addClass('menuCloseContainer');
	// $('#mainContent').removeClass('menuOpenContainer').addClass('menuCloseContainer');

	$('#menuIcon, .mainContent').css({
		transform: 'translateX(0em)',
		// left: '0em',
		transition: '500ms'
	});

	$('.menu').css({
		transform: 'translateX(0em)',
		// left: '-16em',
		transition: '500ms'
	});

	// TweenMax.to('#menuIcon', 0.5, {left: '0em'})
	// TweenMax.to('.menu', 0.5, {left: '-16em'});
	// TweenMax.to('.mainContent', 0.5, {left: '0em'});

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
$(document).ready(function(){

	/*Hammer(document.getElementById('mainContent')).on("swipe", function() {
		menuToggle();
	});*/

	$('#menuIcon').click(menuToggle);

	// $('#menuIcon').on("swipe", menuToggle);

	$(document).keydown(function(e){
		if(e.which == 77 || e.which == 27){
			menuToggle();
		}
	});

	$('a li.menuItems').click(function(e){
		e.preventDefault();
		linkLocation = this.href;
		menuToggle();
		window.setTimeout(redirectPage, 500);
	});

});
