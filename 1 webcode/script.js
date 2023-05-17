var container=document.createElement("div")
container.setAttribute("class","container")

var heading=document.createElement("h1")
heading.innerHTML="Brewery Details🍺"

var div = document.createElement("div");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "idnum");
input.setAttribute("placeholder","Enter the Specific id")
input.setAttribute("title","Enter the specific id with alphabet and numbers For Eg: ea4f30c0-bce6-416b-8904-fab4055a7362")


var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Search";
button.addEventListener("click", foo);

let information = document.createElement("div");
information.setAttribute("id", "inform");


document.body.appendChild(heading)
div.append(container)
container.append(input, button, information);
document.body.append(container);

async function foo(){
try {
    let result = document.getElementById("idnum").value
    console.log(result)
    let url = `https://api.openbrewerydb.org/v1/breweries/${result}`
    let res1 = await fetch(url);
    let res2 = await res1.json();
    inform.innerHTML=`Breweries Name: ${res2.name}<br>Breweries Type: ${res2.brewery_type}<br>
    Breweries Address: ${res2.address_1} <br>Breweries Website URl: ${res2.website_url}<br>Breweries Phone No: ${res2.phone}`
    // if (res2.value===undefined || res2.value===""){
    //     alert("Enter the Correct ID")
    // }
} catch (error) {
    console.log(error)
    
}

}

