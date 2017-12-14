app.service('storageSvc', function(){
   
    /**
     * Charge le livre de recettes depuis le localstorage
     */
    this.load = function(){
        
        var cookbook = undefined;
        // Charger la valeur associée à la clé myCookbook depuis le localstorage
        var cookbookString = localStorage.getItem('myCookbook');
                
        if(cookbookString !== null && cookbookString !== undefined){
            cookbook = angular.fromJson(cookbookString);
        }
        else{
            // initialisation de l'objet cookbook
            cookbook = {
                recipes: [],
                ingredients:[]
            }
        }
        
        return cookbook;
    }
    
    /**
     * Sauvegarde le livre de recettes dans le localstorage
     * @param {object} cookbook Le livre de recettes à sauvegarder
     */
    this.save = function(cookbook){
       localStorage.setItem('myCookbook',angular.toJson(cookbook));
    }
    
    maFonction = function(){
        
    }
    
});










