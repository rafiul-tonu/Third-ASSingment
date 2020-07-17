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