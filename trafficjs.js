let stop=document.getElementById("stopLight");
let ready=document.getElementById("readyLight");
let go=document.getElementById("goLight")
let bstop=document.getElementById("stopButton");
let bready=document.getElementById("readyButton");
let bgo=document.getElementById("goButton")
function stopl(){
    bstop.style.backgroundColor="#cf1124";
    stop.style.backgroundColor="#cf1124";
    
    bready.style.backgroundColor="#1f1d41";
    ready.style.backgroundColor="#4b5069"
    
    bgo.style.backgroundColor="#1f1d41";
    go.style.backgroundColor="#4b5069";
}
function readyl(){
    bready.style.backgroundColor="#f7c948";
    ready.style.backgroundColor="#f7c948"
    
    bstop.style.backgroundColor="#1f1d41";
    stop.style.backgroundColor="#4b5069";
    
    
    bgo.style.backgroundColor="#1f1d41";
    go.style.backgroundColor="#4b5069";
}
function gol(){
    bgo.style.backgroundColor="#199473";
    go.style.backgroundColor="#199473";
    
    bready.style.backgroundColor="#1f1d41";
    ready.style.backgroundColor="#4b5069"
    
    bstop.style.backgroundColor="#1f1d41";
    stop.style.backgroundColor="#4b5069";
}