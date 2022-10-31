let counter = 0;
const i = setInterval(function(){
console.log(counter);
counter++;
if(counter === 1) {
    document.getElementById('identity').innerHTML="Authur<br>Shelby";    
}
if(counter === 2) {
    document.getElementById('identity').innerHTML="Thomas<br>Shelby"; 
}
if(counter === 3) {
    document.getElementById('identity').innerHTML="John<br>Shelby"; 
}
if(counter === 4) {
    document.getElementById('identity').innerHTML="Freddie<br>Thorne"; 
}
if(counter === 5) {
    document.getElementById('identity').innerHTML="Elizabeth<br>Polly Gray"; 
}
if(counter === 6) {
    document.getElementById('identity').innerHTML="Micheal<br>Gray"; 
    counter=0;
}
}, 2000);

    frameCont = document.getElementById('frameCont');

    let countre = 0;
const j = setInterval(function(){
    console.log(counter);
    countre++;
    if(countre === 1) {
        frameCont.style.backgroundImage="url(authur.png)";
    }
    if(countre === 2) {
        frameCont.style.backgroundImage="url(thomas.png)";
    }
    if(countre === 3) {
        frameCont.style.backgroundImage="url(john.png)";
    }
    if(countre === 4) {
        frameCont.style.backgroundImage="url(freddy.png)";
    }
    if(countre === 5) {
        frameCont.style.backgroundImage="url(polly.png)";
    }
    if(countre === 6) {
        frameCont.style.backgroundImage="url(mike.png)";
        countre=0;
    }
}, 2000);

setInterval(function () {
document.getElementById('body1').style.opacity ="0";
}, 15000);

setInterval(function () {
    
    document.getElementById('body1').style.display ="none";
}, 16000);