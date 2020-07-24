module.exports.function = function createNumber (aaa) {
  if (aaa.length) {
    var rslt = []
    for (var i=0; i<aaa.length; i++) {
      rslt.push({"number": aaa[i]})
    }
    return rslt;
  }
  return {
    number: aaa 
  }
}
