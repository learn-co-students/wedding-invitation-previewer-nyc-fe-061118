
// How to add an event listener
// 1. identify the element you want to listen to
// 2. select that element
// 3. call .addEventListener on that element
// 4. decide what event you want to listen to
// 5. add your callback function



function listenfirstName() {
  debugger;
  document.getElementById("first-name-input").addEventListener("keyup", firstNameCallback)
}
function firstNameCallback() {
  debugger;
  let name = document.getElementById("first-name-input").value
  document.getElementById("first-name").innerHTML = name
}

function listenSecondName() {
  document.getElementById("second-name-input").addEventListener("keyup", secondNameCallBack)
}
function secondNameCallBack() {
  let second = document.getElementById("second-name-input").value
  document.getElementById("second-name").innerHTML = second
}

 function listenLastName() {
  document.getElementById("last-name-input").addEventListener("keyup", lastNameCallBack)
}
function lastNameCallBack() {
  let lastName = document.getElementById("last-name-input").value
  document.getElementById("last-name").innerHTML = lastName
}

 function listenDates() {
  document.getElementById("dates-input").addEventListener("keyup", datesCallBack)
}


 function datesCallBack() {
 let dates = document.getElementById("dates-input").value
  document.getElementById("dates").innerHTML = dates }



function listenLocation() {
  document.getElementById("wedding-location-input").addEventListener("keyup", locationCallBack)}
  
 function locationCallBack() {
  let weddingLocation = document.getElementById("wedding-location-input").value
  document.getElementById("wedding-location").innerHTML = weddingLocation
}




function formalTheme() {
  debugger;
  document.getElementById("Formal").addEventListener("click", formalCallback)
}
function formalCallback() {
  debugger;
  document.getElementById("preview").style.background = "green";
}

function springTheme() {
  debugger;
  document.getElementById("Spring").addEventListener("click", springCallback)
}
function springCallback() {
  debugger;
  document.getElementById("preview").style.background = "blue";
}

function artDecoTheme() {
  document.getElementById("ArtDeco").addEventListener("click", artDecoCallBack)
}
function artDecoCallBack() {
  document.getElementById("preview").style.background = "yellow";
}



document.addEventListener('DOMContentLoaded', function() {
   listenfirstName()
  listenSecondName()
  listenLastName()
  listenDates()
  listenLocation()
  springTheme()
  artDecoTheme()
  formalTheme()
})




