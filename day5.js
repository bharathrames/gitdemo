// ANONYMOUS FUNCTION
 
//1. Print odd numbers in an array
//  function odd(arr){
//     for (var i=0;i<arr.length;i++){
//         if (arr[i]%2 ==!0){
//         console.log(arr[i])
//         }
//     } 
//  }
 
//  console.log(odd([1,2,3,4,5,6,7,8,9]))
 
// 2.Convert all the strings to title caps in a string array
// const strings = ["hello world", "goodbye", "how are you"]

// const title = strings.map(function(str) {
//   return str.toLowerCase().split(" ").map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   }).join(" ")
// });

// console.log(title)

//3.Sum of all numbers in an array
// var  array = [1, 2, 3, 4, 5]
// var  sum = array.reduce(function (acc,cu) {
//   return acc + cu
// })
// console.log(sum)

//4.Return all the prime numbers in an array
// const numbers=[1,2,3,4,5,6,7,8,9,10];

// const primes=numbers.filter(function(num) {
//   for(let i = 2; i < num; i++) {
//     if(num % i === 0) {
//       return false;
//     }
//   }
//   return num !== 1
// })

// console.log(primes)