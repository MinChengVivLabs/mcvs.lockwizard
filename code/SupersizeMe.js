module.exports.function = function supersizeMe (structC) {
  var newsize = 0
  if (structC.supersize == 0) 
    newsize = 33
  else if (structC.supersize == 33) 
    newsize = 66
  else
    newsize = 99
  return {
    order: structC.order,
    supersize: newsize,
  }
}
