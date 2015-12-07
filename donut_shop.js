
	var DonutShop = function(minCustPerHour, maxCustPerHour, avgDonutsPerCust, franchise){
	this.minCustPerHour = minCustPerHour;
	this.maxCustPerHour = maxCustPerHour;
	this.avgDonutsPerCust = avgDonutsPerCust;
	this.franchise = franchise;
	this.hourlyDonutArray = [];

	var  hourlyDonutsArray= ["Location", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "Total"];
	
	this.totalDonuts = 0;

	this.randomCustPerHour = function(){
	 return Math.floor(Math.random() * (maxCustPerHour - minCustPerHour + 1)) + minCustPerHour;
	};

	this.getDonutsPerHour = function(){
		for (var i = 0; i < 12; i++){
	    this.hourlyDonutArray.push(Math.floor(avgDonutsPerCust * this.randomCustPerHour()));}
		return this.hourlyDonutArray;
	};

	this.getDonutsPerDay = function() {
	  for (var i = 0; i< this.hourlyDonutArray.length; i++){
	  	this.totalDonuts += this.hourlyDonutArray[i];
	  }; 
	  return this.totalDonuts;
	};

	this.report = function(){
	    console.log(name + " Requires " + this.getDonutsPerHour() + " Donuts Per Hour, and " + this.getDonutsPerDay() + " Donuts Per Day " );
	  };

	this.report(); 
//create table
	this.renderTable = function(){
		var tr = document.createElement("tr");
		 
		tr.innerHTML = this.franchise;
	
		for (var i=0; i<this.hourlyDonutArray.length; i++){
		var td = document.createElement("td");
		td.innerHTML = this.hourlyDonutArray[i];
		tr.appendChild(td)
	}
		var td = document.createElement("td");
		td.innerHTML = this.totalDonuts;
		tr.appendChild(td);
		
		document.getElementById("tableBody").appendChild(tr);
			
		
	}
	this.renderTable();
	};

	var capitolHill = new DonutShop(4, 37, 2, "Capitol Hill"); 
	var downtown = new DonutShop(8, 43, 4.5, "Downtown");
	var southLakeUnion = new DonutShop(9, 23, 6.33, "South Lake Union");
	var wedgwood = new DonutShop(2, 28, 1.25, "Wedgwood");
	var ballard = new DonutShop(8, 58, 3.75, "Ballard"); 


//add new location and button tag
var newLocation = function(){
var location = document.getElementById("location").value;
var minCustPerHour = Number(document.getElementById("minCustPerHour").value);
var maxCustPerHour = Number(document.getElementById("maxCustPerHour").value);
var avgDonutsPerCust = Number(document.getElementById("avgDonutsPerCust").value);
console.log("minCustomer",minCustPerHour);
console.log("addDonuts", avgDonutsPerCust);
var shop = new DonutShop(avgDonutsPerCust, maxCustPerHour, minCustPerHour, location);
console.log("newShop", shop(12,24,5,"bothell" ));
document.getElementById("submit").addEventListener("click", newLocation);
}; 


//using the same HTML elements update an existing location.
//Use an Array to hold your DonutShop objects.
var myShops = [


];

var userInput = document.getElementById('userInput');


//implement event based easter egg
var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function() {
  jQuery('#egggif').fadeIn(500, function() {
    window.setTimeout(function() { jQuery('#egggif').hide(); }, 5000);
  });
}).listen();



