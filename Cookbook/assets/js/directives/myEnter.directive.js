app.directive('myEnter',function(){
    /* On est dans le constructeur de la directive, celle-ci doit retourner un fonction qui prend 3 paramètres :
        - scope (contexte) courant
        - element sur lequel la directive s'applique
        - attributs de l'élément
    */
    return function(scope, element, attrs){
        /*
         Dans ce cas là, la fonction bind est une fonction qui permet d'ajouter un écouteur sur un ou plusieurs évènements js classiques
        */
        element.bind("keydown keypress", function(event){
            
            // Si le code ASCII de la touche pressée vaut 13 (13 == enter)
            if(event.which === 13){
                
                // on applique l'expression litérale passée dans l'attribut myEnter de l'élément HTML
                scope.$apply(function(){
                   scope.$eval(attrs.myEnter); 
                });
                
                event.preventDefault();
            }
            
        });
    }
});