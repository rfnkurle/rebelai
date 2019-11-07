var pizza ={
    pizza1: "pepper",
    pizza3: "kale",
    pizza4: "mushroom",
    pizza2: {
        pizza1: "cheese"
    },
    pizza5:"whatever"
    
}



var keyCount = function(obj) {


var keyMap = 0;

  for (var key in obj) {
    


    if (key in keyMap) {
      keyMap[key]+= 1;
    } else {
      keyMap[key] = 0;
    }
    
  }
return keyMap;
  }

  //returns

  // {pizza1: 0, pizza3: 0, pizza4: 0, pizza2: 0, pizza5: 0}