function add(){
const parent = document.getElementById("modal")
    parent.style.display= "flex"
}

const savebtn = document.querySelector(".save")
console.log(savebtn)

let selectedColor = "#1ea6f5";
const colors = document.querySelector(".colors");

colors.addEventListener("click", (e) => {
    if (e.target.classList.contains("color")) {
        selectedColor = e.target.dataset.color;
    }
});

savebtn.addEventListener("click",()=>{
const title = document.querySelector("input").value
const discription = document.querySelector("#note").value
const notesParent = document.getElementById("notes-p")
const noteschild = document.createElement("div")
noteschild.classList="notes-card"
noteschild.style.backgroundColor = selectedColor
const notesContentTitle = document.createElement('div')
const notesContentdiscription = document.createElement('div')
notesContentTitle.textContent = title;
notesContentTitle.classList.add("title");
notesContentdiscription.textContent = discription;
notesContentdiscription.classList.add("discription");
noteschild.appendChild(notesContentTitle)
noteschild.appendChild(notesContentdiscription);
notesParent.appendChild(noteschild);

const parent = document.getElementById("modal")
    parent.style.display= "none"

})

console.log("Hello")





