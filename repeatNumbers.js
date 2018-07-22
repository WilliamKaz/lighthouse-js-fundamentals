var repeatNumbers = function(data){
  var newData = 0;
  var storage = [];
  for (var i = 0; i < data.length ; i++) {
    newData = data[i][0].toString().repeat(data[i][1]);
    storage.push(newData);
  }
  return storage.toString();
};


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));