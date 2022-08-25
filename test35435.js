// let arr = ["이게", "무슨", "일이야", "이렇게", "좋은", "날에"];
// let fake = [];

// function blue(arr){
//   for(let i = 0; i < arr.length; I++){
//     if(Array.isArray(arr)){
//     console.log(arr[i]);
//     }
//   }
// }

// // ? 배열 메서드 자바스크립트, 익명함수 방식
// arr.forEach(function(a, b){
//   console.log(a + "같은 인덱스:" + b);
// })
// // ? 화살표 함수 축약 방식
// arr.forEach((a)=>console.log(a));

const items = ['돼지고기', '소고기', '닭고기','생선','양고기'];
const faker = [];

for(let i = 0; i<items.length; i++){
  faker.push(items[i]);
}
// console.log(faker);

items.forEach(function(item){
  faker.push(item);
});
console.log(faker);
console.log(faker.pop());

// function func(callback){
//   callback();
// }
// function callback(){
//   console.log("callback이다");
// }
// func(callback);

// function introduce (lastName, firstName, callback){
//   var fullName = lastName + firstName;
//   callback(fullName);
// }
// introduce("변", "기수", function(name){
//   console.log(name);
// });