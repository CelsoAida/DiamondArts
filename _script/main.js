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
						e.innerHTML = 'View my work'
						Clas(e, 'add', 'name')
						AddEvnt(e, 'click', ()=>{
							location.hash = 'portfolio'
						})
					})
				}
			}, 25)
		})
};

AddEvnt(window, 'load', function(e){
	if(!location.hash) {
		location.hash = '#home'
		activeClass('#home')
	}
	HashSignal()
	about()
	aboutSpanAnim()
	menu()
	wlmsg()
	skilClick()
	skillsOnLoad()
	navColorChange(location.hash)
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
	navColorChange(initHash)
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
	skillsOnLoad()
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

function skillsOnLoad() {
	var skill = info.skills,
		div = Select('.skill_info p'),
		rate = Select('.usage_thumb')

		div.innerHTML = 'Skill: ' + skill[0].name + '<br \
		/>' + 'Version: ' + skill[0].version + '<br />'
		setTimeout(function(){
			rate.style.width = skill[0].percent;
		}, 1000)

}


function skilClick() {
	var btn = Select('.skills img', true),
		skill = info.skills,
		div = Select('.skill_info p'); arr = [],
		rate = Select('.usage_thumb')

		for(var i=0; i<btn.length; i++) {
			arr.push(btn[i]);
		}

		for(var j=0; j<btn.length; j++) {
			AddEvnt(btn[j], 'click', function(){
				var index = arr.indexOf(this)
				div.innerHTML = 'Skill: ' + skill[index].name + '<br \
				/>' + 'Version: ' + skill[index].version + '<br />'

				rate.style.width = skill[index].percent;
			})
		}
}

(function(){
	var div = Select('.folio-holder div', true),
		len = div.length;

	for(var i=0; i<len; i++) {

		AddEvnt(div[i], 'mouseenter', function(){
			Clas(this, 'add', 'active')
		})

		AddEvnt(div[i], 'mouseleave', function(){
			Clas(this, 'remove', 'active')
		})
	}
})();

// change menu font color for some pages if text is not visible
function navColorChange(id) {
	var id = location.hash.substr(1),
		elem = Select('.icons ul');
		cls = 'color-change'

	if(id === 'portfolio' || id === 'services')
		elem.classList.add(cls)
	else
		elem.classList.remove(cls)
}


function serviceAnim() {
	var div = Select('.services .container .holder > div', true)
		len = div.length;

		for(var i=0; i<len; i++) {
			AddEvnt(div[i], 'mouseenter', function(){
				Clas(this, 'add', 'active')
			})

			AddEvnt(div[i], 'mouseleave', function(){
				Clas(this, 'remove', 'active')
			})
		}
}

serviceAnim()

// leave a msg inputs animation
function inputAnim() {
	let leaveMsg = Select('.leaveMsg form'),
		cont = new HasClass(Select('.hireMe'), 'show'),
		h1 = Select('.leaveMsg h1'),
		cls  = 'marginRemove'


		leaveMsg = leaveMsg.childNodes

		h1.classList.add(cls)

		for(var i=0, len=leaveMsg.length; i<len; i++) {
			if(i%2 === 0) {
					continue
			}

			leaveMsg[i].classList.add(cls)
		}

		if(cont) {
			setTimeout(()=>{
				for(var i=0, len=leaveMsg.length; i<len; i++) {
					if(i%2 === 0) {
						continue
					}

					var dur = GetRandom(1, 2),
						delay = Math.random() * 1;

					leaveMsg[i].style.webkitTransition = `all ${dur}s ${delay}s ease-in-out`;
					leaveMsg[i].style.mozTransition = `all ${dur}s ${delay}s ease-in-out`;
					leaveMsg[i].style.transition = `all ${dur}s ${delay}s ease-in-out`;
					leaveMsg[i].classList.remove(cls)
				}
				let dura = GetRandom(1,2),
						 delays = GetRandom(0, 1)
				h1.style.webkitTransition = `all ${dur}s ${delays}s ease-in-out`
				h1.style.mozTransition = `all ${dur}s ${delays}s ease-in-out`
				h1.style.transition = `all ${dur}s ${delays}s ease-in-out`
				h1.classList.remove(cls)
			}, 300)
		}
}

// hire me input animation
function hireMeAnim() {
	let mkRequest = Select('.makeRequest form'),
			 mkReqChild = mkRequest.childNodes,
			 cont = new HasClass(Select('.hireMe'), 'show'),
			 h1 = Select('.makeRequest h1'),
			 cls = 'marginRemove'

			 h1.classList.add(cls)

			 for(var i=0, len=mkReqChild.length; i<len; i++) {
	 			if(i%2 === 0) {
	 					continue
	 			}

	 			mkReqChild[i].classList.add(cls)
	 		}

			if(cont) {
				setTimeout(()=>{
					for(var i=0, len=mkReqChild.length; i<len; i++) {
						if(i%2 === 0) {
							continue
						}

						var dur = GetRandom(1, 2),
							delay = Math.random() * 1;

						mkReqChild[i].style.webkitTransition = `all ${dur}s ${delay}s ease-in-out`;
						mkReqChild[i].style.mozTransition = `all ${dur}s ${delay}s ease-in-out`;
						mkReqChild[i].style.transition = `all ${dur}s ${delay}s ease-in-out`;
						mkReqChild[i].classList.remove(cls)
					}
					let dura = GetRandom(1,2),
							 delays = GetRandom(0, 1)
					h1.style.webkitTransition = `all ${dur}s ${delays}s ease-in-out`
					h1.style.mozTransition = `all ${dur}s ${delays}s ease-in-out`
					h1.style.transition = `all ${dur}s ${delays}s ease-in-out`
					h1.classList.remove(cls)
				}, 300)
			}

}

inputAnim()
hireMeAnim()

AddEvnt(buttons[4], 'click', ()=>{
	inputAnim()
	hireMeAnim()
})
