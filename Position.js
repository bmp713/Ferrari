var i = 0;
var time = 5000; // Microseconds
var images = [];

window.addEventListener("scroll", parallax);
window.addEventListener("scroll", fixNavbar);

images[0] = 'assets/images/Ferrari_3 (2).jpg';
images[1] = 'assets/images/Ferrari_red.jpg';
images[2] = 'assets/images/Ferrari_20.jpg';
images[3] = 'assets/images/Ferrari_1.png';
images[4] = 'assets/images/Ferrari_engine.png';

function changeImage(){
	var slide = document.getElementById("slide_image");
	//var next = document.getElementById("next_image");

	if( i < images.length - 1 ){
		slide.src = images[i];
		i++;
	}
	else{
		i = 0;
	}
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
		document.getElementById('main').style.marginTop = '40px';
		document.getElementById('navbar').style.maxWidth = '80%';
		document.getElementById("navbar").style.top = '0';
	}
	else{
		document.getElementById("navbar").style.position = 'relative'
		document.getElementById('main').style.marginTop = '0px';
		document.getElementById('navbar').style.maxWidth = '100%';
		document.getElementById("navbar").style.top = '100';
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
	var offset = 35; // Might need to make responsive
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
/*
function changeImage(){

	console.log("________________________________________________________");
	if( i < (images.length - 1) ){
		if( i == 0 ){
			slide.src = images[i];
			next.src = images[i + 1];
			slide.style.zIndex = '10';
			next.style.zIndex = '9';	
		}
		else{
			console.log("1) i = " + i + ", slide-z = " + slide.style.zIndex + ", next-z = " + next.style.zIndex); 
			if( slide.style.zIndex > next.style.zIndex){
				console.log("11) i = " + i + ", slide-z = " + slide.style.zIndex + ", next-z = " + next.style.zIndex); 

				slide.style.zIndex = "9";
				next.style.zIndex = "10";	

				slide.src = images[i + 1 ];
				next.src = images[i];
			}
			else{
				next.style.zIndex = "10";
				slide.style.zIndex = "9";

				next.src = images[i + 1];
				slide.src = images[i];
			}
		}
		i++;
	}
	else{
		console.log("2) i = " + i + ", slide-z = " + slide.style.zIndex + ", next-z = " + next.style.zIndex); 
		if( slide.style.zIndex > next.style.zIndex){	
			console.log("22) i = " + i + ", slide-z = " + slide.style.zIndex + ", next-z = " + next.style.zIndex); 

			slide.style.zIndex = "9";
			next.style.zIndex = "10";	

			slide.src = images[0 ];
			next.src = images[i];
		}
		else{
			slide.style.zIndex = "10";
			next.style.zIndex = "9";	

			slide.src = images[i];
			next.src = images[0];
		}
		i = 0;
	}
}
*/
/*
function zoomBackground(){

   	var object = document.getElementById("body");

	if( window.pageYOffset == window.innerHeight ){
   		object.style.transform = "translate3d(" + x + "px," + y + "px, 0)";
   	}
   	else{

   	}
}
*/



