//this increments the number of letters in the value
//thought I could use something like this to increment keys

var pizza ={
    pizza1: "pepper",
    pizza3: "kale",
    pizza4: "kale",
    pizza2: {
        pizza1: "cheese"
    }
}


var keysCount = function(obj) {
  var keyMap = {};

  for (var key in obj) {
    var arr2 = obj[key];

  for (var i = 0; i < arr2.length; i++) {
    var char = arr2[i];

    if (char in keyMap) {
      keyMap[char]++;
    } else {
      keyMap[char] = 1;
    }
  }

}

  return keyMap;
};

keysCount(pizza)


//returns
//  {p: 3, e: 4, r: 1, k: 2, a: 2, …} (letters incremented by use)