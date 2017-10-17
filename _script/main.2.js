(function() {
	let btn = Select('.contact-btn', true),
			contactHolder = Select('.contact-holder', true),
			clas = 'active',
			hldrArr = []

	for(var i=0, len=btn.length; i<len; i++) {
		hldrArr.push(btn[i])
		AddEvnt(btn[i], 'click', showContact)
	}


	function showContact() {
		this.classList.toggle(clas)
		contactHolder[hldrArr.indexOf(this)].classList.toggle(clas)
	}
}());


// hire me dropdown buttons
(function(){
	let btn = Select('.dropDownBtn', true),
		opt = Select('.options', true),
		btnArr = [], cls = 'active',
		prdt = Select('.product .options p', true),
		prdtArr = [], prdtArr2 = []

		for(var i=0, len=btn.length; i<len; i++) {
			btnArr.push(btn[i])
			AddEvnt(btn[i], 'click', addClas)
		}

		// product category input field text
		for(var i=0; i<prdt.length; i++) {
			prdtArr.push(prdt[i])
			AddEvnt(prdt[i], 'click', inputTextOne)
		}

		function addClas() {
			for(var i=0; i<btn.length; i++) {
				if(i === btnArr.indexOf(this)) {
					opt[btnArr.indexOf(this)].classList.toggle(cls)
				} else {
					opt[i].classList.remove(cls)
				}
			}

		}

		function inputTextOne() {
			let inn = Select('.product .select .input'),
					subpr = Select('.subProduct .select .input'),
					specify = Select('.makeRequest input[name="specify"]')
				text = prdt[prdtArr.indexOf(this)].innerHTML.toString()

			subpr.innerHTML ='- Select Product Option -'
			inn.innerHTML = text
			inn.style.color = '#e4d887'
			opt[0].classList.remove(cls)

			productOpts()

			if(subpr.innerHTML === '- Select Product Option -') {
				subpr.style.color = 'rgba(228,216,135,0.3)'
				specify.style.display = 'none'
				specify.value = ''
			}
		}

		// product options settings
		function productOpts() {
			let div = Select('.product .select .input'),
				subprdt = Select('.subProduct'),
				products = '';

			if(div.innerHTML !== 'Corporate Identity Design') {
				subprdt.style.display = 'block'
			} else {
				subprdt.style.display = 'none'
				return
			}

			if(div.innerHTML === 'Web Design and Development') {
				products = info.services.webdesign
			} else if(div.innerHTML === 'Logo Design') {
				products = info.services.logodesign
			} else if(div.innerHTML === 'Graphic Design') {
				products = info.services.graphicdesign
			} else {
				return
			}

			(function(){
				let optionHolder = Select('.subProduct .options'),
						 specify = Select('.makeRequest input[name="specify"]')

				optionHolder.innerHTML = ''
				for(var i=0; i<products.length; i++) {
					CreateAndAppend('p', optionHolder, (p)=>{
						p.innerHTML = products[i];
						prdtArr2.push(p)
						AddEvnt(p, 'click', ()=>{
							let input = Select('.subProduct .select .input'),
								txt = p.innerHTML.toString()



							input.innerHTML = txt
							input.style.color = '#e4d887'
							opt[1].classList.remove(cls)

							if(input.innerHTML === 'Others' || input.innerText === 'Others') {
								specify.style.display = 'block'
							} else {
								specify.style.display = 'none'
								specify.value = ''
							}
						})
					})
				}
			}())
		}
}());

(function (){
	let bckgrnd = Select('.wrapper .backgrounds'), // backgrounds divs container
			 bckChild = bckgrnd.childNodes, // backgrounds divs
			 start = 4, bckChildArr = [], init = ''

			 for(let i=0, len=bckChild.length; i<len; i++) {
				 if(i%2 === 0)
					 continue

				 bckChildArr.push(bckChild[i])
			 }
			 let last = bckChildArr.length - 1

				 bckChildArr[start].classList.add('active')

			 init = setInterval(slider ,4000)

			 function slider() {
				 if(start > last) {
					 start = 0
				 }

				 for(let i=0, len=bckChildArr.length; i<len; i++) {
					 if(i === start) {
							 bckChildArr[i].classList.add('active')
					 } else {
						  bckChildArr[i].classList.remove('active')
					 }
				 }

				 print(start)

				 start += 1
			 }
}());
