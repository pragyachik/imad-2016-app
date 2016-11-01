console.log('Loaded!');


// Change text
var element = document.getElementById("main text");
element.innerHTML="The Animal Illuminati";

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

//P6
var button=document.getElementById('counter');


button.onclick=function(){
    //request
    var request=new XMLHttpRequest();
    
    //response
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter;
            }
        }
    };
    
    request.open('GET', 'http://pragyachik.imad.hasura-app.io/counter', true);
    request.send(null);
};