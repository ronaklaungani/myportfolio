function openhome() {
					
					changedisplay('home-div', 'block')
					changedisplay('trainstops', 'none')
					changedisplay('step-one-div', 'none')
					changedisplay('step-two-div', 'none')
					changedisplay('step-three-div', 'none')
					changedisplay('step-four-div', 'none')
					changedisplay('jersey-box-1', 'none')

					document.getElementById('main-tint').style.opacity = '50%';
					document.getElementById('bg-video').style.filter = 'blur(0px)';

					changedisplay('jersey-box-2', 'none')

				}
					
function openstepone() {
					
					changedisplay('home-div', 'none')
					changedisplay('trainstops', 'block')
					changedisplay('step-one-div', 'block')
					changedisplay('step-two-div', 'none')
					changedisplay('step-three-div', 'none')
					changedisplay('step-four-div', 'none')
					changedisplay('jersey-box-1', 'block')

					changeclassname('step-1-id', 'nav-tab-active')
					changeclassname('step-2-id', 'nav-tab-inactive')
					changeclassname('step-3-id', 'nav-tab-inactive')
					changeclassname('step-4-id', 'nav-tab-inactive')

					changeinnerhtml('step-1-text', 'Select Sport')
					changeinnerhtml('step-2-text', 'Select Emblem')
					changeinnerhtml('step-3-text', 'Choose Color')
					changeinnerhtml('step-4-text', 'Add Your Customs')

					const text2 = document.getElementById('step-2-text');
					text2.setAttribute("onclick", "")

					const text3 = document.getElementById('step-3-text');
					text3.setAttribute("onclick", "")

					document.getElementById('main-tint').style.opacity = '80%';
					document.getElementById('bg-video').style.filter = 'blur(4px)';

					const jerseybox1 = document.getElementById('jersey-box-1');
					jerseybox1.style.width = '40%';
					jerseybox1.style.marginLeft = '48%';

					changedisplay('jersey-box-2', 'none')

				}

function opensteptwo() {

					changedisplay('home-div', 'none')
					changedisplay('trainstops', 'block')
					changedisplay('step-one-div', 'none')
					changedisplay('step-two-div', 'block')
					changedisplay('step-three-div', 'none')
					changedisplay('step-four-div', 'none')
					changedisplay('jersey-box-1', 'block')

					changeclassname('step-1-id', 'nav-tab-inactive')
					document.getElementById('step-1-id').style.cursor = 'pointer';
					changeclassname('step-2-id', 'nav-tab-active')
					changeclassname('step-3-id', 'nav-tab-inactive')
					changeclassname('step-4-id', 'nav-tab-inactive')

					changeinnerhtml('step-1-text', 'Change Selection')
					changeinnerhtml('step-2-text', 'Select Emblem')
					changeinnerhtml('step-3-text', 'Choose Color')
					changeinnerhtml('step-4-text', 'Add Your Customs')

					const text1 = document.getElementById('step-1-text');
					text1.setAttribute("onclick", "openstepone()")

					const text3 = document.getElementById('step-3-text');
					text3.setAttribute("onclick", "")

					const jerseybox1 = document.getElementById('jersey-box-1');
					jerseybox1.style.width = '40%';
					jerseybox1.style.marginLeft = '48%';

					changedisplay('jersey-box-2', 'none')

					updatestep1ofnav();
				}

function openstepthree() {
					
					changedisplay('home-div', 'none')
					changedisplay('trainstops', 'block')
					changedisplay('step-one-div', 'none')
					changedisplay('step-two-div', 'none')
					changedisplay('step-three-div', 'block')
					changedisplay('step-four-div', 'none')
					changedisplay('jersey-box-1', 'block')

					changeclassname('step-1-id', 'nav-tab-inactive')
					document.getElementById('step-1-id').style.cursor = 'pointer';
					changeclassname('step-2-id', 'nav-tab-inactive')
					document.getElementById('step-2-id').style.cursor = 'pointer';
					changeclassname('step-3-id', 'nav-tab-active')
					changeclassname('step-4-id', 'nav-tab-inactive')

					changeinnerhtml('step-1-text', 'Change Selection')
					changeinnerhtml('step-2-text', 'Change Selection')
					changeinnerhtml('step-3-text', 'Choose Color')
					changeinnerhtml('step-4-text', 'Add Your Customs')

					const text1 = document.getElementById('step-1-text');
					text1.setAttribute("onclick", "openstepone()")

					const text2 = document.getElementById('step-2-text');
					text2.setAttribute("onclick", "opensteptwo()")

					const jerseybox1 = document.getElementById('jersey-box-1');
					jerseybox1.style.width = '40%';
					jerseybox1.style.marginLeft = '48%';

					changedisplay('jersey-box-2', 'none')

					updatestep1ofnav();

					updatestep2ofnav();

				}

