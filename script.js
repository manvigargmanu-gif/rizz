function scrollToLetter(){
document.getElementById("letter").scrollIntoView({
behavior:"smooth"
});
}

document.getElementById("forgiveBtn")
.addEventListener("click",function(){

confetti({
particleCount:150,
spread:100,
origin:{y:0.6}
});

document.getElementById("message").innerHTML=
"🥹 Thank you for reading this. Every metro ride and every conversation means a lot to me. ❤️";
});
