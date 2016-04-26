document.write(3*5);

var suger_price = 4;
var suger_number = 5;

document.write(suger_number*suger_price);

function calc_sum_price(price, number) {
	return price*number;
}

document.write(calc_sum_price(4,6));

function print_sum_price(price, number){
	document.write(calc_sum_price(price, number));
}

print_sum_price(5,6);

document.write(typeof document);

store = {};
store.suger = 4;
store.price = 7;
document.write(store.suger*store.price);

var wall = new Object();
wall.store = store;
document.write(typeof wall);

var IO = new Object();
function print(argument) {
	document.write(argument);
}
IO.printIO = print;
IO.printIO("\nthis is printIO<br>");
IO.printIO(" " + typeof IO.printIO);

var person = function() {
	this.name = "Cheryl";
	this.weight = 50;
	this.height = 163;
	this.future = function dream(){
		return "this is future function";
	}
}

document.write("<br>" + typeof person);

var person1 = new person();
document.write("<br>typeof person1: " + typeof person1 + "<br>typeof person: " + typeof person);

var Chinese = function () {
	this.country = "China";
}

var person = function (name, height, weight) {
	this.name = name;
	this.height = height;
	this.weight = weight;
	this.future = function() {
		return "future";
	}
}

Chinese.prototype = new person();

var cherl = Chinese("Chenyu", 163, 50);
document.write("<br>" + cherl.country);