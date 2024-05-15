let page = 1;
let n = 15;
let rr_text = document.getElementById('rr-text');

document.addEventListener('click', function (e) {
  e = e || window.event;
  var id = e.target.id;
  if (id === 'rarrow') {
    next();
  } else if (id === 'larrow') {
    prev();
  } else if (id === 'portfolio') {
    document.getElementById('pdf' + page.toString()).style.display = 'block';
  } else if (id === 'rr') {
    rr_text.style.display = 'flex';
    loop();
  } else {
    tocCheck(id);
  }
}, false)

function next() {
  // make current page hidden and get its position
  var curr = document.getElementById('pdf' + page.toString());
  x = getPos(curr).left;
  y = getPos(curr).top;
  curr.style.display = 'none';
  // go to next page
  page++;
  var curr = document.getElementById('pdf' + page.toString());
  curr.style.display = 'block';
  curr.style.left = x;
  curr.style.top = y;
}

function prev() {
  // make current page hidden, get pos
  var curr = document.getElementById('pdf' + page.toString());
  x = getPos(curr).left;
  y = getPos(curr).top;
  curr.style.display = 'none';
  // go to previous page
  page--;
  var curr = document.getElementById('pdf' + page.toString());
  curr.style.display = 'block';
  curr.style.left = x;
  curr.style.top = y;
}

function changePage(num) {
  // make current page hidden, get pos
  var curr = document.getElementById('pdf' + page.toString());
  x = getPos(curr).left;
  y = getPos(curr).top;
  curr.style.display = 'none';
  // go to previous page
  page = num;
  var curr = document.getElementById('pdf' + page.toString());
  curr.style.display = 'block';
  curr.style.left = x;
  curr.style.top = y;
}

// helper function for table of contents events
function tocCheck(id) {
  if (id === 'i') {
    changePage(3);
  } else if (id === 'ii') {
    changePage(5);
  } else if (id === 'iii') {
    changePage(6);
  } else if (id === 'iv') {
    changePage(8);
  } else if (id === 'v') {
    changePage(10);
  } else if (id === 'vi') {
    changePage(12);
  } else if (id === 'vii') {
    changePage(14);
  } else if (id === 'viii') {

  } else if (id === 'ix') {

  }
}

// helper function for getting position of an elt
function getPos(elt) {
  rect = elt.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  };
}

// p5js stuffs

let rr_array;
let index = 0;

fetch("portfolio/rr.txt")
  .then((res) => res.text())
  .then((text) => {
    rr_array = text.split(" ");
  })
  .catch((e) => console.error(e));

function setup() {
  frameRate(10);
  noLoop();
}

function draw() {
  rr_text.innerHTML = rr_array[index];
  index = (index + 1) % rr_array.length;
}


// draggable stuff, grabbed from https://www.w3schools.com/howto/howto_js_draggable.asp

for (let i = 1; i < n; i++) {
  dragElement(document.getElementById("pdf" + i.toString()));
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-move")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "-move").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}