  const adjWord = document.querySelector('#adj-word');
  const navBar=document.querySelector(".nav-cont")

function animateAdj1(adjWord){
     adjWord.animate([
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-150px)'}, 
    ],{
    duration: 1000,
    iterations:1,
    easing: 'ease-in-out',
    fill:'forwards'
});}

function animateAdj2(adjWord){
     adjWord.animate([
    { transform: 'translateY(-150px)'},
    { transform: 'translateY(-300px)'}, 
    ],{
    duration: 1000,
    iterations:1,
    easing: 'ease-in-out',
    fill:'forwards'

});}

function animateAdj3(adjWord){
    adjWord.animate([
    { transform: 'translateY(-300px)'},
    { transform: 'translateY(-450px)'}, 
    ],{
    duration: 1000,
    iterations:1,
    easing: 'ease-in-out',
    fill:'forwards'

});}

function animateAdj4(adjWord){
    adjWord.animate([
    { transform: 'translateY(-450px)'},
    { transform: 'translateY(0px)'}, 
    ],{
    duration: 1000,
    iterations:1,
    easing: 'ease-in-out',
    fill:'forwards'

});}
function adjWordLoop(adjWord){
    setTimeout(() => animateAdj1(adjWord), 1000);
    setTimeout(() => animateAdj2(adjWord), 3000);
    setTimeout(() => animateAdj3(adjWord), 5000);
    setTimeout(() => animateAdj4(adjWord), 7000);
}
adjWordLoop(adjWord);
setInterval(() => adjWordLoop(adjWord), 8000);
//i couldnt figure out a way to continuously loop each translation, so i defined it four times.
//I then set a timeout for each repeated function so it would run smoothly, and then used 
//set interval to make it loop
//still though, wish I could make it so it didnt have to translate all the way back up
//the loop can also be messed with by users, so its definetly not perfect

document.addEventListener("scroll", ()=>{
    if(window.scrollY>document.body.scrollHeight*.4){
        navBar.style.boxShadow="0px -15px 100px rgba(153, 0, 255, 0.5)";
    } else {
        navBar.style.boxShadow="none";
    }
});



