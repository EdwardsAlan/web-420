/*USED ANIME JS TO ANIMATE SPLASH PAGE*/


//the following wont run untol everything is loaded
document.addEventListener('DOMContentLoaded',()=>{
    // wrapper animation , target main page and eases it in
anime.timeline({
    targets:'.welcome',
    easing:'easeOutExpo',
})
//changes the width and opacity of hte current '.welcome' target
.add({
    width:'100vw',
    opacity:1,
    duration:1200,
})
//this decides the type of animation, delay, and duration. When finsihed we remove the animation
.add({
    delay:2200,
    translateX:'100vw',
    duration:1800,
    complete:function(){
        document.querySelector('.welcome').remove();
    },
}),
//Heading and sub heading  animation 
anime({
    targets:'.heading',
    delay:1000,
    opacity: 1,
    duraction:1800,
    translateY:['-30px','0px'],
    easing:'easeOutExpo',
})
anime({
    targets:'.sub-heading',
    delay:1300,
    opacity: 1,
    duraction:1800,
    translateY:['-30px','0px'],
    easing:'easeOutExpo', 
})

//loader wrapper animation
anime({
    targets:'.loader-wrapper',
    opacity:1,
    easing:'easeOutExpo',
    duration:1800,
    delay:1500,

})
//loader animation
anime({
    targets:'.loader',
    opacity:1,
    easing:'easeOutExpo',
    duration:2300,
    delay:2000,
    width:['0%','100%']

});
// social icon animation. Used the easing with spring method.
anime({
    targets: '.social-icons li',
    opacity:1,
  translateY:['30px','0px'],
    easing: 'spring(1, 80, 10, 0)',
    duration:5000,
    delay:anime.stagger(600,{start:5000}),
  });






})

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('NoSQL');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('ORD');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}