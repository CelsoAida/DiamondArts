// Menu effects
(function(){
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
})();





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