function openstepfour() {

					
					changedisplay('home-div', 'none')
					changedisplay('trainstops', 'block')
					changedisplay('step-one-div', 'none')
					changedisplay('step-two-div', 'none')
					changedisplay('step-three-div', 'none')
					changedisplay('step-four-div', 'block')
					changedisplay('jersey-box-1', 'block')

					changeclassname('step-1-id', 'nav-tab-inactive')
					document.getElementById('step-1-id').style.cursor = 'pointer';
					changeclassname('step-2-id', 'nav-tab-inactive')
					document.getElementById('step-2-id').style.cursor = 'pointer';
					changeclassname('step-3-id', 'nav-tab-inactive')
					document.getElementById('step-3-id').style.cursor = 'pointer';
					changeclassname('step-4-id', 'nav-tab-active')

					changeinnerhtml('step-1-text', 'Change Selection')
					changeinnerhtml('step-2-text', 'Change Selection')
					changeinnerhtml('step-3-text', 'Change Selection')
					changeinnerhtml('step-4-text', 'Add Your Customs')

					const text1 = document.getElementById('step-1-text');
					text1.setAttribute("onclick", "openstepone()")

					const text2 = document.getElementById('step-2-text');
					text2.setAttribute("onclick", "opensteptwo()")

					const text3 = document.getElementById('step-3-text');
					text3.setAttribute("onclick", "openstepthree()")
					


					const jersey1filter = document.getElementById('jersey1id').style.filter;

					document.getElementById('jersey2id').style.filter = jersey1filter;

					let widthindex = 0;



						setInterval(function() {
						const jerseybox1 = document.getElementById('jersey-box-1');
						console.log(widthindex);
						if (widthindex >= 6) {
							clearInterval(); 
						
						 } else  {
						widthindex += 0.1;
						let changedwidth = 40 - widthindex;
						jerseybox1.style.width = "" + changedwidth + "%";
					} }, 1);


					// 	let marginindex = 0;

					// 	setInterval(function() { 
					// 	const jerseybox1 = document.getElementById('jersey-box-1');
					// 	console.log(marginindex);
					// 	if (marginindex >= 180) {
					// 		clearInterval(); 
						
					// 	 } else  {
					// 	marginindex += 1;
					// 	let changedmargin = 700 - marginindex;
					// 	jerseybox1.style.marginLeft = "" + changedmargin + "px";
					// } }, 10);

					// function animatejersey1() {
					// // jerseybox1.style.width = '34%';
					// // jerseybox1.style.marginRight = '-140px';

					// }

					setTimeout(function() {
					changedisplay('jersey-box-2', 'block');
					}, 0)



					updatestep1ofnav();

					updatestep2ofnav();

					updatestep3ofnav();
				}


					



function changedisplay(idname, displaytype) {
			document.getElementById("" + idname + "").style.display = "" + displaytype + "";
}

function changeclassname(idname, classname) {
			document.getElementById("" + idname + "").className = "" + classname + "";
}

function changeinnerhtml(idname, textvalue) {
			document.getElementById("" + idname + "").innerHTML = "" + textvalue + "";
}

function changeopacity(idname, opacityvalue) {
			document.getElementById("" + idname + "").style.opacity = "" + opacityvalue + "";
}

function changesrc(idname, srcvalue) {
			document.getElementById("" + idname + "").src = "" + srcvalue + "";
}

