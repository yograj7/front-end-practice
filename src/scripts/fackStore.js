function LoadCategories(){
    fetch(`https://fakestoreapi.com/products/categories`)
    .then(function(response){
        return response.json();
    })
    .then(function(categories){
        categories.unshift('all');
        
    })
}