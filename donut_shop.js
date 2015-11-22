var DonutShop = function(numHoursOpen, minCustPerHour, maxCustPerHour, avgDonutsPerCust, name) {
        this.numHoursOpen = numHoursOpen;
        this.minCustPerHour = minCustPerHour;
        this.maxCustPerHour = maxCustPerHour;
        this.avgDonutsPerCust = avgDonutsPerCust;
        this.name = name;

		this.randomCustPerHour = Math.floor(Math.random() * (maxCustPerHour - minCustPerHour + 1)) + minCustPerHour;
        this.getDonutsPerHour = function(){
            return avgDonutsPerCust * this.randomCustPerHour;
        };
        this.getDonutsPerDay = function() {
          return this.getDonutsPerHour() * numHoursOpen; 
        };
          this.report = function(){
            console.log(name + " Requires " + this.getDonutsPerHour() + " Donuts Per Hour, and " + this.getDonutsPerDay() + " Donuts Per Day " );
          };
           this.report(); 
   };
   
    var capitolHill = new DonutShop(8, 4, 37, 2, "Capitol Hill"); 
    var downtown = new DonutShop(8, 8, 43, 4.5, "Downtown");
    var southLakeUnion = new DonutShop(8, 9, 23, 6.33, "South Lake Union");
    var wedgwood = new DonutShop(8, 2, 28, 1.25, "Wedgwood");
    var ballard = new DonutShop(8, 8, 58, 3.75, "Ballard"); 