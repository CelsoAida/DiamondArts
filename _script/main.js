// Menu effects
var buttons = Select('.icons ul li', true)

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
			Clas(this, 'remove', cName)
		else
			Clas(this, 'add', cName)
	}
};


// import text to welcome message
function wlmsg(){
	var inf = info.welcome.message,
		inf = inf.split(''),
		msg = Select('.welcome .message'),
		init, count = 0;


		CreateAndAppend('h1', msg, e=>{
			e.innerHTML = info.welcome.title
		})

		CreateAndAppend('p', msg, p=>{
			init = setInterval(function(){
				Clas(p, 'add', 'msg')
				p.innerHTML += inf[count]
				count++
				if(count === inf.length) {
					clearInterval(init)
					CreateAndAppend('p', msg, e=>{
						e.innerHTML = ' - Prince Donkor'
						Clas(e, 'add', 'name')
					})
				}
			}, 30)	
		})
};

AddEvnt(window, 'load', function(e){
	if(!location.hash) {
		location.hash = '#home'
		activeClass('#home')
	}
	HashSignal()
	about()
	aboutSpanAnim();
	menu();
	wlmsg();
})



function HashSignal() {
	var initHash = location.hash,
		hash = initHash.substr(1),
		pages = Select('.main > div', true)

	for(var i=0; i<pages.length; i++) {
		if(HasClass(pages[i], hash)) {
			pages[i].classList.add('show')
		} else {
			pages[i].classList.remove('show')
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

AddEvnt(buttons[0], 'click', ()=>{
	var p = Select('.msg'),
		pp = Select('.name'),
		inf = info.welcome.message,
		inf = inf.split(''),
		count = 0, init
	p.innerHTML = '';
	pp.innerHTML = ''

	Clas(pp, 'remove', 'name')

	init = setInterval(function(){
		p.innerHTML += inf[count]
		count++
		if(count === inf.length) {
			clearInterval(init)
			pp.innerHTML = ' - Prince Donkor'
			Clas(pp, 'add', 'name')
		}
	}, 30)
})


function about() {
	var ss = info.aboutme,
	regex = /\s/ig,
	div = Select('.inner_container .info')
	ss = ss.split(regex)

	CreateAndAppend('p', div, (p)=>{
		for(var i=0; i<ss.length; i++) {
			p.innerHTML += '<span>' + ss[i]+ ' </span>';
		}
	})
}

AddEvnt(buttons[1], 'click', function(){
	var p = Select('.inner_container .info p');
	p.remove();
	about();
	aboutSpanAnim();
})

function aboutSpanAnim() {
	var span = Select('.inner_container .info p span', true)

	for(var i=0; i<span.length; i++) {
		var index = Math.floor(Math.random()*info.animName.length),
			dur = Math.random()*1,
			delay = Math.random()*2
		// span[i].style.display = 'inline-block';
		span[i].style.opacity = 0;
		span[i].style.webkitAnimation = info.animName[index] + ' ' + dur + 's ease-in-out ' + delay + 's forwards';
		span[i].style.mozAnimation = info.animName[index] + ' ' + dur + 's ease-in-out ' + delay + 's forwards';
		span[i].style.msAnimation = info.animName[index] + ' ' + dur + 's ease-in-out ' + delay + 's forwards';
		span[i].style.OAnimation = info.animName[index] + ' ' + dur + 's ease-in-out ' + delay + 's forwards';
		span[i].style.animation = info.animName[index] + ' ' + dur + 's ease-in-out ' + delay + 's forwards';
	}
}