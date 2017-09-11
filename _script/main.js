// Menu effects
function menu(){
	var li = Select('.icons ul li', true);
	var cName = 'active' //class name

	for(var i=0; i<li.length; i++) {
		AddEvnt(li[i], 'mouseenter', clas)
		AddEvnt(li[i], 'mouseleave', clas)
	}

	function clas() {
		var chec = HasClass(this, cName)
		if(chec)
			this.classList.remove(cName)
		else
			this.classList.add(cName)
	}
};


// import text to welcome message
function wlmsg(){
	var dat = info.welcome,
		regex = /\W+[. \, ! @]/ig,
		words = dat.split(regex),
		msg = Select('.message'),
		interval, count = 0, end = words.length;

	function makeElements() {
		var p = document.createElement('p');
		msg.appendChild(p)

		interval = setInterval(()=>{
			p.innerHTML += words[count]
			count++

			if(count >= end) {
				clearInterval(interval, 100)
				var btn = Select('.welcome a')
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
	var btn = Select('.welcome a')
	var welcm = Select('.welcome')
	var home = Select('.navigate')

	AddEvnt(btn, 'click', showHome)

	function showHome() {
		welcm.style.display = 'none';
		home.style.display = 'block';
		homeNavigationAnim()
	}
};

function homeNavigationAnim() {
	var elems = Select('.navigate a', true)
	for(var i=0; i<elems.length; i++) {
		var delay = Math.random()*2;
		elems[i].style.webkitAnimation = 'popup 0.8s ' + delay + 's ease-in-out forwards'
		elems[i].style.mozAnimation = 'popup 0.8s ' + delay + 's ease-in-out forwards'
		elems[i].style.msAnimation = 'popup 0.8s ' + delay + 's ease-in-out forwards'
		elems[i].style.OAnimation = 'popup 0.8s ' + delay + 's ease-in-out forwards'
		elems[i].style.animation = 'popup 0.8s ' + delay + 's ease-in-out forwards'
		console.log(delay)
	}
}

AddEvnt(window, 'load', function(e){
	menu();
	wlmsg();
	hme();	
})
