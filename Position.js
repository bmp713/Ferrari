
// Images for slideshow
var images = [];
images[0] = 'assets/images/Screenshot_1.png';
images[1] = 'assets/images/Screenshot_0.png';
images[2] = 'assets/images/Screenshot_2.png';
images[3] = 'assets/images/Ferrari_10.jpg';
images[4] = 'assets/images/Ferrari_62.jpg';
images[5] = 'assets/images/Ferrari_33.jpg';

// Change image dsiplayed inside slideshow
var i = 0;
function changeImage(){
	//console.log("changeImage() => images[" + i + "] = " + images[i]);
	var slide = document.getElementById("slide_image");
	if( i < images.length - 1) i++;
	else i = 0;
	slide.src = images[i];
}
function openSlideShow(){
	changeImage();
	document.getElementById('slideshow').style.height = '100%';
	if( window.matchMedia("(min-width: 768px)" ).matches ){
		document.getElementById('slideshow').style.width = '80%';
	}else{
		document.getElementById('slideshow').style.width = '100%';		
		document.getElementById('slideshow').style.left = '0';		
	}
}
function closeSlideShow(){
	document.getElementById('slideshow').style.height = '0%';
}


// Fix navigation bar after scrolling past header
window.addEventListener("scroll", fixNavbar);
function fixNavbar(){
	if ( window.matchMedia("(min-width: 768px)" ).matches ){

		if( window.pageYOffset >= 150 ){
			document.getElementById("header").style.display = 'none';
			document.getElementById("navbar").style.position = 'fixed';
			document.getElementById("navbar").style.width = '80%';
			document.getElementById("navbar").style.top = '0';
			//document.getElementById('content').style.marginTop = '150px';
		}
		else{
			document.getElementById("header").style.display = 'block';
			document.getElementById("navbar").style.position = 'relative'
			document.getElementById("navbar").style.width = '100%';
			document.getElementById("navbar").style.top = '100';
			//document.getElementById('content').style.marginTop = '0px';
		}
	}
}


// Open and close left sliding menu
function openSlideMenu(){
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


// Elastic mmooth scrolling between content sections
function smoothScroll( elementId ){
	var speed = 1;
    var offset = 25; 
    var current = window.pageYOffset;
    var destination = document.getElementById( elementId ).offsetTop;
    console.log('Destination = ' + destination );

    var timer = setInterval( function(){
        console.log('Current = ' + current );
        console.log('Offset = ' + offset );
        if( offset < 50 ){
            //offset = offset * 2;
        }
        if( current <= destination ){
            current = current + offset;
            window.scrollTo( 0, current );
            if( current >= destination ){
                clearInterval( timer );
                window.scrollTo( 0, destination );
                offset = 1;
            }
        }
        if( current >= destination ){
            current = current - offset;
            window.scrollTo( 0, current );
            if( current <= destination ){
                clearInterval( timer );
                window.scrollTo( 0, destination );
                offset = 1;
            }
        }
    }, speed );
}


//Opens and closes specifications hidden content
var contentOpen = false;
function expandContent( elementID ){
	console.log("expandContent( elementID )");

	if( contentOpen == true){
		document.getElementById('specifications').style.display = 'none';
		contentOpen = false;
	}
	else{
		document.getElementById('specifications').style.display = 'block';
		contentOpen = true;
	}
}




