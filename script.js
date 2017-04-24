document.getElementById('submit').addEventListener('click', function() {
    var container = document.getElementById('container');
    container.removeChild(container.childNodes[0]);
    var radius = document.getElementById('radius').value;
    var circle = document.createElement('div');
    circle.style.width = radius * 2 + 'px';
    circle.style.height = radius * 2 + 'px';
    circle.style.backgroundColor = getRandHex();
    circle.style.background = "linear-gradient(" + Math.floor(Math.random() * 90) + "deg, " + getRandHex() + ", " + getRandHex() + ")";
    //circle.style.margin = "30px auto 0 auto";
    circle.style.borderRadius = "100%";
    circle.style.position = "relative";
    circle.style.textAlign = "center";
    var words = document.createElement('div');
    words.innerText = "Drag Me!";
    words.style.position = "relative";
    words.style.top = radius + 'px';
    circle.appendChild(words);
    var area = calcArea(radius);
    var par = document.getElementById('text');
    par.innerText = "Your circle has a radius of " + radius + " and an area of " + area.toFixed(4) + ". Happy?";
    container.appendChild(circle);
    circle.addEventListener('mousedown', function () {
        drag(this);
        return false;
    });


});

function calcArea (r) {
  return Math.PI * Math.pow(r, 2);
}

function getRandHex () {
  var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  var hex = ['#'];
  for (var i = 0; i < 6; i++) {
    hex.push(arr[Math.floor(Math.random() * 16)]);
  }
  return hex.join('');
}

//learned how to use this drag function from this jsFiddle: https://jsfiddle.net/tovic/Xcb8d/
var selected = null; //initial selected object
var x_pos = 0; //x position of mouse
var y_pos = 0; //y position of mouse
var x_elem = 0; //x position of element
var y_elem = 0; //y position of element

//establishes clicked element and sets initial position
function drag(circle) {
    selected = circle; //sets circle to selected element
    x_elem = x_pos - selected.offsetLeft; //sets initial circle x coord on click
    y_elem = y_pos - selected.offsetTop; //sets initial circle y coord on click
}

// changes position of element based on mouse position while dragging
function moveElement(e) {
    x_pos = e.pageX; //gets mouse x coord
    y_pos = e.pageY; //gets mouse y coord
    if (selected !== null) { //if there is currently a selected element from the click event
        selected.style.left = (x_pos - x_elem) + 'px'; //changes element position to the difference in mouse position and original position
        selected.style.top = (y_pos - y_elem) + 'px';
        selected.style.background = "linear-gradient(" + Math.floor(Math.random() * 90) + "deg, " + getRandHex() + ", " + getRandHex() + ")";
    }
}

// Breaks connection with element on mouseup until it is clicked again
function destroy() {
    selected = null;
}

document.addEventListener('mousemove', moveElement);
document.addEventListener('mouseup', destroy);
