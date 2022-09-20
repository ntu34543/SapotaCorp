const upBtn = document.querySelector('.up-button'),
      downBtn = document.querySelector('.down-button'),
      sideBar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      slidesCnt = sideBar.querySelectorAll('div');
let activeIdx = 0;

sideBar.style.top = `-${(slidesCnt.length - 1) * 100}vh`

const changeSlide = (direction) => {
  switch (direction) {
    case 'up': {
      activeIdx++
      if (activeIdx >= slidesCnt.length) activeIdx = 0
      mainSlide.style.transform = `translateY(-${activeIdx * 100}vh)`
      sideBar.style.transform = `translateY(${activeIdx * 100}vh)`
      break
    }
    case 'down': {
      console.log(activeIdx)
      activeIdx--
      if (activeIdx < 0) activeIdx = slidesCnt.length - 1
      mainSlide.style.transform = `translateY(-${activeIdx * 100}vh)`
      sideBar.style.transform = `translateY(${activeIdx * 100}vh)`
      break
    }
  }
}

upBtn.addEventListener('click', () => changeSlide('up'))
downBtn.addEventListener('click', () => changeSlide('down'))

const myTimer = setInterval(() => changeSlide('up'), 5000)
// const prompt = require('prompt-sync')();

// var fname = prompt('Enter your name: ')
// var fage = prompt('Enter your age: ')
// console.log("Name: ", fname, "Age: ", fage);
// window.onload = function () {
//   var seconds = 00;
//   var tens = 00;
//   var appendTens = document.getElementById("tens");
//   var appendSeconds = document.getElementById("seconds");
//   var buttonStart = document.getElementById("button-start");
//   var buttonStop = document.getElementById("button-stop");
//   var buttonReset = document.getElementById("button-reset");
//   var Interval;

//   buttonStart.onclick = function () {
//     clearInterval(Interval);
//     Interval = setInterval(startTimer, 10);
//   };

//   buttonStop.onclick = function () {
//     clearInterval(Interval);
//   };

//   buttonReset.onclick = function () {
//     clearInterval(Interval);
//     tens = "00";
//     seconds = "00";
//     appendTens.innerHTML = tens;
//     appendSeconds.innerHTML = seconds;
//   };

//   function startTimer() {
//     tens++;

//     if (tens <= 9) {
//       appendTens.innerHTML = "0" + tens;
//     }

//     if (tens > 9) {
//       appendTens.innerHTML = tens;
//     }

//     if (tens > 99) {
//       console.log("seconds");
//       seconds++;
//       appendSeconds.innerHTML = "0" + seconds;
//       tens = 0;
//       appendTens.innerHTML = "0" + 0;
//     }

//     if (seconds > 9) {
//       appendSeconds.innerHTML = seconds;
//     }
//   }
// };

// function Slider( element ) {
// 	this.el = document.querySelector( element );
// 	this.init();
// }	

// Slider.prototype = {
// 	init: function() {
// 		this.links = this.el.querySelectorAll( "#slider-nav a" );
// 		this.wrapper = this.el.querySelector( "#slider-wrapper" );
// 		this.navigate();
// 	},
// 	navigate: function() {
	
// 		for( var i = 0; i < this.links.length; ++i ) {
// 			var link = this.links[i];
// 			this.slide( link );	
// 		}
// 	},
	
// 	animate: function( slide ) {
// 		var parent = slide.parentNode;
// 		var caption = slide.querySelector( ".caption" );
// 		var captions = parent.querySelectorAll( ".caption" );
// 		for( var k = 0; k < captions.length; ++k ) {
// 			var cap = captions[k];
// 			if( cap !== caption ) {
// 				cap.classList.remove( "visible" );
// 			}
// 		}
// 		caption.classList.add( "visible" );	
// 	},
	
// 	slide: function( element ) {
// 		var self = this;
// 		element.addEventListener( "click", function( e ) {
// 			e.preventDefault();
// 			var a = this;
// 			self.setCurrentLink( a );
//       console.log( a )
// 			var index = parseInt( a.getAttribute( "data-slide" ), 10 ) + 1;
// 			var currentSlide = self.el.querySelector( ".slide:nth-child(" + index + ")" );
// 			self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
// 			self.animate( currentSlide );
// 		}, false);
// 	},
// 	setCurrentLink: function( link ) {
// 		var parent = link.parentNode;
// 		var a = parent.querySelectorAll( "a" );
		
// 		link.className = "current";
		
// 		for( var j = 0; j < a.length; ++j ) {
// 			var cur = a[j];
// 			if( cur !== link ) {
// 				cur.className = "";
// 			}
// 		}
// 	}	
// };

// document.addEventListener( "DOMContentLoaded", function() {
// 	var aSlider = new Slider( "#slider" );
// });