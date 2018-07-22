function conditionalSum(values, condition){
  var result= [];
  var numsReturned = [];
  if(condition == 'odd' && values.length > 0){
    for(var i = 0; i <= values.length -1; i++){
      result.push(values[i] %2!== 0);
        if( result[i] === true){
          numsReturned.push(values[i]);
        }
    }
  } else if(condition == 'even' && values.length > 0){
    for(var o = 0; o <= values.length -1; o++){
      result.push(values[o] %2 === 0);
        if( result[o] === true){
          numsReturned.push(values[o]);
        }
    }
  } else if(values.length < 1) {
     numsReturned = 0 ;
  }
  return numsReturned;
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));