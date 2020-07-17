/*function tinyFriend(name){
  var smallest = Infinity;
  for(var i = 0; i<name.length; i++){
    var currentName = name[i].length;
    if (currentName < smallest){
      smallest = currentName;
    }
  }
  return smallest;
}
var friend = tinyFriend(["kkk", "bb", "t","llll"]);
console.log(friend);*/



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

var check = tinyFriend(['kooooo', 'jafor', 'bvvvvvvvb',  'jkkkkk','lve',]);
console.log(check);