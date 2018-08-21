//jQuery way:
// $(document).on("ready", function(){
//   document.querySelector("[name='firstname'").addEventListener('keypress',groomCallBack)
// // document.querySelector("[name='firstname-bride'").addEventListener('keypress',brideCallBack)
// })
document.addEventListener('DOMContentLoaded', function() {
document.querySelector("[name='firstname'").addEventListener('input',groomCallBack)
document.querySelector("[name='firstname-bride'").addEventListener('input',brideCallBack)
document.querySelector("[name='lastname'").addEventListener('input',lastnameCallBack)
document.querySelector("[name='expected-date'").addEventListener('input',dateCallBack)
document.querySelector("[name='ideal-location'").addEventListener('input',locationCallBack)
document.getElementById("spring-layout").addEventListener("click", springLayoutCallback)
document.getElementById('summer-layout').addEventListener('click', summerLayoutCallback)
document.getElementById('winter-layout').addEventListener('click', winterLayoutCallback)
document.getElementById('autumn-layout').addEventListener('click', autumnLayoutCallback)
// document.getElementById('winter-layout').
}) 
function groomCallBack() {
  let inputValue= document.querySelector("[name='firstname']").value
  if (inputValue === "") {
    document.getElementById("firstname-preview-groom").innerHTML = "What's your name?"
  } else {
    document.getElementById("firstname-preview-groom").innerHTML = inputValue
  }
  
}
 

function brideCallBack() {
  let inputValue= document.querySelector("[name='firstname-bride'").value
  document.getElementById("firstname-preview-bride").innerHTML =inputValue
  if (inputValue === "") {
    document.getElementById("firstname-preview-bride").innerHTML = "What's their name?"
  } else {
    document.getElementById("firstname-preview-bride").innerHTML = inputValue
  }
  
  
}

function lastnameCallBack() {
  let inputValue= document.querySelector("[name='lastname'").value
  document.getElementById("lastname-preview").innerHTML =inputValue
  if (inputValue === "") {
    document.getElementById("lastname-preview").innerHTML = "Future name!"
  } else {
    document.getElementById("lastname-preview").innerHTML = inputValue
  }
  
}

function dateCallBack() {
  let inputValue= document.querySelector("[name='expected-date'").value
  document.getElementById("expected-date").innerHTML =inputValue
  if (inputValue === "") {
    document.getElementById("expected-date").innerHTML = "When are you getting hitched?"
  } else {
    document.getElementById("expected-date").innerHTML = inputValue
  }
  
} 

function locationCallBack() {
  let inputValue= document.querySelector("[name='ideal-location'").value
  document.getElementById("ideal-location").innerHTML =inputValue
  if (inputValue === "") {
    document.getElementById("ideal-location").innerHTML = "Where you getting hitched?"
  } else {
    document.getElementById("ideal-location").innerHTML = inputValue
  }

}

function springLayoutCallback() {
  document.getElementsByClassName("preview")[0].id = "spring"
}

function summerLayoutCallback() {
  document.getElementsByClassName("preview")[0].id = "summer"
}

function winterLayoutCallback() {
  document.getElementsByClassName("preview")[0].id = "winter" 
}

function autumnLayoutCallback() {
  document.getElementsByClassName("preview")[0].id = "autumn" 
}