var anim = document.querySelector('.text .click-btn');
            
anim.addEventListener('click',function(e) {             document.querySelector('.red').classList.toggle('red-expand');
    document.querySelector('.green').classList.toggle('green-expand');
    
    document.querySelector('.yellow').classList.toggle('yellow-expand');
    document.querySelector('.blue').classList.toggle('blue-expand');
})