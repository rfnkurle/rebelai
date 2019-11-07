function assignKey(obj, key) {


    if(typeof obj[key] === 'undefined'){ 
    obj[key] = 1
  
    } else { 
  
    obj[key]++;}
  
  };
  
  var map = {};
  
  assignKey(map, 3);
  assignKey(map, 2);
  assignKey(map, 4);
  assignKey(map, 1);
  assignKey(map, 2);
  assignKey(map, 5);
  assignKey(map, 1);
  console.log(map);

  //returns
  // {1: 2, 2: 2, 3: 1, 4: 1, 5: 1}

  //
