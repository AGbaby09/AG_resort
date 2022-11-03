$(document).ready(function(){
    $('.parallax').parallax();
  });
let img1 = document.getElementById('image1');
let img2 = document.getElementById('image2');
let img3 = document.getElementById('image3');
let img4 = document.getElementById('image4');
let revP = document.getElementById('revP');
let revC = document.getElementById('revC');

img1.onclick = function(){
	if(img1.style.opacity == "1"&&
	img1.style.zIndex == "1"){
		img1.style.opacity = "0.5";
		img1.style.zIndex = "";
	}else{
		img1.style.opacity = "1";
		img1.style.zIndex = "1";
	}
	img4.style.opacity = "0.5";
	img4.style.zIndex = "";

	img2.style.opacity = "0.5";
	img2.style.zIndex = "";

	img3.style.opacity = "0.5";
	img3.style.zIndex = "";

	if(revP.innerHTML == "Live Music"){
		revP.innerHTML = "Reviews";
	}else{
		revP.innerHTML = "Live Music";
	}
};


img2.onclick = function(){
	if(img2.style.opacity == "1"&&
	img2.style.zIndex == "1"){
		img2.style.opacity = "0.5";
		img2.style.zIndex = "";
	}else{
		img2.style.opacity = "1";
		img2.style.zIndex = "1";
	}
	img1.style.opacity = "0.5";
	img1.style.zIndex = "";

	img4.style.opacity = "0.5";
	img4.style.zIndex = "";

	img3.style.opacity = "0.5";
	img3.style.zIndex = "";

	if(revP.innerHTML == "Our Spa"){
		revP.innerHTML = "Reviews";
	}else{
		revP.innerHTML = "Our Spa";
	}
};


img3.onclick = function(){
	if(img3.style.opacity == "1"&&
	img3.style.zIndex == "1"){
		img3.style.opacity = "0.5";
		img3.style.zIndex = "";
	}else{
		img3.style.opacity = "1";
		img3.style.zIndex = "1";
	}
	img1.style.opacity = "0.5";
	img1.style.zIndex = "";

	img2.style.opacity = "0.5";
	img2.style.zIndex = "";

	img4.style.opacity = "0.5";
	img4.style.zIndex = "";

	if(revP.innerHTML == "Our Restaurant"){
		revP.innerHTML = "Reviews";
	}else{
		revP.innerHTML = "Our Restaurant";
	}
};


img4.onclick = function(){
	if(img4.style.opacity == "1"&&
	img4.style.zIndex == "1"){
		img4.style.opacity = "0.5";
		img4.style.zIndex = "";
	}else{
		img4.style.opacity = "1";
		img4.style.zIndex = "1";
	}
	img1.style.opacity = "0.5";
	img1.style.zIndex = "";

	img2.style.opacity = "0.5";
	img2.style.zIndex = "";

	img3.style.opacity = "0.5";
	img3.style.zIndex = "";

	if(revP.innerHTML == "Our Cuisines"){
		revP.innerHTML = "Reviews";
	}else{
		revP.innerHTML = "Our Cuisines";
	}

};
