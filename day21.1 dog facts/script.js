var container=document.createElement("div")
container.className="container"

var col=document.createElement("div")
col.className="col-sm-12"

var heading=document.createElement("h1")
heading.innerHTML="Random Dog Facts 🐶"
document.body.append(heading)

var input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("id", "number");
input.setAttribute("placeholder","Search any Number for random dog facts...")

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
    var res=document.getElementById("number").value
    console.log(res)
    let url=`https://dogapi.dog/api/facts/?number=${res}`
    let res1 = await fetch(url);
    let res2 = await res1.json();
    active.innerHTML=`"👇 HERE IS YOUR RANDOM DOG FACTS 👇"<br>${res2.facts}`
} catch (error) {
    console.log(error)
}



}