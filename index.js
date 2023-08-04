const section1 = document.querySelector(section1)
const section2 = document.querySelector(section2)
const section3 = document.querySelector(section3)

function changePhoto2(fileName) {
    let img = document.querySelector("#bannerImage");
    img.setAttribute('src', fileName);
    section1.style.display = 'none'
    section2.style.display = 'block'
    section3.style.display = 'none'
}
function changePhoto1(fileName) {
    let img = document.querySelector("#bannerImage");
    img.setAttribute('src', fileName);
    section1.style.display = 'none'
    section2.style.display = 'none'
    section3.style.display = 'block'
}
function changePhoto3(fileName) {
    let img = document.querySelector("#bannerImage");
    img.setAttribute('src', fileName);
    section1.style.display = 'none'
    section2.style.display = 'block'
    section3.style.display = 'none'
}
function changePhoto1(fileName) {
    let img = document.querySelector("#bannerImage");
    img.setAttribute('src', fileName);
    section1.style.display = 'block'
    section2.style.display = 'none'
    section3.style.display = 'none'
}