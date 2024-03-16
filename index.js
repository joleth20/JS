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

        }else{
            hamburger.classList.add('bars')
            hamburger.classList.remove('close')

           menu.classList.add('hide')
           menu.classList.remove('show')
        }
    })

})
