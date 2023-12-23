const hamMenu = document.querySelector(".ham-menu");
const navBarContents = document.querySelector(".nav-bar-contents");

hamMenu.addEventListener('click', () => {
    hamMenu.style.color = "white";
    navBarContents.style.display = "flex"
})




const addNoteButton = document.querySelector("#addNote-button");
const main = document.querySelector(".main");
addNoteButton.addEventListener('click', () => {
    addNote();
})

const saveNotes = () => {

    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    //  console.log(data);
    if (data.length === 0) {
        localStorage.removeItem("notes");
    }
    else {
        localStorage.setItem("notes", JSON.stringify(data));
    }

    const save = document.querySelector(".save");
    save.addEventListener('click', ()=> {
        savedPop.style.display = "flex";
    })


}


const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add('note');
    note.innerHTML = `
    <div class="tool-bar">
        <i class="delete fa-solid fa-trash"></i>
        <i class="save fa-solid fa-floppy-disk">
            <p id="saved-pop">Saved!</p>
        </i>
        <i class="copy fa-solid fa-copy"></i>
    </div>
    <textarea id="textarea">${text}</textarea>
    `
    note.querySelector(".delete").addEventListener('click',
        function () {
            note.remove();
            saveNotes();
        })
    note.querySelector(".save").addEventListener('click',
        function () {
            saveNotes();
        })
    note.querySelector(".copy").addEventListener('click',
        function () {
            copyNotes();
        })
    main.appendChild(note);
    saveNotes();
}

(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote();
        }
        else {
            lsNotes.forEach(
                (lsNote) => {
                    addNote(lsNote);
                }
            )
        }
    }
)()

