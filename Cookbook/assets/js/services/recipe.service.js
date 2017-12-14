app.service('recipeSvc', function(){
   
    this.selectedRecipe = undefined;
    
    /**
     * Obtient la recette qui est en cours de sélection
     * @returns {object} la recette
     */
    this.getSelectedRecipe = function(){
        return this.selectedRecipe;
    }
    
    /**
     * Affecte la recette qui a été sélectionnée
     * @param {object} recipe La recette qui a été sélectionnée
     */
    this.setSelectedRecipe = function(recipe){
        this.selectedRecipe = recipe;
    }
    
});










