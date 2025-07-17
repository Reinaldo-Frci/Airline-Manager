function popup(){
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("loginButton").onclick = popup;
})