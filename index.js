// ---- SIGN UP ----
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const nomVal = nom.value;
    const mailVal = email.value;
    const passVal = password.value;

    if (!nomVal || !mailVal || !passVal) {
        return alert("Veuillez remplir tous les champs");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ nom: nomVal, mail: mailVal, pass: passVal });
    localStorage.setItem("users", JSON.stringify(users));
    showPage('page-welcome');
});


// ---- LOGIN ----
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {
    const mailVal = loginEmail.value;
    const passVal = loginPassword.value;

    if (!mailVal || !passVal) {
        return alert("Veuillez remplir tous les champs");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userTrouve = users.find(u => u.mail === mailVal && u.pass === passVal);

    if (userTrouve) {
        showPage('page-welcome');
    } else {
        alert("Email ou mot de passe incorrect");
    }
});


// ---- NAVIGATION ----
function showPage(id) {
    document.querySelectorAll('.form').forEach(f => f.parentElement.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}