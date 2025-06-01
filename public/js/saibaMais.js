// SLIDER
const elementosSlider = document.querySelectorAll('.slider')
const btProximo = document.getElementById('botaoProximo')
const btAnterior = document.getElementById('botaoAnterior')

let sliderAtual = 0

function proximoSlider(){
    esconderSlider()

    if(sliderAtual === elementosSlider.length - 1 ){
        sliderAtual = 0
    }else{  
        sliderAtual++
    }

    mostrarSlider()
}

function anteriorSlider(){
    esconderSlider()

    if(sliderAtual === 0){
        sliderAtual = elementosSlider.length - 1
    }else{  
        sliderAtual--
    }

    mostrarSlider()
}

function esconderSlider(){
    elementosSlider.forEach(item => item.classList.remove('on'));
}

function mostrarSlider(){
    elementosSlider[sliderAtual].classList.add('on')
}


btProximo.addEventListener('click', proximoSlider)
btAnterior.addEventListener('click', anteriorSlider)




function openModal(id) {
    var modal = document.getElementById(id)
  modal.classList.add('active')
}

function closeModal(id) {
     var modal = document.getElementById(id)
  modal.classList.remove('active')
}