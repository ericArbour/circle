document.getElementById('submit').addEventListener('click', function() {
    var container = document.getElementById('container');
    //container.removeChild(container.lastChild);
    //container.removeChild(container.lastChild);
    var radius = document.getElementById('radius').value;
    var circle = document.createElement('div');
    circle.style.width = radius * 2 + 'px';
    circle.style.height = radius * 2 + 'px';
    circle.style.backgroundColor = "black";
    circle.style.borderRadius = "100%";
    var area = calcArea(radius);
    var par = document.createElement('p');
    par.innerText = "Your circle has a radius of " + radius + " and an area of " + area.toFixed(4) + ". Happy?";
    container.appendChild(par);
    container.appendChild(circle);
});

function calcArea (r) {
  return Math.PI * Math.pow(r, 2);
}
