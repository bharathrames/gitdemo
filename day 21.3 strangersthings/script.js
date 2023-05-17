var container=document.createElement("div")
container.className="container"

var col=document.createElement("div")
col.className="col-sm-12"

var heading=document.createElement("h1")
heading.innerHTML="Strangerthings Quote"
document.body.append(heading)

var input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("id", "number");
input.setAttribute("placeholder","Type a number and get the Stangerthings Quote ")

var button = document.createElement("button");
button.setAttribute("type", "button");
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
    let url=`https://strangerthings-quotes.vercel.app/api/quotes/${res}`
    let res1 = await fetch(url);
    let res2 = await res1.json();
    active.innerHTML=`"Strangerthings Quote and Author name"<br><br>Quote : ${res2[0].quote}<br>
    
     Author : ${res2[0].author}
    `
} catch (error) {
    console.log(error)
}
}



// async function foo(){
//     let res=await fetch("https://strangerthings-quotes.vercel.app/api/quotes/10")
//     console.log(res)
//     let res1=await res.json()
//     console.log(res1)
// }
// foo()