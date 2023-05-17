//ANS 1, ANONYMOUS FUNCTION

//a, print odd numbers
// var res=[]
// let oddnumber= function(num){
//      for (let i = 1; i <= num; i++) {
//       if (i % 2 !== 0) {
//          res.push(i)
//       }
//     }
// console.log(res)
// }
// oddnumber(20);


//b, Convert all the strings to title caps in a string array
// const stringArray = ["this", "is", "a", "string", "array"];
// const titleCapsArray = function(arr) {
//   return arr.map(function(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
//   });
// };
// console.log(titleCapsArray(stringArray));


//c, Sum of all numbers in an array
// const numberArray = [1, 2, 3, 4, 5];
// const sumArray = function(arr) {
//   return arr.reduce(function(sum, num) {
//     return sum + num;
//   }, 0);
// };
// console.log(sumArray(numberArray));


//d, Return all the prime numbers in an array
// const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
// const getPrimesArray = function(arr) {
//   return arr.filter(function(num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return num !== 1 && num !== 0;
//   });
// };
// console.log(getPrimesArray(numberArray)); 


//e, Return all the palindromes in an array
// const stringArray = ["racecar", "level", "hello", "madam", "noon"];
// const getPalindromesArray = function(arr) {
//   return arr.filter(function(str) {
//     const reversedStr = str.split("").reverse().join("");
//     return str === reversedStr;
//   });
// };
// console.log(getPalindromesArray(stringArray)); 


//f, Return median of two sorted arrays of the same size.
// const findMedian = function(arr1, arr2) {
//   const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
//   const mid = Math.floor(mergedArr.length / 2);
//   return mergedArr.length % 2 !== 0 ? mergedArr[mid] : (mergedArr[mid - 1] + mergedArr[mid]) / 2;
// };
// console.log(findMedian([1, 3, 5], [2, 4, 6])); 


//g, Remove duplicates from an array
// const array = [1, 2, 3, 2, 1, 4, 5, 4];
// const uniqueArray = function(arr) {
//   return arr.filter(function(item, index) {
//     return arr.indexOf(item) === index;
//   });
// };
// console.log(uniqueArray(array)); 


//h, rotate a array k times
// var arr = [1, 2, 3, 4, 5];
// var k = 2;
// var rotatedArr = (function(arr, k) {
//   var n = arr.length;
//   var rotations = k % n;
//   var firstPart = arr.slice(rotations);
//   var secondPart = arr.slice(0, rotations);
//   return firstPart.concat(secondPart);
// })(arr, k);
// console.log(rotatedArr);


////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ANS 1 , IIFE FUNCTION
//a, Print odd numbers in an array
// var res=[]
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// (function() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         res.push(arr[i])
        
//     }
//   }
// console.log(res)
// })();


//b, Convert all the strings to title caps in a string array
// var strings = ['hello world', 'goodbye moon', 'welcome back'];
// (function(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].toLowerCase().split(' ');
//     for (var j = 0; j < arr[i].length; j++) {
//       arr[i][j] = arr[i][j].charAt(0).toUpperCase() + arr[i][j].slice(1);
//     }
//     arr[i] = arr[i].join(' ');
//   }
// })(strings);
// console.log(strings);


//c, Sum of all numbers in an array
// (function(){
//     let str=[50,45,78];
//    let sum=0;
//  for (let i = 0; i < str.length; i++) {
//    sum +=str[i];
//  }
// console.log(sum);
// })();


//d, Return all the prime numbers in an array
//(function (l,r)
// {
//     let arr = [];
//     for (i=l;i<=r;i++)
//     {
//         arr.push(i)
//     }
// arr = arr.filter((number) => {
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// })
//     console.log(arr);
// })(2,11)

//e, Return all the palindromes in an array
// let arr = ["level", "hello", "radar", "world", "deed"];
// let palindromes = (function(arr) {
//   return arr.filter(function(item) {
//     return item === item.split("").reverse().join("");
//   });
// })(arr);
// console.log(palindromes); 


//f, Return median of two sorted arrays of the same size.
// (function(){
//         function getMedian(ar1, ar2, n)
//            {
//              let j = 0;
//              let i = n - 1;
//              while (ar1[i] > ar2[j] && j < n && i > -1)
//              {
//                let temp = ar1[i];
//                ar1[i] = ar2[j];
//                ar2[j] = temp;
//                i--; j++;
//              }
//              ar1.sort(function(a, b){return a - b});
//              ar2.sort(function(a, b){return a - b});
//              return parseInt((ar1[n - 1] + ar2[0]) / 2, 10);
//            }
            
//            let ar1 = [ 1, 12, 15, 2, 38 ];
//            let ar2 = [ 2, 13, 17, 30, 45 ];
         
//            let n1 = 5;
//            let n2 = 5;
//            if (n1 == n2)
//              console.log(getMedian(ar1, ar2, n1));
           
//        })();


//g, Remove duplicates from an array
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArr = (function() {
//   return [...new Set(arr)];
// })();
// console.log(uniqueArr); 


//h, Rotate an array by k times
// (function(arr,k){
//     var i =0;
//     while(k>0){
//         var temp = arr[arr.length - 1];
//         for(var j = arr.length-1 ; j>0 ; j--){
//             arr[j] = arr[j-1];
//         }
//         arr[j]=temp;
//         k--;
//     }
//     console.log(arr);
// }([1,2,3,4,5,6],3));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //ANS 3, ARROW FUNCTION

// //a, print odd numbers
// var res=[]
// let oddnumber = (num) => {
//     for (let i = 1; i <= num; i++) {
//       if (i % 2 !== 0) {
//          res.push(i)
//       }
//     }
//     console.log(res)
//   };
//   oddnumber(20);


//   //b,change to title caps
//   const arr = ["hello world", "guvi geek", "arrow function"];
//   const title = arr.map(str => {
//     return str.toLowerCase().split(" ").map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
//   });
//   console.log(title); 
  

//c,sum of all number
// var numbers = [1, 2, 3, 4, 5,6];
// var sum = numbers.reduce((acc, curr) => acc + curr);
// console.log(sum); 


// //d, Return all the prime numbers in an array
// var  primenumbers = arr => {
//   var  isprime = num => {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };
//   return arr.filter(isprime);
// };
// let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(primenumbers(numbers)); 


// e, Return all the palindromes in an array
// const arr = ["racecar", "level", "hello", "deified", "world"];
// var palindromes = arr.filter(str => {
//   const reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// });
// console.log(palindromes);




