//Codigo para el carrusel 

document.addEventListener("DOMContentLoaded", () => {
    const elementosCarousel = document.querySelectorAll(".carousel")
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: true
    })
})

// cambio de color del menu al hacer scroll

function scrollFunction(){
    if (document.documentElement.scrollTop > 77) {
        document.getElementById("barra").style.backgroundColor = "white"
        document.getElementById("1").style.color = "black"
        document.getElementById("2").style.color = "black"
        document.getElementById("3").style.color = "black"
        //document.getElementById("4").style.color = "black"
        document.getElementById("5").style.color = "black"
        document.getElementById("1").addEventListener("mouseenter", function(e){
            e.target.style.color = "white"
        })
        document.getElementById("1").addEventListener("mouseleave", function(e){
            e.target.style.color = "black"
        })
        document.getElementById("2").addEventListener("mouseenter", function(e){
            e.target.style.color = "white"
        })
        document.getElementById("2").addEventListener("mouseleave", function(e){
            e.target.style.color = "black"
        })
        document.getElementById("3").addEventListener("mouseenter", function(e){
            e.target.style.color = "white"
        })
        document.getElementById("3").addEventListener("mouseleave", function(e){
            e.target.style.color = "black"
        })
        //document.getElementById("4").addEventListener("mouseenter", function(e){
            //e.target.style.color = "white"
        //})
        //document.getElementById("4").addEventListener("mouseleave", function(e){
           // e.target.style.color = "black"
        //})
    } else {
        document.getElementById("barra").style.backgroundColor = "white"
        document.getElementById("1").style.color = "black"
        document.getElementById("2").style.color = "black"
        document.getElementById("3").style.color = "black"
        //document.getElementById("4").style.color = "white"
        document.getElementById("5").style.color = "black"
        document.getElementById("1").addEventListener("mouseleave", function(e){
            e.target.style.color = "black"
        })
        document.getElementById("2").addEventListener("mouseleave", function(e){
            e.target.style.color = "black"
        })
        document.getElementById("3").addEventListener("mouseleave", function(e){
            e.target.style.color = "black"
        })
        document.getElementById("4").addEventListener("mouseleave", function(e){
            e.target.style.color = "black"
        })
    }
}

window.onscroll = function () {
    scrollFunction()
}


// Menu responsive ==============================================

const toggleButton = document.getElementsByClassName('burger')[0]
const navbarLinks = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click', () => {
    document.getElementById("1").style.color = "black"
    document.getElementById("2").style.color = "black"
    document.getElementById("3").style.color = "black"
    //document.getElementById("4").style.color = "black"
  navbarLinks.classList.toggle('active')
})
navbarLinks.addEventListener("click", () => {
  navbarLinks.classList.toggle('active')
  
})


