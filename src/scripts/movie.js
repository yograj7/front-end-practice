var movies = [ "Intesteller", "Dune 2","Openhammer"];

    function LoadMovies(){
        document.getElementById("selectMovie").innerHTML="";
        movies.map(function(movie){
            var option = document.createElement("option");
            option.text = movie.toUpperCase();
            option.value = movie;
            document.getElementById("selectMovie").appendChild(option);
        })
    }

    function sortAsc(){
        movies.sort();
        LoadMovies();
    }

    function sortDesc(){
        movies.sort().reverse();
        //movies.reverse();
        LoadMovies();
    }

    function editClick(){
        var selectedMovie = document.getElementById("selectMovie").value;
    }

    function deleteClick(){
        let selectedMovie = document.getElementById("selectMovie").value;
        let selectedMovieIndex = movies.indexOf(selectedMovie);
        let istrue = confirm(`Are you sure\n Detele ${selectedMovie} movie`);
        
        if(istrue === true){
            movies.splice(selectedMovieIndex,1);
            alert(`${selectedMovie} is deleted`);
            LoadMovies();
        }

    }

    function addClick(){
        var newMovie =  document.getElementById("lblMovie").value;
        //let isAvailable = movies.find(newMovie.toUpperCase());
        if(movies.indexOf(newMovie)===-1){
            movies.push(newMovie);
            alert(`${newMovie} is Added to list`);
        }else{

            alert(`${newMovie} is Already Exist`)
        }
        
        LoadMovies();
    }
