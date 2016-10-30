console.log('Loaded!');


// Change text
var element = document.getElementById("main text");
element.innerHTML="This is a Secret Webpage. Feel honoured to have found it";

//Make the Dinasour move
var image=document.getElementById("image");

var marginLeft = 0;
var speed=10;
var direction=0;

image.onclick = function(){
    if(direction%2===1) speed=-speed;
    var interval = setInterval(move, 100);
    direction++;
};

function move(){
    marginLeft = marginLeft+speed;
    image.style.marginLeft=marginLeft+"px";
}