function deleteitem(fetchedDeleteId) {
	var idToDelete = 'item' + fetchedDeleteId + '';
	document.getElementById('' + idToDelete + '').remove();

	var spacerToDelete = 'spacer' + fetchedDeleteId + '';
	document.getElementById('' + spacerToDelete + '').remove();

	var tablelength = document.getElementById("cart-table").rows.length;

	var cartlength = tablelength/2;

	document.getElementById('cart-counter').style.display = 'block';
	document.getElementById('cart-counter').innerHTML = '' + cartlength + '';

	var tablelength = document.getElementById("cart-table").rows.length;

if (tablelength == 0) { 
			changedisplay('cart-counter', 'none');
			changedisplay('cart-empty', 'block');
			changedisplay('billing', 'none');
 }
 else { changedisplay('billing', 'block'); }

 calculatebilling();

 hidebilling();

}


function updatestep1ofnav() { 

			
					const activestates = document.getElementsByClassName('tab-active');

					const activesportid = activestates[0].id;
					const activeemblemid = activestates[1].id;
					const activecolorid = activestates[2].id;

					console.log(activesportid, activeemblemid, activecolorid);


					var step1icon = document.getElementById('step-1-icon-id');

					document.getElementById('ts-1-id').style.display = 'none';
					step1icon.style.display = 'Block';

					if (activesportid == 'soccer-id') {
						step1icon.src = 'assets/soccer.svg'
					}

					else if (activesportid == 'volley-id') {
						step1icon.src = 'assets/volley.svg'
					}

					else if (activesportid == 'basketball-id') {
						step1icon.src = 'assets/basketball.svg'
					}

					else if (activesportid == 'baseball-id') {
						step1icon.src = 'assets/baseball.svg'
					}

					else if (activesportid == 'tt-id') {
						step1icon.src = 'assets/tt.svg'
					}

					else if (activesportid == 'football-id') {
						step1icon.src = 'assets/rugby.svg'
					}
				}


function updatestep2ofnav() {
					const activestates = document.getElementsByClassName('tab-active');

					const activesportid = activestates[0].id;
					const activeemblemid = activestates[1].id;
					const activecolorid = activestates[2].id;

					console.log(activesportid, activeemblemid, activecolorid);


					var step2icon = document.getElementById('step-2-icon-id');

					document.getElementById('ts-2-id').style.display = 'none';
					step2icon.style.display = 'Block';

					if (activeemblemid == 'blank-id') {
						step2icon.src = 'assets/blank-disk.svg'
					}

					else if (activeemblemid == 'manu-id') {
						step2icon.src = 'assets/manu.svg'
					}

					else if (activeemblemid == 'manc-id') {
						step2icon.src = 'assets/manc.svg'
					}

					else if (activeemblemid == 'rma-id') {
						step2icon.src = 'assets/rma.svg'
					}

					else if (activeemblemid == 'ars-id') {
						step2icon.src = 'assets/ars.svg'
					}

					else if (activeemblemid == 'barc-id') {
						step2icon.src = 'assets/barc.svg'
					}

					else if (activeemblemid == 'liv-id') {
						step2icon.src = 'assets/liv.svg'
					}

					else if (activeemblemid == 'chel-id') {
						step2icon.src = 'assets/chel.svg'
					}

				}


function updatestep3ofnav() {
					const activestates = document.getElementsByClassName('tab-active');

					const activesportid = activestates[0].id;
					const activeemblemid = activestates[1].id;
					const activecolorid = activestates[2].id;

					console.log(activesportid, activeemblemid, activecolorid);

					var step3color = document.getElementById('ts-3-id');

					var pickdiskcolor = document.getElementById('' + activecolorid + '').getElementsByClassName('color-disks')[0].style.backgroundColor;

					step3color.innerHTML = '';

					step3color.style.backgroundColor = pickdiskcolor;
				}


function selectthissport(fetchedId) {


	changeclassname('soccer-id', 'tab-inactive')
	changeclassname('volley-id', 'tab-inactive')
	changeclassname('basketball-id', 'tab-inactive')
	changeclassname('baseball-id', 'tab-inactive')
	changeclassname('tt-id', 'tab-inactive')
	changeclassname('football-id', 'tab-inactive')

	console.log('' + fetchedId + '');

	changeclassname('' + fetchedId + '', 'tab-active');

	}

