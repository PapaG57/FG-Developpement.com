// redirection vers la page suivante une fois la vidéo lue et le spinner affiché

document.getElementById('myVideo').addEventListener('ended', function() {
    // Lorsque la vidéo est terminée
    document.getElementById('spinner').style.display = 'block'; // Afficher le spinner
    setTimeout(function() {
        window.location.href = 'accueil.html'; // Rediriger vers la page suivante après un délai
    }, 2000); // Délai de 2 secondes (2000 millisecondes) pour le spinner
});