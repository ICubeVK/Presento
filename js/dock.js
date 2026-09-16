let hideTimer;
let dock = document.getElementById("dock");
let content = document.getElementById("content");
let hideTimer;
let dockHovered = false;

function showDock() {
    dock.classList.add("dock_active")
    content.classList.add("dock_active")

    clearTimeout(hideTimer);

    if (!dockHovered) {
        hideTimer = setTimeout(hideDock, 2000);
    }
}

function hideDock() {
    if (dockHovered) return;
    dock.classList.remove("dock_active");
    content.classList.remove("dock_active");
}

document.addEventListener("mousemove", (event) => {
    // if near mouse top
    // "window.innerHeight -" for bottom
    if (event.clientY < 15) {
        showDock();
    }
});
// TODO: make the dock position selectable

dock.addEventListener("mouseenter", () => {
    dockHovered = true;
    clearTimeout(hideTimer);
});

dock.addEventListener("mouseleave", () => {
    dockHovered = false;

    // Start the timer again once the mouse leaves
    hideTimer = setTimeout(hideDock, 2000);
});