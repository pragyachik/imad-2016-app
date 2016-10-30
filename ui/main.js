console.log('Loaded!');


// Change text
var element = document.getElementById("main text");
element.innerHTML="This is a Secret Webpage. Feel honoured to have found it";

//Make the Dinasour move
var image=document.getElementById("image");
image.onclick = function(){
    var interval='10px';
    image.style.marginRight='100px';
}