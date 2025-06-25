let adjScroll=document.querySelector("#adj-word");
let adjScrollRate=150; //height of each word container
var adjScrollInterval;

document.addEventListener("DOMContentLoaded",function(){
    adjScrollInterval=setInterval(function() {
        adjScroll.scrollTop+=adjScrollRate;
        if (adjScroll.scrollTop >= adjScroll.scrollHeight - adjScroll.clientHeight) {
        adjScroll.scrollTop = 0; // Reset to top for looping scroll
  }

    }, 2000);

});