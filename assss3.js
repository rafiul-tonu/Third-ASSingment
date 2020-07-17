function brickcalculator(n){
  var floor10 = n*15*1000;
  var floor20 = 12*1000;
  var floorUp20= n*10*1000;
  var totalBrick = 0;
  if(n <=10 ){
  totalBricks = floor10;
    return floor10;
  }
  else if(n<=20){
    totalbricks = floor10 + (n-20)* floor20;
  }
  else {
    totalBricks =floor10 + 
  }
}
var check = brickcalculator(13);
console.log(check);