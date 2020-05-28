function onLoadF(){
var registerOptions = document.getElementsByClassName("type-box");
console.log(registerOptions);
let position = 0;
var tdList = document.querySelectorAll("tr");
var tdList2 = document.querySelectorAll("td");
console.log(tdList2);

var elementsToChange = [];

for(let i=0;i<registerOptions.length; i++)
{
	let startElement = i+1;
	registerOptions[i].addEventListener("mouseover", function(event){
		registerOptions[i].classList.add("type-box-active");
		for(let ind=0;ind<4;ind++)
			{
				elementsToChange[ind] = tdList[ind+1].getElementsByTagName("td")[startElement];
				console.log(elementsToChange[ind]);
				elementsToChange[ind].classList.add("active-option");


	}});

	registerOptions[i].addEventListener("click", function(event){
		Array.prototype.forEach.call(registerOptions, el => {el.classList.remove("selected-option")});
		Array.prototype.forEach.call(tdList2,tdel => {tdel.classList.remove("selected")});
		registerOptions[i].classList.add("selected-option");
		for(let ind=0;ind<4;ind++)
			{
				elementsToChange[ind] = tdList[ind+1].getElementsByTagName("td")[startElement];
				console.log(elementsToChange[ind]);
				elementsToChange[ind].classList.add("selected");
			}

	});
	registerOptions[i].addEventListener("mouseout", function(event){
		registerOptions[i].classList.remove("type-box-active");
		for(let ind=0;ind<4;ind++)
			{
				elementsToChange[ind] = tdList[ind+1].getElementsByTagName("td")[startElement];
				console.log(elementsToChange[ind]);
				elementsToChange[ind].classList.remove("active-option");


	}});
	/*registerOptions[i].addEventListener("mouseout", function(event){
		registerOptions[i].classList.remove("type-box-active");
		for(let ind=0;ind<4;ind++)
			{
				elementsToChange[ind] = tdList[ind+1].getElementsByTagName("td")[startElement];
				console.log(elementsToChange[ind]);
				elementsToChange[ind].classList.remove("active-option");


	}});*/
}

}


function setActivePlanOption(plan_option_id)
{
let plans = document.getElementsByClassName("switch-button");
Array.prototype.forEach.call(plans, element => {element.classList.remove("active")});
document.getElementById(plan_option_id).classList.add("active");
}

function setActivePaymentOption(payment_option_id)
{
	let paymentOptions = document.getElementsByClassName("payment-option");
	Array.prototype.forEach.call(paymentOptions, element => {element.classList.remove("active-payment-option")});
	document.getElementById(payment_option_id).classList.add("active-payment-option");
}
