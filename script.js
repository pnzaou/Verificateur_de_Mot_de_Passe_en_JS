const input = document.querySelector('#mdp')
const letter = document.querySelector('#letter')
const capital = document.querySelector('#capital')
const length = document.querySelector('#length')
const number = document.querySelector('#number')
const yeux = document.querySelector('.yeux')

yeux.onclick = function(){
    if(input.type === 'password'){
        input.type = 'text'
    }else{
        input.type = 'password'
    }
}

input.onfocus = function(){
    document.querySelector('#verification').style.display = 'flex'
}

input.onblur = function(){
    document.querySelector('#verification').style.display = 'none'
}

input.onkeyup = function(){
    let minuscule = /[a-z]/g
    if(input.value.match(minuscule)){
        letter.classList.remove('invalid')
        letter.classList.add('valid')
    }else{
        letter.classList.remove('valid')
        letter.classList.add('invalid')
    }

    let majuscule = /[A-Z]/g
    if(input.value.match(majuscule)){
        capital.classList.remove('invalid')
        capital.classList.add('valid')
    }else{
        capital.classList.remove('valid')
        capital.classList.add('invalid')
    }

    let numbers = /[0-9]/g
    if(input.value.match(numbers)){
        number.classList.remove('invalid')
        number.classList.add('valid')
    }else{
        number.classList.remove('valid')
        number.classList.add('invalid')
    }

    
    if(input.value.length >= 8){
        length.classList.remove('invalid')
        length.classList.add('valid')
    }else{
        length.classList.remove('valid')
        length.classList.add('invalid')
    }
}
