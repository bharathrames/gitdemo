var div=document.createElement("div")
div.setAttribute("id","container")

var div1=document.createElement("div")
div1.setAttribute("id","calculator")

var input=document.createElement("input")
input.setAttribute("type","text")
input.setAttribute("placeholder","0")
input.setAttribute("id","output")

function buttons(tagname,event,eventname,content){
var button=document.createElement(tagname)
button.setAttribute(event,eventname)
button.innerHTML=content
return button
}

var button1=buttons("button","onclick","display('7')","7")
var button2=buttons("button","onclick","display('8')","8")
var button3=buttons("button","onclick","display('9')","9")
var button4=buttons("button","onclick","display('+')","+")
var button5=buttons("button","onclick","display('4')","4")
var button6=buttons("button","onclick","display('5')","5")
var button7=buttons("button","onclick","display('6')","6")
var button8=buttons("button","onclick","display('-')","-")
var button9=buttons("button","onclick","display('1')","1")
var button10=buttons("button","onclick","display('2')","2")
var button11=buttons("button","onclick","display('3')","3")
var button12=buttons("button","onclick","display('*')","*")
var button13=buttons("button","onclick","Clear()","C")
var button14=buttons("button","onclick","display('0')","0")
var button15=buttons("button","onclick","calculate('=')","=")
var button16=buttons("button","onclick","display('/')","/")

document.body.append(div)
div.appendChild(div1)
div1.append(input,button1,button2,button3,button4,button5,button6,button7,button8
    ,button9,button10,button11,button12,button13,button14,button15,button16)
  


let outputscreen=document.getElementById("output")

function display(num){
    outputscreen.value += num;
}

function calculate(){
  try {
    outputscreen.value= eval(outputscreen.value)
  } catch (error) {
    alert("Invalid Number")
  }
}
function Clear(){
outputscreen.value ="";
}


