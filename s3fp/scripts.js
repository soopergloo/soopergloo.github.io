
// an array containing the pop-up elements to drawn randomly
let divs = ["<div id='nutrigrain' class='popup'><div id='nutrigrain-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp DON'T FORGET TO EAT</span><div id='x1' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='nutrigrain-fill'><img id='nutrigrain-logo' src='assets/nutrigrain.png' alt='an ad for nutrigrain'></div></div></div>",
    "<div id='turbo' class='popup'><div id='turbo-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp NITROUS OXIDE SUPPLEMENT</span><div id='x3' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='boost-wrapper'><img id='boost' src='assets/gran-turismo.png' alt='cover art of the playstation 1 game gran turismo'></div></div>",
    "<div id='money' class='popup'><div id='money-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp $3 USD FOR 330M</span><div id='x4' class='x' onclick=\"this.parentElement.parentElement.style.display='none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='money-wrapper'><img id='money-money' src='assets/money.png' alt='an ad for a website which sells virtual currencies for mmos'></div></div>",
    "<div id='micro' class='popup'><div id='micro-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp is this fun?</span><div id='x4' class='x'><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='bg'><div id='goal' onclick=\"this.parentElement.parentElement.style.display = 'none';\"></div></div></div>",
    "<div id='death' class='popup'><div id='death-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp CLICK TO PURCHASE NOW!!!!</span><div id='x5' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div> </div> <div id='death-wrapper'><img id='death-death' src='assets/death.png' alt='an ad for the weird spike death machine from spongebob. you know the one, right?'></div></div>",
    "<div id='mystery' class='popup'><div id='mystery-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp mystery~~~~~</span><div id='x6' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='mystery-wrapper'><img id='mystery-mystery' src='assets/mystery.png' alt='an unopened gift. should we open it?'></div></div>",
    "<div id='stop' class='popup'><div id='stop-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp maybe an escape to this mess</span><div id='x2' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='stop-wrapper'><img id='stop-stop' src='assets/stop.gif' alt='a stop button'></div>"];
// an array containing the [x, y]-dimensions of each div
let dim = [[600, 250], [321, 321], [200, 200], [200, 100], [300, 400], [215, 235], [280, 280]];
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
        let i = fr >= 24 ? (int)(random(0, 7)) : (int)(random(0, 6));
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
    } else if (id === 'money-money') {
        cash = !cash ? 1 : cash * 2;
        target.parentElement.parentElement.style.display = 'none';
        updateCounter();
    } else if (id === 'death-death') {
        cash -= 2000000000;
        updateCounter();
        purchase();
        target.parentElement.parentElement.style.display = 'none';
    } else if (id === 'mystery-mystery') {
        target.src = "assets/gift.png";
        target.id = "---";
        giftBox(giftRoll((int)(random(0, 21))));
    }
}, false);

let cash = 0;
let colors = ["red", "orange", "yellow", "green", "blue", "pink", "purple"]
let c_inc = 0;
function updateCounter() {
    var mc = document.getElementById("money-counter");
    if (cash) {
        mc.innerHTML = cash < 0 ? "-$" + (String)(Math.abs(cash)) : "$" + (String)(cash);
    }
    var h = window.innerHeight;
    var w = window.innerWidth;

    var x = random(0, w);
    var y = random(0, h);

    mc.style.left = x;
    mc.style.top = y;
    mc.style.color = colors[c_inc + 1 % 7];
}

function giftRoll(i) {
    if (i === 20) {
        return 20;
    } else if (i >= 17) {
        return 10;
    } else if (i >= 11) {
        return 5;
    } else if (i >= 6) {
        return 3;
    } else {
        return 1;
    }
}

let m_divs = ["<div id='nutrigrain' class='popup'><div id='nutrigrain-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp DON'T FORGET TO EAT</span><div id='x1' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='nutrigrain-fill'><img id='nutrigrain-logo' src='assets/nutrigrain.png' alt='an ad for nutrigrain'></div></div></div>",
    "<div id='turbo' class='popup'><div id='turbo-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp NITROUS OXIDE SUPPLEMENT</span><div id='x3' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='boost-wrapper'><img id='boost' src='assets/gran-turismo.png' alt='cover art of the playstation 1 game gran turismo'></div></div>",
    "<div id='money' class='popup'><div id='money-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp $3 USD FOR 330M</span><div id='x4' class='x' onclick=\"this.parentElement.parentElement.style.display='none';\"><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='money-wrapper'><img id='money-money' src='assets/money.png' alt='an ad for a website which sells virtual currencies for mmos'></div></div>",
    "<div id='micro' class='popup'><div id='micro-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp is this fun?</span><div id='x4' class='x'><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='bg'><div id='goal' onclick=\"this.parentElement.parentElement.style.display = 'none';\"></div></div></div>",
    "<div id='death' class='popup'><div id='death-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp CLICK TO PURCHASE NOW!!!!</span><div id='x5' class='x' onclick=\"this.parentElement.parentElement.style.display = 'none';\"><span style='font-family: sans-serif; color: white;'>X</span></div> </div> <div id='death-wrapper'><img id='death-death' src='assets/death.png' alt='an ad for the weird spike death machine from spongebob. you know the one, right?'></div></div>"]
let m_dim = [[600, 250], [321, 321], [200, 200], [200, 100], [300, 400]];

function giftBox(i) {
    let w = window.innerWidth;
    let h = window.innerHeight;
    for (let j = 0; j < i; j++) {
        e = (int)(random(0, 5));
        elt = createDiv(m_divs[e]);
        x = random(0, w);
        y = random(0, h);
        elt.position(Math.min(x, w - m_dim[e][0]), Math.min(y, h - m_dim[e][1]));
    }
}

function purchase() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    elt = createImg("assets/purchase.png");
    x = random(0, w);
    y = random(0, h);
    elt.position(x, y);
}