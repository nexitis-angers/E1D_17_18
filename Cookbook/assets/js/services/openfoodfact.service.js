/*
$http est le service proposé par angular pour aller interroger un service web (API REST)
*/
app.service('openfoodfactSvc', function($http){
    
    /**
     * Fonction de recherche d'un produit manufacturé auprès de l'api d'openfoodfact
     * @param {string} input Recherche de l'utilisateur
     */
    this.search = function(input){
        var promise = $http({
            method:'GET', url:"https://world.openfoodfacts.org/cgi/search.pl?search_terms='" + input + "'&search_simple=1&json=1"
        });
        
        return promise;
    }
    
})