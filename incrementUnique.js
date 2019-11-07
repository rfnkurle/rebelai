var pizza ={
    pizza1: "pepper",
    pizza3: "kale",
    pizza4: "mushroom",
    pizza2: {
        pizza1: "cheese"
    },
    pizza1:"whatever"
    
}


uniqueCount = Object.keys(pizza) //creates array of keys
    var  count = {};
//iterate over each array element and increments number of specific key

    uniqueCount.forEach(function(i) { count[i] = (count[i]||0) +1;}); 
    console.log(count);

    //returns