function selectthisemblem(fetchedId) {

	changeclassname('blank-id', 'tab-inactive')
	changeclassname('manu-id', 'tab-inactive')
	changeclassname('manc-id', 'tab-inactive')
	changeclassname('rma-id', 'tab-inactive')
	changeclassname('ars-id', 'tab-inactive')
	changeclassname('barc-id', 'tab-inactive')
	changeclassname('liv-id', 'tab-inactive')
	changeclassname('chel-id', 'tab-inactive')

	console.log('' + fetchedId + '');

	changeclassname('' + fetchedId + '', 'tab-active');

	if (fetchedId == 'blank-id') {
					 changesrc('emblem', 'assets/manu.svg');
					 changeopacity('emblem', '0%');
		}

	else if (fetchedId == 'manu-id') {
					 changesrc('emblem', 'assets/manu.svg');
					 changeopacity('emblem', '100%');
		}

	else if (fetchedId == 'manc-id') {
					 changesrc('emblem', 'assets/manc.svg');
					 changeopacity('emblem', '100%');
		}

	else if (fetchedId == 'rma-id') {
					 changesrc('emblem', 'assets/rma.svg');
					 changeopacity('emblem', '100%');
		}

	else if (fetchedId == 'ars-id') {
					 changesrc('emblem', 'assets/ars.svg');
					 changeopacity('emblem', '100%');
		}

	else if (fetchedId == 'barc-id') {
					 changesrc('emblem', 'assets/barc.svg');
					 changeopacity('emblem', '100%');
		}

	else if (fetchedId == 'liv-id') {
					 changesrc('emblem', 'assets/liv.svg');
					 changeopacity('emblem', '100%');
		}

	else if (fetchedId == 'chel-id') {
					 changesrc('emblem', 'assets/chel.svg');
					 changeopacity('emblem', '100%');
		}

	}



function selectthiscolor(fetchedId) {

	changeclassname('white-id', 'tab-inactive')
	changeclassname('blue-id', 'tab-inactive')
	changeclassname('red-id', 'tab-inactive')

	console.log('' + fetchedId + '');

	changeclassname('' + fetchedId + '', 'tab-active');

	if (fetchedId == 'white-id') {
					 document.getElementById('jersey1id').style.filter = "hue-rotate(0deg) saturate(0) brightness(2)";			 
		}

	else if (fetchedId == 'blue-id') {
					 document.getElementById('jersey1id').style.filter = "hue-rotate(220deg) saturate(0.5) brightness(0.7)";			 
		}

	else if (fetchedId == 'red-id') {
					 document.getElementById('jersey1id').style.filter = "hue-rotate(0deg) saturate(0.9) brightness(1)";			 
		}

	}

function selectthissize(fetchedId) {

	changeclassname('xs-id', 'tab-inactive')
	changeclassname('s-id', 'tab-inactive')
	changeclassname('m-id', 'tab-inactive')
	changeclassname('l-id', 'tab-inactive')
	changeclassname('xl-id', 'tab-inactive')
	changeclassname('xxl-id', 'tab-inactive')

	console.log('' + fetchedId + '');

	changeclassname('' + fetchedId + '', 'tab-active');

	var fetchsizetext = document.getElementById('' + fetchedId + '').getElementsByClassName('color-disks')[0];

	const sizevalue = fetchsizetext.innerHTML;

	console.log('' + sizevalue + '');

	document.getElementById('add-to-cart-bttn').innerHTML = 'Add ' + sizevalue + ' to your cart';
	}


function typethename() {

var typedtext = document.getElementById('jersey-name-id').value;
document.getElementById('jersey-text').innerHTML = typedtext;

}

function typethenumber() {

var typednumber = document.getElementById('jersey-no-id').value;
document.getElementById('jersey-number').innerHTML = typednumber;

}


function changetexttoblack() { 
					document.getElementById('jersey-text').style.color = 'black';
					document.getElementById('jersey-number').style.color = 'black';

					const changecolorelement = document.getElementById('changetextcolor');
					changecolorelement.innerHTML = 'Change text color to White';
					changecolorelement.setAttribute("onclick", "changetexttowhite()");
					}


function changetexttowhite() { 
					document.getElementById('jersey-text').style.color = 'white';
					document.getElementById('jersey-number').style.color = 'white';

					const changecolorelement = document.getElementById('changetextcolor');
					changecolorelement.innerHTML = 'Change text color to Black';
					changecolorelement.setAttribute("onclick", "changetexttoblack()");
					}

