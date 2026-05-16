const nom=document.getElementById("nom");
const email=document.getElementById("email");
const password=document.getElementById("password");
const btn=document.getElementById("btn");

btn.addEventListener("click",()=>{  
    const nomVal=nom.value;
    const mailVal=email.value;
    const passVal=password.value;

if( !nomVal || !mailVal|| !passVal){
    return alert("Veuillez remplir tous les champs");
   } 

const users=JSON.parse(localStorage.getItem("users")) || [];
users.push({nom: nomVal, mail: mailVal, pass: passVal});
localStorage.setItem("users",JSON.stringify(users));
alert("Inscription réussie !nom:"+nomVal+"email:"+mailVal);
});