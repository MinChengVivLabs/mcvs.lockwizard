var console = require("console")

module.exports.function = function addOne (aaa) {
  if (aaa.length) {
    console.log("length", aaa.length)
    for (var i=0; i<aaa.length; i++) 
      aaa[i].number += i+1      // to add 1, 2, 3... 
    return aaa;
  }
  else {
    aaa.number ++
    return aaa;
  }
}
