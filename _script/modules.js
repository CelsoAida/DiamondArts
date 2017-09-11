// chec if a class is present
function HasClass(elem, clsname) {
	this.elem = elem
	this.clas = clsname

	// if the element does not have any class at all return false
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

// addEventListener
function AddEvnt(elem, evt, callback) {
	this.elem = elem
	this.evt = evt
	this.call = callback

	this.elem.addEventListener(this.evt, this.call);
}

// Element Selector
function Select(elem, opt) {
	this.elem = elem
	this.opt = opt
	var elems;


	// if second parameter is given and is equal to true
	// then Select all the elements of that nature
	if(this.opt === true)
		elems = document.querySelectorAll(this.elem)
	// if the second parameter is not passed then
	// select just on element or the first element of this nature
	else if(!this.opt)
		elems = document.querySelector(this.elem)


	return elems
}