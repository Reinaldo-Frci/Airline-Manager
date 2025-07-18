function popup(){
  var popup = document.getElementById("loginPopup");
  popup.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("loginButton").onclick = popup;
    document.getElementById("loginPopup").onsubmit = popup;
/*    document.getElementById("loginPopup").onclick = popup; */
})