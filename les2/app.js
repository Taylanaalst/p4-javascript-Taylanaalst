//Oefening angry-birds

const bird = document.querySelector(".bird");
let count = 0;

bird.addEventListener("click", function(){
  count += 50;
    bird.style.left = count + "px"
})


window.addEventListener("keydown", function(event){
    if(event.key == "ArrowRight"){
        count += 50;
        bird.style.left = count + "px"
        bird.src = "img/b-right.svg"
    }
})


window.addEventListener("keydown", function(event){
    if(event.key == "ArrowLeft"){
        count -= 50;
        bird.style.left = count + "px"
        bird.src = "img/b-left.svg"
    }
})

window.addEventListener("keydown", function(event){
    if(event.key == "ArrowUp"){
        count += 50;
        bird.style.top = count - "px"
        bird.src = "img/b-up.svg"
    }
})

window.addEventListener("keydown", function(event){
    if(event.key == "ArrowDown"){
        count += 50;
        bird.style.bottom = count + "px"
        bird.src = "img/b-down.svg"
    }
})

