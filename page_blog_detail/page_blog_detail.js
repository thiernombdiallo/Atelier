// function validerEmail() {
//     // Récupérer la valeur de l'input email
//     var email = document.getElementById("email").value;

//     // Expression régulière pour valider l'email
//     var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//     if (regex.test(email)) {
//       // L'email est valide
//       document.getElementById("message").innerHTML = "Email valide.";
//       document.getElementById("message").style.color = "green";
//     } else {
//       // L'email est invalide
//       document.getElementById("message").innerHTML = "Email invalide. Veuillez entrer une adresse email valide.";
//       document.getElementById("message").style.color = "red";
//     }
//   }
//   function validerNom() {
//     // Récupérer la valeur de l'input nom
//     var nom = document.getElementById("nom").value;

//     // Expression régulière pour valider le nom (autorise les lettres et les espaces)
//     var regex = /^[A-Za-z\s]+$/;

//     // Longueur minimale et maximale du nom
//     var longueurMin = 2;
//     var longueurMax = 50;

//     if (nom.length < longueurMin || nom.length > longueurMax) {
//       // La longueur du nom n'est pas valide
//       document.getElementById("message").innerHTML = "Le nom doit avoir entre " + longueurMin + " et " + longueurMax + " caractères.";
//       document.getElementById("message").style.color = "red";
//     } else if (!regex.test(nom)) {
//       // Le nom contient des caractères non valides
//       document.getElementById("message").innerHTML = "Le nom ne doit contenir que des lettres et des espaces.";
//       document.getElementById("message").style.color = "red";
//     } else {
//       // Le nom est valide
//       document.getElementById("message").innerHTML = "Nom valide.";
//       document.getElementById("message").style.color = "green";
//     }
//   }
function validerFormulaire() {
  var nom = document.getElementById("nom").value;
  var email = document.getElementById("email").value;
  var site = document.getElementById("site").value;
  var commentaire = document.getElementById("commentaire").value;

  // Expression régulière pour valider l'email
  var regexEmail = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

  // Vérification du nom, email et commentaire
  if (nom.trim() === "" || commentaire.trim() === "") {
    document.getElementById("message").innerHTML = "Veuillez remplir tous les champs obligatoires (Nom, Commentaire).";
    document.getElementById("message").style.color = "red";
  } else if (email !== "" && !regexEmail.test(email)) {
    document.getElementById("message").innerHTML = "L'adresse email n'est pas valide.";
    document.getElementById("message").style.color = "red";
  } else {
    // Le formulaire est valide, vous pouvez soumettre les données ou effectuer d'autres actions ici
    document.getElementById("message").innerHTML = "Formulaire valide. Données prêtes à être soumises.";
    document.getElementById("message").style.color = "green";
  }
}