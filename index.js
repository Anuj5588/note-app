
function add(){
    const parent = document.getElementById("modal");
    parent.style.display="flex"
}


let editingCardId = null;

const savebtn = document.querySelector(".save");
 const icon = document.createElement("i");
let selectedColor = "#1ea6f5";

const colors = document.querySelector(".colors");

colors.addEventListener("click", (e) => {

icon.textContent = "✓";
icon.style.color = "white";
icon.style.fontSize = "20px";
    const checkColor = e.target
    checkColor.appendChild(icon)
  
    if (e.target.classList.contains("color")) {
        selectedColor = e.target.dataset.color;
    }
});

savebtn.addEventListener("click", () => {
console.log("hello")
    const title = document.querySelector("input").value;
    const description = document.querySelector("#note").value;


    // ---------------- EDIT ----------------
    if (editingCardId) {

        const card = document.querySelector(
            `[data-id="${editingCardId}"]`
        );

        card.querySelector(".title").textContent = title;
        card.querySelector(".discription").textContent = description;
        card.style.backgroundColor = selectedColor;

        editingCardId = null;

    }

    // ---------------- CREATE ----------------
    else {

        const noteId = Date.now();

        const notesParent = document.getElementById("notes-p");

        const noteschild = document.createElement("div");
        noteschild.classList.add("notes-card");
        noteschild.dataset.id = noteId;
        noteschild.style.backgroundColor = selectedColor;

        const noteCardChild = document.createElement("div");
        noteCardChild.classList.add("edit-delete-p");

        // Create NEW buttons for every card
        const editButton = document.createElement("img");
        const deleteButton = document.createElement("img");
editButton.classList.add("edit-button")
deleteButton.classList.add("delete-button")
        editButton.src = "assets/icon/pencil.png";       
        deleteButton.src = "assets/icon/trash-bin.png";  

        editButton.alt = "Edit";
        deleteButton.alt = "Delete";

        noteCardChild.appendChild(editButton);
        noteCardChild.appendChild(deleteButton);

        noteschild.appendChild(noteCardChild);

        const notesContentTitle = document.createElement("div");
        notesContentTitle.classList.add("title");
        notesContentTitle.textContent = title;

        const notesContentDescription = document.createElement("div");
        notesContentDescription.classList.add("discription");
        notesContentDescription.textContent = description;
      

        noteschild.appendChild(notesContentTitle);
        noteschild.appendChild(notesContentDescription);

        notesParent.appendChild(noteschild);

        // ------------ EDIT EVENT ------------
        editButton.addEventListener("click", function () {

            const card = this.closest(".notes-card");

            editingCardId = card.dataset.id;

            document.querySelector("input").value =
                card.querySelector(".title").textContent;

            document.querySelector("#note").value =
                card.querySelector(".discription").textContent;

            selectedColor = card.style.backgroundColor;

            document.getElementById("modal").style.display = "block";
        });

        // ------------ DELETE EVENT ------------
        deleteButton.addEventListener("click", function () {

            const card = this.closest(".notes-card");

            card.remove();

        });

    }

    // Clear Inputs
    document.querySelector("input").value = "";
    document.querySelector("#note").value = "";
    icon.textContent=""

    // Close Modal
    document.getElementById("modal").style.display = "none";

});
