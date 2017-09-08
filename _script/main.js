// Menu effects
function menu(){
	var li = document.querySelectorAll('.icons ul li');
	var cName = 'active' //class name

	for(var i=0; i<li.length; i++) {
		li[i].addEventListener('mouseenter', clas)
		li[i].addEventListener('mouseleave', clas)
	}

	function clas() {
		var chec = hasClass(this, cName)
		if(chec)
			this.classList.remove(cName)
		else
			this.classList.add(cName)
	}
};


// chec if a class is present
function hasClass(elem, clsname) {
	this.elem = elem
	this.clas = clsname

	if(this.elem.classList.length === 0) {
		return false;
	}

	for(var i=0; i<this.elem.classList.length; i++) {
		if(this.elem.classList[i] === this.clas)
			return true
		else
			continue
			return false
	}
}

// import text to welcome message
function wlmsg(){
	var dat = info.welcome,
		regex = /\W+[. \, ! @]/ig,
		words = dat.split(regex),
		msg = document.querySelector('.message'),
		interval, count = 0, end = words.length;

	function makeElements() {
		var p = document.createElement('p');
		msg.appendChild(p)

		interval = setInterval(()=>{
			p.innerHTML += words[count]
			count++

			if(count >= end) {
				clearInterval(interval, 100)
				var btn = document.querySelector('.welcome a')
				setTimeout(function(){
					btn.style.display = 'block'
					setTimeout(function(){
						btn.classList.add('show')
					}, 100)
				}, 200)
			}
		}, 180)

		
	}
	makeElements();
};


// show home page
function hme(){
	var btn = document.querySelector('.welcome a')
	var welcm = document.querySelector('.welcome')
	var home = document.querySelector('.navigate')

	btn.addEventListener('click', showHome)

	function showHome() {
		welcm.style.display = 'none';
		home.style.display = 'block';
	}
};

var delta = {
	val: null,
}
var init = 0;

window.addEventListener('load', function(e){
	menu();
	wlmsg();
	hme();
	
})



addEventListener('wheel', function(e){
	delta.val = e.wheelDeltaY || e.deltaY;
	cnt();
})

function cnt() {
	if(delta.val < 0) {
		console.log('delta is negative: ' + delta.val)
		init--
		ch()
	} else {
		console.log('delta is positive: ' + delta.val)
		init++
		ch()
	}

	function ch(){
		if(init > 5) {
			init = 0
		} else if(init < 0) {
			init = 5
		}
	}
	

	console.log("delta: " + delta.val)
}