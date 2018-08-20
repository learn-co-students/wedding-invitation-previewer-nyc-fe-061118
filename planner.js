  function myFunction() {
    var fName = document.getElementById("firstName").value;
    var sName = document.getElementById("secondName").value;
    var lName = document.getElementById("lastName").value;
    var when = document.getElementById("date").value;
    var place = document.getElementById("location").value;
    if (fName.length == 1){
    fInitial = fName;
    }
    if (sName.length == 1){
    sInitial = sName;
    }
    document.getElementById("initials").innerHTML = fInitial + " & " +sInitial;
    document.getElementById("firstSecondname").innerHTML = fName + " & " + sName;
    document.getElementById("lasName").innerHTML = lName;
  	document.getElementById("dateOf").innerHTML = when;
    document.getElementById("placeOf").innerHTML = place;
}

function Summeresque(){
document.getElementById("plannerDefaultcontainer").id = "plannerContainersummer";
document.getElementById("initialBox").id = "initialBoxsummer";
document.getElementById("firstNamebox").id = "firstNameboxSummer";
document.getElementById("lastNamebox").id = "lastNameboxSummer";
document.getElementById("dateBox").id = "dateBoxsummer";
document.getElementById("locationBox").id = "locationBoxsummer";
}

function Flowers(){
document.getElementById("plannerDefaultcontainer").id = "plannerContainerfloral";
document.getElementById("initialBox").id = "initialBoxfloral";
document.getElementById("firstNamebox").id = "firstNameboxFloral";
document.getElementById("lastNamebox").id = "lastNameboxFloral";
document.getElementById("dateBox").id = "dateBoxfloral";
document.getElementById("locationBox").id = "locationBoxfloral";
}

function Heartu(){
document.getElementById("plannerDefaultcontainer").id = "plannerContainerheartu";
document.getElementById("initialBox").id = "initalBoxheartu";
document.getElementById("firstNamebox").id = "firstNameboxHeartu";
document.getElementById("lastNamebox").id = "lastNameboxHeartu";
document.getElementById("dateBox").id = "dateBoxheartu";
document.getElementById("locationBox").id = "locationBoxheartu";
}

function Customimmg(){

}
