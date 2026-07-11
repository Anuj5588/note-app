function add(){
const parent = document.getElementById("modal")
    parent.style.display= "flex"
}

const savebtn = document.querySelector(".save")
console.log(savebtn)

console.log("h0")
savebtn.addEventListener("click",()=>{
const title = document.querySelector("input").value
const discription = document.querySelector("#note").value
const notesParent = document.getElementById("notes")
const notesContentTitle = document.createElement('div')
const notesContentdiscription = document.createElement('div')
notesContentTitle.textContent= title
notesContentdiscription.textContent=discription
console.log(discription)
notesParent.appendChild(notesContentTitle);
notesParent.appendChild(notesContentdiscription);
const colors = document.querySelector(".colors");
const parent = document.getElementById("modal")
    parent.style.display= "none"

})

const colors = document.querySelector(".colors");
const notes = document.getElementById("notes");

colors.addEventListener("click", (e) => {
console.log(e.target.classList)
    if (e.target.classList.contains("color")) {
        const selectedColor = e.target.dataset.color;
        notes.style.backgroundColor = selectedColor;
    }

});




