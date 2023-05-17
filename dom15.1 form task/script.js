var form=document.createElement("form")
form.setAttribute("id","myForm")

var heading=document.createElement("h1")
heading.setAttribute("id","title")
heading.innerHTML="Form Submission"

var brh=document.createElement("br")

var lable=document.createElement("label")
lable.setAttribute("for","firstName")
lable.innerHTML="First Name:"

var brf=document.createElement("br")

var first=document.createElement("input")
first.setAttribute("type","text")
first.setAttribute("id","firstName")
first.setAttribute("name","firstName")
first.setAttribute("placeholder","First Name")

var br=document.createElement("br")

var lable1=document.createElement("label")
lable1.setAttribute("for","lastName")
lable1.innerHTML="Last Name:"

var brl=document.createElement("br")

var last=document.createElement("input")
last.setAttribute("type","text")
last.setAttribute("id","lastName")
last.setAttribute("placeholder","Last Name")
last.setAttribute("name","lastName")

var br1=document.createElement("br")

var lablead1=document.createElement("label")
lablead1.setAttribute("for","adress1")
lablead1.innerHTML="Address Line 1:"

var brad1=document.createElement("br")

var address=document.createElement("input")
address.setAttribute("type","text")
address.setAttribute("id","adress1")
address.setAttribute("placeholder","Address Line 1")
address.setAttribute("name","adress1")

var bradb=document.createElement("br")

var lablead2=document.createElement("label")
lablead2.setAttribute("for","adress2")
lablead2.innerHTML="Address Line 2:"

var brad2=document.createElement("br")

var adress1=document.createElement("input")
adress1.setAttribute("type","text")
adress1.setAttribute("id","adress2")
adress1.setAttribute("placeholder","Address Line 2")
adress1.setAttribute("name","adress2")

var bradb1=document.createElement("br")

var labelp=document.createElement("label")
labelp.setAttribute("for","pin")
labelp.innerHTML="PIN:"

var brp=document.createElement("br")

var pin=document.createElement("input")
pin.setAttribute("type","number")
pin.setAttribute("id","pin")
pin.setAttribute("placeholder","PIN")
pin.setAttribute("name","pin")

var brpb=document.createElement("br")

var label2=document.createElement("label")
label2.innerHTML="Gender:"

var brg=document.createElement("br")

var male=document.createElement("input")
male.setAttribute("type","radio")
male.setAttribute("id","male")
male.setAttribute("name","gender")
male.setAttribute("value","male")

var lable3=document.createElement("label")
lable3.setAttribute("for","male")
lable3.innerHTML="Male"

var female=document.createElement("input")
female.setAttribute("type","radio")
female.setAttribute("id","female")
female.setAttribute("name","gender")
female.setAttribute("value","female")

var lable4=document.createElement("label")
lable4.setAttribute("for","female")
lable4.innerHTML="Female"

var br2=document.createElement("br")

var label5=document.createElement("label")
label5.innerHTML="Choice of Food:(Must choose atleast 2 out of 5 options)"

var br4=document.createElement("br")

var north=document.createElement("input")
north.setAttribute("type","checkbox")
north.setAttribute("id","northindian")
north.setAttribute("name","food")
north.setAttribute("value","northindian")

var lable6=document.createElement("label")
lable6.setAttribute("for","northindian")
lable6.innerHTML="NorthIndian"

var brn=document.createElement("br")

var south=document.createElement("input")
south.setAttribute("type","checkbox")
south.setAttribute("id","southindian")
south.setAttribute("name","food")
south.setAttribute("value","southindian")

var lable7=document.createElement("label")
lable7.setAttribute("for","southindian")
lable7.innerHTML="SouthIndian"

var brsi=document.createElement("br")

var chinese=document.createElement("input")
chinese.setAttribute("type","checkbox")
chinese.setAttribute("id","chinese")
chinese.setAttribute("name","food")
chinese.setAttribute("value","chinese")

var lablec=document.createElement("label")
lablec.setAttribute("for","chinese")
lablec.innerHTML="Chinese"

var brc=document.createElement("br")

var japanese=document.createElement("input")
japanese.setAttribute("type","checkbox")
japanese.setAttribute("id","japanese")
japanese.setAttribute("name","food")
japanese.setAttribute("value","japanese")

var lablej=document.createElement("label")
lablej.setAttribute("for","japanese")
lablej.innerHTML="Japanese"

var brs=document.createElement("br")

