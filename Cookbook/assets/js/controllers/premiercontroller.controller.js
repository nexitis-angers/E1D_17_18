





app.controller('premierController',function($scope){
   
    // Initialisation d'un tableau de recettes
    $scope.recettes = [];
    
    /**
     * Ajoute une recette à la liste des recettes
     * @param {string} nom Nom de la recette
     */
    $scope.addRecette = function(nom){
        $scope.recettes.push(nom);
    }
    
});