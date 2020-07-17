// Assingment-1 feettoMile.
function feetToMile(feet){
  var mile = feet * 0.000189394;
  if (feet < 0){
    return false;
  }
  return mile;
}
var checkMile = feetToMile();
console.log("Mile =", checkMile);

// Assingment-2 woodCalculator.
function woodCalculator(chair, table, bed){
  var result = chair * 1 + table * 3 + bed * 5;
  if (chair < 0){
    return false;
  } 
  if (table < 0){
    return false;
  }
  if (bed < 0){
    return false;
  }
  return result;
}
var totalWood = woodCalculator();
console.log("Total wood =", totalWood);

// Assingment-3 brickCalculator..(incomplete)

function brickcalculator(n){
  var floor10 = n*15*1000;
  var floor20 = n*12*1000;
  var floorUp20= n*10*1000;
  if(n <=10 ){
   var totalBricks = floor10;
    return floor10;
  }
  if (n>20){
    return floorUp20;
  }
}
var check = brickcalculator();
console.log(check);

// Assingment-4 tinyFriend
function tinyFriend(name){
  var totalLength = Infinity;
  var smallest;
  for(var i = 0; i < name.length; i++){
    if (name[i].length < totalLength){
      totalLength = name[i].length;
      smallest = name[i];
    }
  }
  return smallest;
}