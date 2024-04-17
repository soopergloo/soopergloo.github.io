var div1 = "<div id='nutrigrain' class='popup'><div id='nutrigrain-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp DON'T FORGET TO EAT</span><div id='x'><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='nutrigrain-fill'><img id='nutrigrain-logo' src='assets/nutrigrain.png' alt='an ad for nutrigrain'></div>";

function draw() {
    let elt = createDiv("<div id='nutrigrain' class='popup'><div id='nutrigrain-bar' class='bar'><span style='font-family: sans-serif;'>&nbsp DON'T FORGET TO EAT</span><div id='x'><span style='font-family: sans-serif; color: white;'>X</span></div></div><div id='nutrigrain-fill'><img id='nutrigrain-logo' src='assets/nutrigrain.png' alt='an ad for nutrigrain'></div>");
    x = random(0, 200);
    y = random(0, 200);
    elt.position(x,y);
}