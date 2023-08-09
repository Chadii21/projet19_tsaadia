const page1 = document.querySelector(".page1")
const all2 = document.querySelector(".all2")
const all3 = document.querySelector(".all3")

const step1 = document.querySelector(".step1")
const step2 = document.querySelector(".step2")
const step3 = document.querySelector(".step3")
const step11 = document.querySelector(".step11")

const btn = document.querySelector(".btn")
const btns = document.querySelector(".btns")
const page2 = document.querySelector(".page2")

const left = document.querySelector(".left")
const left3 = document.querySelector(".left3")
const left2 = document.querySelector(".left2")

const container = document.querySelector(".container")
const container2 = document.querySelector(".container2")
const container3 = document.querySelector(".container3")

const i1 = document.querySelector(".i1")
const i2 = document.querySelector(".i2")
const i3 = document.querySelector(".i3")

//mettre page 1 par defaut
// window.onload = () => {
//     document.querySelector(".all").style.display = "initial";
// }

// le 2e bouton
step2.addEventListener("click", () => {
    all2.style.display = "block";
    // all.style.display = "none";
    container.style.display = "none"
 i1.style.display = "none"
 console.log("hhh");
 
})
step11.addEventListener("click", () => {
    container.style.display = "block";
    i1.style.display = "block"
    // all.style.display = "none";
    container2.style.display = "none"
 i2.style.display = "none"
 console.log("gvg");
})
step1.addEventListener("click", () => {
    left.style.display = "block";
    i1.style.display = "block"
    // all.style.display = "none";
    left2.style.display = "none"
 i2.style.display = "none"
 console.log("gvg");
})
// le 3e bouton
step3.addEventListener("click", () => {
    left.style.display = "none";
     i1.style.display = "none";
     left3.style.display = "block";
     i3.style.display = "block";
     left2.style.display = "none";
     i2.style.display = "none"
//  page2.style.display = "none";
     console.log("hbuhb");

})


// les boutons forward et backward
btn.addEventListener("click", () => {
    all2.style.display = "block";
    // all.style.display = "none";
    left.style.display = "none"
 i1.style.display = "none"
 console.log("hhh");
})
btns.addEventListener("click", () => {
    all2.style.display = "block";
    // all.style.display = "none";
    left.style.display = "none"
 i1.style.display = "none"
 console.log("hhh");
})




// function changePhoto2(fileName) {
//     let img = document.querySelector("#bannerImage");
//     img.setAttribute('src', fileName);
//     section1.style.display = 'none'
//     section2.style.display = 'block'
//     section3.style.display = 'none'
// }
// function changePhoto1(fileName) {
//     let img = document.querySelector("#bannerImage");
//     img.setAttribute('src', fileName);
//     section1.style.display = 'none'
//     section2.style.display = 'none'
//     section3.style.display = 'block'
// }
// function changePhoto3(fileName) {
//     let img = document.querySelector("#bannerImage");
//     img.setAttribute('src', fileName);
//     section1.style.display = 'none'
//     section2.style.display = 'block'
//     section3.style.display = 'none'
// }
// function changePhoto1(fileName) {
//     let img = document.querySelector("#bannerImage");
//     img.setAttribute('src', fileName);
//     section1.style.display = 'block'
//     section2.style.display = 'none'
//     section3.style.display = 'none'
// }