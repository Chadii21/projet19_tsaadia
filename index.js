const page1 = document.querySelector(section1)
const page2 = document.querySelector(section2)
const page3 = document.querySelector(section3)

function changePhoto2(fileName) {
    let img = document.querySelector("#bannerImage");
    img.setAttribute('src', fileName);
    page1.style.display = 'none'
    page1.style.display = 'block'
    page1.style.display = 'none'
}
function changePhoto1(fileName) {
    let img = document.querySelector("#bannerImage");
    img.setAttribute('src', fileName);
    page1.style.display = 'none'
    page1.style.display = 'none'
    page1.style.display = 'block'
}
function changePhoto3(fileName) {
    let img = document.querySelector("#bannerImage");
    img.setAttribute('src', fileName);
    page1.style.display = 'none'
    page1.style.display = 'block'
    page1.style.display = 'none'
}
function changePhoto1(fileName) {
    let img = document.querySelector("#bannerImage");
    img.setAttribute('src', fileName);
    page1.style.display = 'block'
    page1.style.display = 'none'
    page1.style.display = 'none'
}