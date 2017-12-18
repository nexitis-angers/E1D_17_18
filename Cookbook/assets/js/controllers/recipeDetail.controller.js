app.controller('recipeDetail', function($scope, recipeSvc, openfoodfactSvc){
    /* recette en cours d'édition */
    $scope.recipe = undefined;
    $scope.openFoodFactsResult = undefined;
    
    /**
     * Interroge le service recipeSvc pour récupérer la recette qui a été sélectionnée
     * @returns {object} La recette sélectionnée
     */
    var checkRecipe = function(){
        return recipeSvc.getSelectedRecipe();
    }
    
    $scope.$watch(checkRecipe, function(newValue, oldValue, scope){
        $scope.recipe = newValue;
    });
    
    /**
     * Interroge le service openfoodfacts
     * @param {string} input Saisie de l'utilisateur
     */
    $scope.searchIngredient = function(input){
        $scope.openFoodFactsResult = [];
        
        openfoodfactSvc
            .search(input)
            .then(function(response){
                // Cette fonction sera appelée en cas de succès de la requête
                console.log(response);
                for(var i = 0; i<response.data.products.length; i++){
                    var item = response.data.products[i];
                    
                    // Recomposition d'un objet ingrédient à partir d'item
                    var monIngredient = {
                        name:item.product_name_fr,
                        brand:item.brands
                    };
                    
                    // Ajout de l'objet au tableau
                    $scope.openFoodFactsResult.push(monIngredient);
                }
            
            }, function(response){
                // Cette fonction sera appelée en cas d'échec de la requête
                console.log(response);
            });
    }
});














