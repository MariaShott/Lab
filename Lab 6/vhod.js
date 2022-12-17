let button = document.querySelector('#voity');

let vhod = document.querySelector('.vhod');

let form = document.querySelector('.forma');

let butt_close = document.querySelector('.close');

button.addEventListener("click", function() {
    vhod.style.display = "block";
    content.style.pointerEvents = "none";
  });

butt_close.addEventListener("click", function() {
    vhod.style.display = "none";
    content.style.pointerEvents = "auto";
  });


let drag = form.querySelector('h3');

drag.addEventListener("mousedown", function(e) {
    let pos = form.getBoundingClientRect();
    let shiftX = e.pageX - pos.left - 150;
    let shiftY = e.pageY - pos.top - 150;

    document.onmousemove = function(e) {
        form.style.left = (e.pageX - shiftX) + "px";
        form.style.top = (e.pageY - shiftY) + "px";
    }

    document.onmouseup = function() {
        document.onmousemove = null;
    }
});
