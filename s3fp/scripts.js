// var div1 = "<div id='nutrigrain' class='popup'><div id='nutrigrain-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp DON'T FORGET TO EAT</span><div id='x'><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='nutrigrain-fill'><img id='nutrigrain-logo' src='assets/nutrigrain.png' alt='an ad for nutrigrain'></div>";

let divs = ["<div id='nutrigrain' class='popup'><div id='nutrigrain-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp DON'T FORGET TO EAT</span><div id='x1' class='x'><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='nutrigrain-fill'><img id='nutrigrain-logo' src='assets/nutrigrain.png' alt='an ad for nutrigrain'></div>",
            "<div id='stop' class='popup'><div id='stop-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp maybe an escape to this mess</span><div id='x2' class='x'><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='stop-wrapper'><img id='stop-stop' src='assets/stop.gif' alt='a stop button'></div></div>"];
let dim = [[600, 250], [280, 280]];

function setup() {
    frameRate(5);
}

function draw() {
    let w = window.innerWidth;
    let h = window.innerHeight;

    let i = Math.floor(random(0, 2));

    let elt = createDiv(divs[i]);
    x = random(0, w);
    y = random(0, h);

    elt.position(Math.min(x, w - dim[i][0]), Math.min(y, h - dim[i][1]));
}