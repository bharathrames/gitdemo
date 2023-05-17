// ANS:1
var obj1={name:"person 1",age:5};
var obj2={age:5,name:"person 1"};
console.log(_.isEqual(obj1,obj2))

// ANS:2
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
    var result=JSON.parse(request.response)
    console.log(result)
    for (i=0;i<result.length;i++){
        console.log(result[i].flag)
       } 
}

// ANS:3
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
    var result=JSON.parse(request.response)
    console.log(result)
    for (i=0;i<result.length;i++){
        console.log(result[i].name,result[i].region,result[i].subregion,result[i].population)
       } 
}
