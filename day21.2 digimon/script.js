var container=document.createElement("div")
container.className="container"

var col=document.createElement("div")
col.className="col-sm-12"

var heading=document.createElement("h1")
heading.innerHTML="Digimon Information🐱‍🚀"
document.body.append(heading)

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "text");
input.setAttribute("placeholder","Type your favourite digimon character")
input.setAttribute("title","Enter a digimon character Eg: koromon,Garurumon")

var button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Search";
button.addEventListener("click", foo);

let active = document.createElement("div");
active.setAttribute("id", "active");

container.append(col)
col.append(heading,input,button,active)
document.body.append(container)


async function foo(){
try {
    var res=document.getElementById("text").value
    console.log(res)
    let url=`https://digimon-api.vercel.app/api/digimon/name/${res}`
    let res1 = await fetch(url);
    let res2 = await res1.json();
    active.innerHTML=`"DIGIMON DETAILS"<br><br>Name : ${res2[0].name}<br><br>
    <img src="${res2[0].img}" class="rounded" alt="No Image" ><br><br>
     Level : ${res2[0].level}
    `
} catch (error) {
    console.log(error)
}
}

