const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

const mImage = document.getElementById('main-image')


mImage.src = 'img/sneak.jpg'
img1.addEventListener('click', ()=>{
	mImage.src = 'img/sneak.jpg'
})

img2.addEventListener('click', ()=>{
	mImage.src = 'img/code.jpeg'
})

img3.addEventListener('click', ()=>{
	mImage.src = 'img/iprc.jpeg'
})

img4.addEventListener('click', ()=>{
	mImage.src = 'img/sneak.jpg'
})

function alertMe(){
	alert("Hello, world!");
}