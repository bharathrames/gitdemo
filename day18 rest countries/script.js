var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-lg-4 col-sm-12">
        <div class="card border-white mb-4">
        <h1 class="card-header">${data1[i].name}</h1>
        <img src="${data1[i].flag}" class="card-img-top" alt="Country Flags">
        <div class="card-body text-primary">
          <p class="card-text"> Capital:${data1[i].capital}</p>
          <p class="card-text">Region:${data1[i].region}</p>
          <p class="card-text">Region:${data1[i].alpha3Code}</p>
           <p class="card-text">latlng:${data1[i].latlng}</p>
         <button class="btn btn-primary" onclick="getdata()"> Click For Weather</button>
         
        </div>
      </div>
      </div>
       `
    }
        }
        document.body.append(container);

        async function getdata(){
          var res=await fetch("https://restcountries.com/v2/all");
          var res1= await res.json();
      
          for(var i=0;i<res1.length;i++){
              try {
                  // console.log(`Latitude:${res1[i].latlng[0]} Longitude:${res1[i].latlng[1]}`);
                  weatherdata(res1[i].latlng[0],res1[i].latlng[1]);
              } 
         catch (error) {
          console.log(error);
        }
      }
      }
    
      async function weatherdata(lat,lon){
      try {
          if(lon===undefined) throw new Error("Invalid Coordinates");
          console.log(lat,lon);
          let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c64fbf9ea1292ffeca3f1ae772387208`);
          let res3=await res2.json();
          console.log(`${res3.main.temp}`);
      }
       catch (error) {
         console.log(error) 
      }
      getdata();
    
      }
    





// {/* <div>class="card-text">Temprature:${res3.main.temp}</div> */}