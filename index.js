const all = document.querySelector(".all")
const all2 = document.querySelector(".all2")
const all3 = document.querySelector(".all3")
const step1 = document.querySelector(".step1")
const step2 = document.querySelector(".step2")
const step3 = document.querySelector(".step3")
const btn = document.querySelector(".btn")
const page2 = document.querySelector(".page2")


window.onload = () => {
    document.querySelector(".all").style.display = "initial";
}
step2.addEventListener("click", () => {
    page2.style.display = "block";
    all.style.display = "none";
})
btn.addEventListener("click", () => {
    all3.style.display = "flex";
    all.style.display = "none";
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