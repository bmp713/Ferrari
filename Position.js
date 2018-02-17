var i = 0;
var time = 5000; // Microseconds
var images = [];

window.addEventListener("scroll", parallax);
window.addEventListener("scroll", fixNavbar);

images[0] = 'assets/images/Screenshot_0.png';
images[1] = 'assets/images/Screenshot_1.png';
images[2] = 'assets/images/Screenshot_2.png';
images[3] = 'assets/images/Screenshot_3.png';

function changeImage(){
	var slide = document.getElementById("slide_image");

	if( i < images.length - 1 ){
		slide.src = images[i];
		i++;
	}
	else i = 0;
}
function openSlideShow(){
	changeImage();
	document.getElementById('slideshow').style.height = '100%';
	document.getElementById('slideshow').style.width = '80%';
}
function closeSlideShow(){
	document.getElementById('slideshow').style.height = '0%';
}

function fixNavbar(){
	if( window.pageYOffset >= 150 ){
		document.getElementById("navbar").style.position = 'fixed';
		document.getElementById("navbar").style.width = '80%';
		document.getElementById("navbar").style.top = '0';
		document.getElementById('content').style.marginTop = '40px';
	}
	else{
		document.getElementById("navbar").style.position = 'relative'
		document.getElementById("navbar").style.width = '100%';
		document.getElementById("navbar").style.top = '100';
		document.getElementById('content').style.marginTop = '0px';
	}
}

function openSlideMenu(){
	/* Viewport >m 400 pixels wide */
	if ( window.matchMedia("(min-width: 768px)").matches ){
		document.getElementById('slide-menu').style.width = '25%';
	} 
	else{
		document.getElementById('slide-menu').style.width = '100%';
	}
}
function closeSlideMenu(){
   	document.getElementById('slide-menu').style.width = '0'; 
}

function parallax(){
	//document.getElementById("parallax_1").style.top = (window.pageYOffset/2) + 'px';	
	document.getElementById("parallax_2").style.top = -(window.pageYOffset/2) + 'px';
	document.getElementById("parallax_3").style.top = -(window.pageYOffset/2) + 'px';

	if( window.pageYOffset >= 2000 ){
		document.getElementById("logo").style.opacity = '1';
	}
	else{
		document.getElementById("social").style.opacity = '0';
	}
}

function smoothScroll( elementId ){
	var offset = 50; // Might need to make responsive
	var current = window.pageYOffset;
	var destination = document.getElementById( elementId ).offsetTop;

	var timer = setInterval( function(){
		if( current <= destination ){
			current = current + offset;
			window.scrollTo( 0, current );
			if( current >= destination ){
				clearInterval( timer );
				window.scrollTo( 0, destination );
			}
		}
		if( current >= destination ){
			current = current - offset;
			window.scrollTo( 0, current );
			if( current <= destination ){
				clearInterval( timer );
				window.scrollTo( 0, destination );
			}
		}
	}, 1 );
}



