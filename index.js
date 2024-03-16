// Console

// console.log("joleth ayuson")

// Variables 

// var ayuson = 10
// let y = "letshkie"
// const joleth = 30

// Objects

// const obj = {
//     name: "joleth",
//     age: 23
// }

// Arrays

// const sampleArray = ['a', 'b', 'c','d']


console.log()


window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger')
    const menu = document.querySelector('.menus')

    hamburger.addEventListener('click', () => {
        if(hamburger.className.includes('bars')){
           hamburger.classList.remove('bars')
           hamburger.classList.add('close')
         
           menu.classList.remove('hide')
           menu.classList.add('show')

           document.body.style.overflow = "hidden"

        }else{
            hamburger.classList.add('bars')
            hamburger.classList.remove('close')

           menu.classList.add('hide')
           menu.classList.remove('show')

           document.body.style.overflow = "auto"
        }
    })

    window.addEventListener('resize', () => {
        if(window.innerWidth > 400){
           if(menu.className.includes('show')){
             menu.classList.remove('show')
             menu.classList.add('hide')

             hamburger.classList.remove('close')
             hamburger.classList.add('bars')

             document.body.style.overflow = "auto"
           }
        }
     
     })

})


