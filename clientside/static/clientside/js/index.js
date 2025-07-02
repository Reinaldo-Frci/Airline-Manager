function popup(){
  var popup = document.getElementById("popup");
  popup.classList.toggle("show");
}

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#login').onclick = popup;
})