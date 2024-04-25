
// an array containing the pop-up elements to drawn randomly
let divs = ["<div id='nutrigrain' class='popup'><div id='nutrigrain-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp DON'T FORGET TO EAT</span><div id='x1' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='nutrigrain-fill'><img id='nutrigrain-logo' src='assets/nutrigrain.png' alt='an ad for nutrigrain'></div></div></div>",    
            "<div id='turbo' class='popup'><div id='turbo-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp NITROUS OXIDE SUPPLEMENT</span><div id='x3' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='boost-wrapper'><img id='boost' src='assets/gran-turismo.png' alt='cover art of the playstation 1 game gran turismo'></div></div>",
            "<div id='stop' class='popup'><div id='stop-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp maybe an escape to this mess</span><div id='x2' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='stop-wrapper'><img id='stop-stop' src='assets/stop.gif' alt='a stop button'></div>"];
// an array containing the [x, y]-dimensions of each div
let dim = [[600, 250], [321, 321], [280, 280]];
let fr = 1;

let hi = 10;
let incr = 0;

function setup() {
   setTimeout(frameRate(fr), 3000);
}

function draw() {
    // roll dictates whether we will draw on this frame
    roll = (int)(random(0, hi));
    if (!roll) {
        let w = window.innerWidth;
        let h = window.innerHeight;

        // generates a random index of the array to be drawn
        // a higher frame rate will be quite chaotic. thus, at 24 fps we introduce the last element of divs
        // which is capable of stopping the calls to draw()
        let i = fr >= 24 ? (int)(random(0, 3)) : (int)(random(0, 2));
        let elt = createDiv(divs[i]);

        // random positioning with accounting for overflow
        x = random(0, w);
        y = random(0, h);
        elt.position(Math.min(x, w - dim[i][0]), Math.min(y, h - dim[i][1]));
    }
    // every 15 frames, we will increase the odds for getting a popup
    // caps at 50% per frame
    incr++;
    !incr && hi > 2 ? hi-- : incr = incr + 1 % 15;
}

// event listener which gives functionality to some of the elements
document.addEventListener('click', function (e) {
    e = e || window.event;
    var target = e.target;
    var id = target.id;
    if (id === 'stop-stop') {
        noLoop();
    } else if (id === 'boost') {
        if (fr < 60) {
            fr++;
            frameRate(fr);
        }
        target.parentElement.parentElement.style.display = 'none';
    }
}, false);
