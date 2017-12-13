




/*
    Chargement du controller avec injection du scope, mais aussi du service de stockage
*/
app.controller('premierController',function($scope,storageSvc){
   
    // Initialisation d'un tableau de recettes
    $scope.cookbook = undefined;
    
    /**
     * Fonction d'initialisation 
     */
    $scope.init = function(){
        $scope.cookbook = storageSvc.load();
    }
    
    /**
     * Ajoute une recette à la liste des recettes
     * @param {string} nom Nom de la recette
     */
    $scope.addRecette = function(nom){
        // ajout de la recette au livre
        $scope.cookbook.recipes.push(
            {
                name:nom
            });
        // Sauvegarde
        storageSvc.save($scope.cookbook);
    }
    
});







