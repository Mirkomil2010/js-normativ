const headers = document.querySelectorAll(".accordion_header");

headers.forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;

        document.querySelectorAll(".accordion_content").forEach(n => {
            if (n !== content) {
                n.style.maxHeight = null;
                n.classList.remove("open");
            }
        });

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove("open");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.classList.add("open");
        }
    });
});

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
});