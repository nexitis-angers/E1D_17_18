app.controller('recipeDetail', function($scope, recipeSvc){
    /* recette en cours d'édition */
    $scope.recipe = undefined;
    
    /**
     * Interroge le service recipeSvc pour récupérer la recette qui a été sélectionnée
     * @returns {object} La recette sélectionnée
     */
    var checkRecipe = function(){
        return recipeSvc.getSelectedRecipe();
    }
    
    $scope.$watch(checkRecipe, function(newValue, oldValue, scope){
        $scope.recipe = newValue;
    })
});