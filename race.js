var Mascot = function(name, fooditem, endurance, trip) {
   this.name = name;
   this.food = fooditem;
   this.endurance = endurance;
   this.trip = trip;
   this.run = function() {
   var distance = 0;
       if(this.trip){
           var tripper =  Math.floor(Math.random() * 10); 
           if (tripper < 3) {
               this.trip = true;
               console.log("OH NO!!!");
           } else {
               this.trip = false;
           }
       } 
       if(this.trip){
       	console.log("OH NO!!!");
       	return distance;
       }
       	else {
           distance = distance+ Math.floor(Math.random() * this.endurance + 1);
           return distance;
       }
   }
};

var blueWave = new Mascot("Bluewave", "Shrimp", 5, false);
var marauder = new Mascot("Marauder", "Milk", 7, false);
var wildCat = new Mascot("Wildcat", "Burger", 9, true);

   console.log(wildCat.run());
   console.log(blueWave.run());
   console.log(marauder.run());

var race=function(totDistance){
	var wDR=totDistance;
	var bDR=totDistance;
	var mDR=totDistance;
	while(wDR>0&&bDR>0&&mDR>0){
		wDR=wDR-wildCat.run();
		console.log(wildCat.name+" the "+wildCat.food+" has "+ wDR+ " meters left.");
		bDR=bDR-blueWave.run();
		console.log(blueWave.name+" the "+blueWave.food+" has "+ bDR+ " meters left.");
		mDR=mDR-marauder.run();
		console.log(marauder.name+" the "+marauder.food+" has "+ mDR+ " meters left.");
		//Checks who is the winner by checking if one person's score is lower than rest.
		}
		if(wDR<bDR && wDR<mDR){
			console.log(wildCat.name+ " has won!");
			return "wildCat";
		}else if(mDR<bDR && mDR<wDR){
			console.log(marauder.name+ " has won!");
			return "marauder";
		}else if(bDR<mDR && bDR<wDR){
			console.log(blueWave.name+" has won!");
			return "blueWave";
		//checks if there's a tie by checking if scores are even for anyone!.
		}else if(mDR<=0&&bDR<=0||mDR<=0&&wDR<=0||bDR<=0&&wDR<=0){
			console.log("There is a tie!");
			return "tie";
		}else{
			console.log("error with statements!");
		}
};

race(30);