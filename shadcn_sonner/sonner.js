function showToast() {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.classList.add('toast');

    const toastLetter = document.createElement('p');
    toastLetter.textContent = "Event has been created";

    const toastBtn = document.createElement('button');
    toastBtn.classList.add('toast_btn');
    toastBtn.textContent = 'Undo';

    toast.appendChild(toastLetter);
    toast.appendChild(toastBtn);
    container.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);

    toastBtn.addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
    window.location.href = "../index.html";
});