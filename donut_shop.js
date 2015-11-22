var DonutShop = function(minCustPerHour, maxCustPerHour, avgDonutsPerCust, name) {
        this.minCustPerHour = minCustPerHour;
        this.maxCustPerHour = maxCustPerHour;
        this.avgDonutsPerCust = avgDonutsPerCust;
        this.name = name;
        this.hourlyDonutArray = [];
        this.totalDonuts = 0;

		this.randomCustPerHour = function(){
		 return Math.floor(Math.random() * (maxCustPerHour - minCustPerHour + 1)) + minCustPerHour;
		};

        this.getDonutsPerHour = function(){
        	for (var i = 0; i < 11; i++){
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
   };
   
    var capitolHill = new DonutShop(4, 37, 2, "Capitol Hill"); 
    var downtown = new DonutShop(8, 43, 4.5, "Downtown");
    var southLakeUnion = new DonutShop(9, 23, 6.33, "South Lake Union");
    var wedgwood = new DonutShop(2, 28, 1.25, "Wedgwood");
    var ballard = new DonutShop(8, 58, 3.75, "Ballard"); 