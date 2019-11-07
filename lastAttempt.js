var obj = {
    "pizza1": 1,
    "pizza2": {
        "pizza1": 1
    },
    "pizza3": {
        "pizza1": {
            "pizza2": 1,
            "pizza3": 1
        }
    }
}

function countKeys(obj, a, b){
    objSum = {}
   

    for(a in obj){ //supposed iterate through objects and count keys
      if (a in objSum){
        objSum[a]+= 1
      }else{
        objSum[a] = 1
      }

      if( b in obj){
        
        var objRec = countKeys(b) //countKeys call on neted objects

        for (b in objRec ){
          if(b in objSum){
            dsum[b] += 1
          }else{
            objSum[b] =1
          }
        }
      }
    }
     return dsum;
    }

   
    countKeys(obj)

function incrementInts(obj, a, b){
  for (a in obj && b in obj){
    if(b){
      obj[a]+=1
    }else if (b){
      dres = incrementInts(b)

      
    }
  }
  return obj;
}

incrementInts(obj)

//returns obj literally

//{pizza1: 1, pizza2: {…}, pizza3: {…}}