const addbtn = document.getElementsByClassName("addbtn");
const main = document.getElementById("main");

addbtn[0].addEventListener('click', myfunc);

function saving() {
    const notes = document.querySelectorAll(".note textarea");
    const data = [];
    notes.forEach(push);

    function push(note) {
        data.push(note.value);
    }

    localStorage.setItem("notes", JSON.stringify(data));
}

function myfunc(text = " ") {
    const div = document.createElement('div');
    div.classList.add("note");
    div.innerHTML = `
        <div class="note_top">
            <i id="save" class="fa-solid fa-floppy-disk"></i>
            <i id="delete" class="fa-solid fa-trash"></i>
        </div>
        <textarea></textarea>`;

    main.appendChild(div);
    saving()

    div.querySelector("#delete").addEventListener("click", function () {
        div.remove();
        saving()
    });

    div.querySelector("#save").addEventListener("click", saving);
    // div.querySelector("textarea").addEventListener("focusout", saving);
}
function myfunc2(text = " ") {
    const div = document.createElement('div');
    div.classList.add("note");
    div.innerHTML = `
        <div class="note_top">
            <i id="save" class="fa-solid fa-floppy-disk"></i>
            <i id="delete" class="fa-solid fa-trash"></i>
        </div>
        <textarea>${text}</textarea>`;

    main.appendChild(div);
    saving()

    div.querySelector("#delete").addEventListener("click", function () {
        div.remove();
        saving()
    });

    div.querySelector("#save").addEventListener("click", saving);
    div.querySelector("textarea").addEventListener("focusout", saving);
}

(function () {
    const lsnotes = JSON.parse(localStorage.getItem("notes"));
    lsnotes.forEach(
        (lsnote) => {
            myfunc2(lsnote)
        }
    )
})()
