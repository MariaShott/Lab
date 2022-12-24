let button_vhod = document.querySelector('#voity');
let vhod = document.querySelector('.vhod');
let form = document.querySelector('.forma');
let button_vihod = document.querySelector('.close');
button_vhod.addEventListener("click", function() {
    vhod.style.display = "block";
    content.style.pointerEvents = "none";
  });

  button_vihod.addEventListener("click", function() {
    vhod.style.display = "none";
    content.style.pointerEvents = "auto";
  });
  let drag = form.querySelector('h3');

drag.addEventListener("mousedown", function(e) {
    let pos = form.getBoundingClientRect();
    let shiftX = e.pageX - pos.left;
    let shiftY = e.pageY - pos.top;

    document.onmousemove = function(e) {
        form.style.left = (e.pageX - shiftX) + "px";
        form.style.top = (e.pageY - shiftY) + "px";
    }

    document.onmouseup = function() {
        document.onmousemove = null;
        document.onmouseup = null;
    }
});
