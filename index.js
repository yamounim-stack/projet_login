// ---- SIGN UP ----
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
document.getElementById("logout-btn").addEventListener("click", () => {
    showPage('page-login');
});

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
    alert("Inscription réussie ! nom: " + nomVal + " email: " + mailVal);
});


// ---- LOGIN ----
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", () => {
    const mailVal = loginEmail.value;
    const passVal = loginPassword.value;

    // 1. Vérifier que les champs ne sont pas vides
    if (!mailVal || !passVal) {
        return alert("Veuillez remplir tous les champs");
    }

    // 2. Récupérer la liste des users depuis localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 3. Chercher un user qui correspond à l'email ET au mot de passe
    const userTrouve = users.find(u => u.mail === mailVal && u.pass === passVal);

    // 4. Si trouvé => connexion réussie, sinon => erreur
    if (userTrouve) {
        showPage('page-welcome');
    } else {

        showPage('page-welcome');

    }
});