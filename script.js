// Mouse event. 

let sound1 = document.getElementById('W');
sound1.addEventListener('click',function(){
    sound1.style.border = '7px solid #ff0057'
    sound1.style.cursor = 'pointer'
    let audio = new Audio ('./Assests/tom-1.mp3');
    audio.play();
})
sound1.addEventListener('mouseout',function(){
    sound1.style.border = ' 10px solid #404B69'
})


let sound2 = document.getElementById('A');
sound2.addEventListener('click',function(){
    sound2.style.border = '7px solid #ff0057'
    sound2.style.cursor = 'pointer'
    let audio = new Audio ('./Assests/tom-2.mp3');
    audio.play();
})
sound2.addEventListener('mouseout',function(){
    sound2.style.border = ' 10px solid #404B69'
})


let sound3 = document.getElementById('S');
sound3.addEventListener('click',function(){
    sound3.style.border = '7px solid #ff0057'
    sound3.style.cursor = 'pointer'
    let audio = new Audio ('./Assests/tom-3.mp3');
    audio.play();
})
sound3.addEventListener('mouseout',function(){
    sound3.style.border = ' 10px solid #404B69'
})


let sound4 = document.getElementById('D');
sound4.addEventListener('click',function(){
    sound4.style.border = '7px solid #ff0057'
    sound4.style.cursor = 'pointer'
    let audio = new Audio ('./Assests/tom-4.mp3');
    audio.play();
})
sound4.addEventListener('mouseout',function(){
    sound4.style.border = ' 10px solid #404B69'
})


let sound5 = document.getElementById('J');
sound5.addEventListener('click',function(){
    sound5.style.border = '7px solid #ff0057'
    sound5.style.cursor = 'pointer'
    let audio = new Audio ('./Assests/snare.mp3');
    audio.play();
})
sound5.addEventListener('mouseout',function(){
    sound5.style.border = ' 10px solid #404B69'
})


let sound6 = document.getElementById('K');
sound6.addEventListener('click',function(){
    sound6.style.border = '7px solid #ff0057'
    sound6.style.cursor = 'pointer'

    let audio = new Audio ('./Assests/crash.mp3');
    audio.play();
})
sound6.addEventListener('mouseout',function(){
    sound6.style.border = ' 10px solid #404B69'
})


let sound7 = document.getElementById('L');
sound7.addEventListener('click',function(){
    sound7.style.border = '7px solid #ff0057'
    sound7.style.cursor = 'pointer'
    let audio = new Audio ('./Assests/kick-bass.mp3');
    audio.play();
})
sound7.addEventListener('mouseout',function(){
    sound7.style.border = ' 10px solid #404B69'
})


// Keyboard event.

document.body.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
        let audio = new Audio('./Assests/tom-1.mp3');
        audio.play();
    }
});

document.body.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        let audio = new Audio('./Assests/tom-2.mp3');
        audio.play();
    }
});

document.body.addEventListener('keydown', function(event) {
    if (event.key === 's') {
        let audio = new Audio('./Assests/tom-3.mp3');
        audio.play();
    }
});

document.body.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        let audio = new Audio('./Assests/tom-4.mp3');
        audio.play();
    }
});

document.body.addEventListener('keydown', function(event) {
    if (event.key === 'j') {
         let audio = new Audio ('./Assests/snare.mp3');
         audio.play();
    }
});

document.body.addEventListener('keydown', function(event) {
    if (event.key === 'k') {
          let audio = new Audio ('./Assests/crash.mp3');
          audio.play();
    }
});

document.body.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
          let audio = new Audio ('./Assests/kick-bass.mp3');
          audio.play();
    }
});