function hidebilling() { var tablelength = document.getElementById("cart-table").rows.length;
					if (tablelength == 0) {
						changedisplay('billing', 'none');
					}
					else { changedisplay('billing', 'block'); }
					}

function opencart() { 
					changedisplay('cart-window', 'block');

					hidebilling();
					}

function closecart() { 
					changedisplay('cart-window', 'none')
					}

function openabout() { 
					changedisplay('about-window', 'block');
					}

function closeabout() { 
					changedisplay('about-window', 'none')
					}


function addtocart() {


// capturing ids for cart values

const activestates = document.getElementsByClassName('tab-active');

const activesportid = activestates[0].id;
const activeemblemid = activestates[1].id;
const activecolorid = activestates[2].id;
const activesizeid = activestates[3].id;
var typedtext = document.getElementById('jersey-name-id').value;
var typednumber = document.getElementById('jersey-no-id').value;

console.log(activesportid, activeemblemid, activecolorid, activesizeid, typedtext, typednumber);


// logic to add values for every id

// logic for sport

var sportTextForCart;

if (activesportid == 'soccer-id') {
						sportTextForCart = 'Soccer'
					}

else if (activesportid == 'volley-id') {
						sportTextForCart = 'Volleyball'
					}

else if (activesportid == 'basketball-id') {
						sportTextForCart = 'Basketball'
					}

else if (activesportid == 'baseball-id') {
						sportTextForCart = 'Baseball'
					}

else if (activesportid == 'tt-id') {
						sportTextForCart = 'Table Tennis'
					}

else if (activesportid == 'football-id') {
						sportTextForCart = 'Football'
					}

console.log(sportTextForCart);

// logic for emblem

var emblemTextForCart;

if (activeemblemid == 'blank-id') {
					 emblemTextForCart = 'No Emblem'
		}

	else if (activeemblemid == 'manu-id') {
					 emblemTextForCart = 'Manchester United'
		}

	else if (activeemblemid == 'manc-id') {
					 emblemTextForCart = 'Manchester City'
		}

	else if (activeemblemid == 'rma-id') {
					 emblemTextForCart = 'Real Madrid'
		}

	else if (activeemblemid == 'ars-id') {
					 emblemTextForCart = 'Arsenal'
		}

	else if (activeemblemid == 'barc-id') {
					 emblemTextForCart = 'Barcelona'
		}

	else if (activeemblemid == 'liv-id') {
					 emblemTextForCart = 'Liverpool'
		}

	else if (activeemblemid == 'chel-id') {
					 emblemTextForCart = 'Chelsea'
		}

console.log(emblemTextForCart);

// logic for color

var colorTextForCart;

if (activecolorid == 'white-id') {
					 colorTextForCart = 'White'
		}

	else if (activecolorid == 'blue-id') {
					 colorTextForCart = 'Blue'
		}

	else if (activecolorid == 'red-id') {
					 colorTextForCart = 'Red'
		}

console.log(colorTextForCart);

// logic for size

var sizeTextForCart;

if (activesizeid == 'xs-id') {
					sizeTextForCart = 'XS'
}

else if (activesizeid == 's-id') {
					sizeTextForCart = 'S'
}

else if (activesizeid == 'm-id') {
					sizeTextForCart = 'M'
}

else if (activesizeid == 'l-id') {
					sizeTextForCart = 'L'
}

else if (activesizeid == 'xl-id') {
					sizeTextForCart = 'XL'
}

else if (activesizeid == 'xxl-id') {
					sizeTextForCart = 'XXL'
}

console.log(sizeTextForCart);


// logic for name and number

var typedtext = document.getElementById('jersey-name-id').value;
console.log(typedtext);

if (typedtext == '') {
	typedtext = 'No Name';
}

var typednumber = document.getElementById('jersey-no-id').value;
console.log(typednumber);

if (typednumber == '') {
	typednumber = 'No Number';
}


// creating the cart structure

var tablelength = document.getElementById("cart-table").rows.length;

var rowid = (tablelength/2) + 1;

const thetable = document.getElementById("cart-table");

const spacer = document.createElement("tr");
spacer.setAttribute("class", "spacer");
spacer.setAttribute("id", "spacer" + rowid + "");

const itemlinetr = document.createElement("tr");
itemlinetr.setAttribute("id", "item" + rowid);

const itemdetails = document.createElement("td");
itemdetails.setAttribute("class", "item-details");

const innertable = document.createElement("table");

const innertabletr1 = document.createElement("tr");

const cartitemtd = document.createElement("td");
cartitemtd.setAttribute("class", "cart-item");
cartitemtd.innerHTML = '<span id="cart-data-qty">1</span> x <span id="cart-data-jersey-type">' + sportTextForCart + ' Jersey</span>';

const removebttntd = document.createElement("td");

const removebttn = document.createElement("i");
removebttntd.setAttribute("class", "las la-trash-alt");
removebttntd.setAttribute("id", "" + rowid + "");
removebttntd.setAttribute("onclick", "deleteitem(this.id)");

const innertabletr2 = document.createElement("tr");

const coloremblemtd = document.createElement("td");
coloremblemtd.setAttribute("class", "cart-description");
coloremblemtd.innerHTML = '<span id="cart-data-color">' + colorTextForCart + '</span> • <span id="cart-data-emblem">' + emblemTextForCart + '</span>';

const innertabletr3 = document.createElement("tr");

const namenumbersizetd = document.createElement("td");
namenumbersizetd.setAttribute("class", "cart-description");
namenumbersizetd.innerHTML = 'Name: <span id="cart-data-text">' + typedtext + '</span> • Jersey No: <span id="cart-data-number">' + typednumber + '</span> • <span id="cart-data-size">' + sizeTextForCart + '</span>';

var pricePerJersey = 19.99;

const pricetds = document.createElement("td");
pricetds.setAttribute("class", "cart-price");
pricetds.innerHTML = "$" + pricePerJersey;


thetable.append(spacer);
thetable.append(itemlinetr);
	itemlinetr.append(itemdetails);
		itemdetails.append(innertable);
			innertable.append(innertabletr1);
				innertabletr1.append(cartitemtd);
				innertabletr1.append(removebttntd);
					removebttntd.append(removebttn);
			innertable.append(innertabletr2);
				innertabletr2.append(coloremblemtd);
			innertable.append(innertabletr3);
				innertabletr3.append(namenumbersizetd);
	itemlinetr.append(pricetds);

	calculatebilling();

	countervisibility();

		}

