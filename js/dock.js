let hideTimer;
let dock = document.getElementById("dock");
let page = document.getElementById("page");
let preview = document.getElementById("preview");

document.addEventListener("mousemove", (event) => {
    // if near mouse bottom
    // "window.innerHeight -" for bottom
    if (event.clientY < 25) {
        dock.classList.add("dock_active")
        preview.classList.add("dock_active")

        clearTimeout(hideTimer);

        hideTimer = setTimeout(() => {
            dock.classList.remove("dock_active")
            preview.classList.remove("dock_active")
        }, 2000);
    }
});
// TODO: make the dock position selectable