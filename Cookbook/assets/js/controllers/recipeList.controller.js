/*
    Chargement du controller avec injection du scope, mais aussi du service de stockage
*/
app.controller('recipeList',function($scope,storageSvc, recipeSvc){
   
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
    
    /**
     * Sélectionne la recette 
     * @param {object} recipe La recette qui a été sélectionnée par l'utilisateur
     */
    $scope.selectRecipe = function(recipe){
        recipeSvc.setSelectedRecipe(recipe);
    }
    
});







