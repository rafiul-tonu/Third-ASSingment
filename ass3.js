function bricks(n){
  var floor10 = n*15*1000;
  var floor20 = n*12*1000;
  var floorUp20= n*10*1000;
  var totalbricks = 0;
  if(n <=10 ){
    totalbricks = floor10;
    return floor10;
  }
  if (11<= n <=20){

    return floor20;
  }
  if (n>20){
    return floorUp20;
  }
}
var check = bricks(3);
console.log(check);
