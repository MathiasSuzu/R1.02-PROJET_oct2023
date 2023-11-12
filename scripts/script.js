// Récupérez tous les éléments avec la classe 'none-active'
var none_active = document.querySelectorAll('.none-active');

none_active.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        console.log(element);
        // Code à exécuter lorsque l'élément est survolé

    });
});