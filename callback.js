let second = function () {
  console.log('익명');
}

function first(text, callback){
  if(typeof(text) === "string"){
  console.log(text + '정신차려');
  callback();
  return '모르겠다.'
}else{
  console.log('콘솔 확인해');
}
}
first('울지마 바보야', function(){
  console.log("두번째지룡");
});
