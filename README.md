# Race
Allows a mascot Race for team #Ninja
##First create a Mascot Object Constructor
1: define a function Mascot which takes parameters name, fooditem, and endurance).
2: Set each parameter to the this of this parameter (such as this.name=name).
3: define a function(or method) for this object constructer called run().
 + It will return distance which is = to a Random number between 1-Mascot's endurance.
 To calculate a random Number use Math.floor(Math.random()*endurance) and this will give you the random number of meters ran which you store into the variable called distance (this function will return).
 +Create the trip object which will cause a mascot to trip when true (3/10 times ) based on a random number *10 if this random number is 3 or less then the mascot will trip because it went too fast. Trip will cause a console.log of "OH NO!!!"

##Create 3 instances of the Mascot object
Make the following variables new Mascot Object:
1) Blue Wave Shrimp with parameters set name is "Blue Wave" set food to "shrimp" and set endurance to: 5.
2) Marauder Milk with parameters set name to "Marauder" set food to "Milk" and set endurance to: 7.
3) Wildcat Burger with parameters set name to "Wildcat" set food to "Burger" and set endurance to: 9 trip: true.

## Create the Race function which takes in Racedistance and increments until race distance is 0 or less for at least one of the contestants.
1- Loop starting at the parameter RaceDistance and subtract each Mascots distance Left based on how much they moved in the run function.
2- call the run function on all 3 mascots and test who won in the loop
3- if loop distance is 0 or less that mascot won.
4-if 2 or more are tied at less than 0 then there is a tie.console log It's a tie.