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
document.getElementsByClassName("plannerChange")[0].id = "plannerContainersummer";
document.getElementById("imglink").style.visibility = "hidden";
document.getElementById("theSurprise").style.visibility = "hidden";
}

function Flowers(){
document.getElementsByClassName("plannerChange")[0].id = "plannerContainerfloral";
document.getElementById("imglink").style.visibility = "hidden";
document.getElementById("theSurprise").style.visibility = "hidden";
}

function Heartu(){
document.getElementsByClassName("plannerChange")[0].id = "plannerContainerheartu";
document.getElementById("imglink").style.visibility = "hidden";
document.getElementById("theSurprise").style.visibility = "hidden";
}

function Customimg(){
document.getElementsByClassName("plannerChange")[0].id = "plannerContainercustom";
document.getElementById("imglink").style.visibility = "visible";
document.getElementById("theSurprise").style.visibility = "hidden";
}

function Surprise(){
  document.getElementById("theSurprise").style.visibility = "visible";
  var elem = document.getElementById("theSurprise");
  var pos = 0;
  var pos1 = 210;
  var id = setInterval(frame, 10);
  function frame() {
    if (pos == 600 ) {
      clearInterval(id);
    } else {
      pos++;
      pos1++;
      elem.style.top = pos + 'px';
      elem.style.left = pos1 + 'px';
    }
  }
}
