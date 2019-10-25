/* Fonction événement qui a pour paramétre blur pour perdre le focus
et event pour créer un événement*/
lastname.addEventListener('blur', (event) => {
  //Déclenchement de l'événement et affichage de la boite à dialogue
  lastname.textContent = window.alert('Merci de votre participation');
});
