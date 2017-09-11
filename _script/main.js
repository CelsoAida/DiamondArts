// Menu effects
function menu(){
	var li = Select('.icons ul li', true);
	var cName = 'anim' //class name

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
	var inf = info.welcome,
		msg = Select('.welcome .message')
		CreateAndAppend('p', msg, function(e){
			e.innerHTML = inf
			e.classList.add('active')
		})
};

AddEvnt(window, 'load', function(e){
	if(!location.hash) {
		location.hash = '#home'
	}
	HashSignal()

	menu();
	wlmsg();
	activeClass('#home')
})



function HashSignal() {
	var initHash = location.hash,
		hash = initHash.substr(1),
		pages = Select('.main > div', true)

	for(var i=0; i<pages.length; i++) {
		if(HasClass(pages[i], hash)) {
			pages[i].style.display = 'block';
		} else {
			pages[i].style.display = 'none'
		}
	}
	activeClass(initHash)
}


AddEvnt(window, 'hashchange', HashSignal)

function activeClass(framentID) {
	var reg = /[\#]/
	var active = Select('.icons ul li', true)
	for(var i=0; i<active.length; i++) {
		var id = active[i].firstChild.href.substr(active[i].firstChild.href.search(reg), active[i].firstChild.href.length)
		if(id === framentID) {
			active[i].classList.add('active')
		} else {
			active[i].classList.remove('active')
		}
	}

	
}



