function myFunction() {
    var fName = document.getElementById("firstName").value;
    var sName = document.getElementById("secondName").value;
    var lName = document.getElementById("lastName").value;
    var when = document.getElementById("date").value;
    var place = document.getElementById("location").value;
    var fInitial = fname.charAt(0);
    var sInitial = sname.charAt(0);
    document.getElementById("Initials").innerHTML = fInitial = "&" + sInitial
    document.getElementById("firstSecondname").innerHTML = fName + " & " + sName;
    document.getElementById("lasName").innerHTML = lName;
  	document.getElementById("dateOf").innerHTML = when;
    document.getElementById("placeOf").innerHTML = place;
}
