function miMap(arr, fn) {
    var nuevoArray = [];
    for (var i = 0; i < arr.length; i++) {
      nuevoArray.push(fn(arr[i]));
    }
    return nuevoArray;
  }

  var array1 = miMap([1,2,3,4,5], function(e) {
    return e * 2;
  }); // [2, 4, 6, 8, 10]
  
  
  var array2 = miMap([1,6,3,4,5], function(e) {
    return e + 1;
  }); // [2, 3, 4, 5, 6]

for(let a of array1){
    console.log(a);
}
for(let a of array2){
    console.log(a);
}