console.log('Loaded!');


// Change text
var element = document.getElementById("main text");
element.innerHTML="This is a Secret Webpage. Feel honoured to have found it";

//Make the Dinasour move
var image=document.getElementById("image");

var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft+10;
    image.style.marginLeft=marginLeft+"px";
}

image.onclick = function(){
    var interval = setInterval(moveRight, 100);
};