function countervisibility() {

var tablelength = document.getElementById("cart-table").rows.length;

if ( tablelength == 0) { 
			changedisplay('cart-empty', 'block');
			changedisplay('cart-counter', 'none');
 }

}

countervisibility();

function calculatebilling() { 

					var tablelength = document.getElementById("cart-table").rows.length;

					var cartlength = tablelength/2;

					document.getElementById('cart-counter').style.display = 'block';
					document.getElementById('cart-counter').innerHTML = '' + cartlength + '';

					changedisplay('cart-empty', 'none');

					changedisplay('billing', 'block');

					// pricing

					var pricePerJersey = 19.99;

					var totalvalue = pricePerJersey*cartlength;

					var roundedvalue = parseFloat(totalvalue.toFixed(2));

					var totaltax = pricePerJersey*(6/100)*cartlength;

					var roundedtax = parseFloat(totaltax.toFixed(2));

					var delivery = 2.00;

					if (totalvalue <= 20.00) { 
											delivery = 2.00;
											document.getElementById('delivery-text-id').innerHTML = 'Delivery'; }

					else if ( totalvalue > 20.00) {
											delivery = 0.00;
											document.getElementById('delivery-text-id').innerHTML = 'Free Delivery'; }

					var roundeddelivery = parseFloat(delivery.toFixed(2));

					var ordertotal = roundedvalue + roundedtax + roundeddelivery;
					var roundedordertotal = ordertotal.toFixed(2);

					document.getElementById('total').innerHTML = '$' + roundedvalue + '';
					document.getElementById('tax-id').innerHTML = '$' + roundedtax + '';
					document.getElementById('delivery-id').innerHTML = '$' + roundeddelivery + '';
					document.getElementById('order-total').innerHTML = '$' + roundedordertotal + '';

					countervisibility();

}










