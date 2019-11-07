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
    

//     for (var i = 0; i < key.length; i++) {
//     var char = arr[i];

    if (key in keyMap) {
      keyMap[key]++;
    } else {
      keyMap[key] = 0;
    }
    
  }
return keyMap;
  }
