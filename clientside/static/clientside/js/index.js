function popup(){
  var popup = document.getElementById("myPopup");
  popup.style.display = "block";
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("loginButton").onclick = popup;
})