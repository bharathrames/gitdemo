var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload=function(){
    var result=JSON.parse(request.response)
    console.log(result);
  

//ANS 1,
// var res=result.filter((ele)=>ele.region==="Asia")
//    console.log(res)


//ANS 2,
// var res=result.filter((ele)=>ele.population<200000);
// console.log(res);  

//ANS 3,
// for (var i=0;i<result.length;i++){
//     console.log(result[i].name,result[i].capital,result[i].flag)
// }

//ANS 4
//   var res=result.filter((ele)=>ele.population).reduce((a,b)=>a+b.population,0)
//     console.log(res)

// ANS 5.
// var res=result.filter((x)=>{
//   for(var i in x.currencies){
//     if (x.currencies[i].code==="USD")
//     return true;
//   }
// }).map((ele)=>ele.name)
// console.log(res)
}
 