var seafood=document.createElement("input")
seafood.setAttribute("type","checkbox")
seafood.setAttribute("id","seafood")
seafood.setAttribute("name","food")
seafood.setAttribute("value","seafood")

var lables=document.createElement("label")
lables.setAttribute("for","seafood")
lables.innerHTML="Seafood"

var brse=document.createElement("br")

var statel=document.createElement("label")
statel.setAttribute("for","state")
statel.innerHTML="State:"

var brst=document.createElement("br")

var state=document.createElement("input")
state.setAttribute("type","text")
state.setAttribute("id","state")
state.setAttribute("name","state")
state.setAttribute("placeholder","State")

var brco=document.createElement("br")

var countryl=document.createElement("label")
countryl.setAttribute("for","country")
countryl.innerHTML="Country:"

var brst1=document.createElement("br")

var country=document.createElement("input")
country.setAttribute("type","text")
country.setAttribute("id","country")
country.setAttribute("name","country")
country.setAttribute("placeholder","Country")

var br3=document.createElement("br")

var brgap=document.createElement("br")

var button=document.createElement("button")
button.setAttribute("type","submit")
button.innerHTML="Submit"

document.body.append(heading)
form.append(brh,lable,brf,first,br,lable1,brl,last,br1,lablead1,brad1,address,bradb,lablead2,brad2,adress1,bradb1,labelp,brp,pin,
    brpb,label2,brg,male,lable3,female,lable4,br2,
    label5,br4,north,lable6,brn,south,lable7,brsi,chinese,lablec,brc,japanese,lablej,brs,seafood,lables,brse,
    statel,brst,state,brco,countryl,brst1,country,br3,brgap,button)
    document.body.append(form)

var table=document.createElement("table")
table.setAttribute("id","mytable")

var tr=document.createElement("tr")

var th1=document.createElement("th")
th1.setAttribute("id","table1")
th1.innerHTML="First Name|"

var th2=document.createElement("th")
th2.innerHTML="Last Name|"

var th3=document.createElement("th")
th3.innerHTML="Address 1|"

var th4=document.createElement("th")
th4.innerHTML="Address 2|"

var th5=document.createElement("th")
th5.innerHTML="PIN|"

var th6=document.createElement("th")
th6.innerHTML="Gender|"

var th7=document.createElement("th")
th7.innerHTML="Food|"

var th8=document.createElement("th")
th8.innerHTML="State|"

var th9=document.createElement("th")
th9.innerHTML="Country"



tr.append(th1,th2,th3,th4,th5,th6,th7,th8,th9)
table.append(tr)
document.body.append(table)



    const myForm = document.getElementById('myForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const address1Input = document.getElementById('adress1');
    const address2Input = document.getElementById('adress2');
    const pinInput = document.getElementById('pin');
    const genderInputs = document.getElementsByName('gender');
    const foodInputs = document.getElementsByName('food');
    const stateInput = document.getElementById('state');
    const countryInput = document.getElementById('country');
    const myTable = document.getElementById('mytable');

    myForm.addEventListener("submit",(event)=>{
        event.preventDefault()

        const newRow = myTable.insertRow(-1);
        const firstNameCell = newRow.insertCell(0);
        const lastNameCell = newRow.insertCell(1);
        const adress1Cell = newRow.insertCell(2);
        const adress2Cell = newRow.insertCell(3);
        const pinCell = newRow.insertCell(4);
        const genderCell = newRow.insertCell(5);
        const foodCell = newRow.insertCell(6);
        const stateCell = newRow.insertCell(7);
        const countryCell = newRow.insertCell(8);

        const numSelected = Array.from(foodInputs).filter(input => input.checked).length;
        if (numSelected < 2) {
          alert('Please select at least two food options.');
          return;
        }

        firstNameCell.innerText = firstNameInput.value;
        lastNameCell.innerText = lastNameInput.value;
        adress1Cell.innerText = address1Input.value;
        adress2Cell.innerText = address2Input.value;
        pinCell.innerText = pinInput.value;
        stateCell.innerText = stateInput.value;
        countryCell.innerText = countryInput.value;
        genderCell.innerText = Array.from(genderInputs).find(input => input.checked).value;
        foodCell.innerText = Array.from(foodInputs)
          .filter(input => input.checked)
          .map(input => input.value)
          .join(', ');

          firstNameInput.value = '';
          lastNameInput.value = '';
          address1Input.value = '';
          address2Input.value = '';
          stateInput.value = '';
          countryInput.value = '';
          genderInputs[0].checked = true;
          foodInputs.forEach(input => input.checked = false);
    })
