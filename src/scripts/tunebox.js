let songs = [
    {
        name: "Perfect",
        artist: "Ed Sheeran",
        genre: "Romantic"
    },

    {
        name: "Believer",
        artist: "Imagine Dragons",
        genre: "Rock"
    },

    {
        name: "Faded",
        artist: "Alan Walker",
        genre: "Electronic"
    },

    {
        name: "Shape of You",
        artist: "Ed Sheeran",
        genre: "Pop"
    }
];

    function SongsLoad(){
        document.getElementById("cards").innerHTML="";
        songs.map(function(song){
            var div = document.createElement("div");
            div.className ="card mt-5 mx-5";
            div.style ="height: 327px; width: 200px";
            div.innerHTML=`
            <div class="card-body">
                <div class="display-6 p-5 bg-dark rounded-2">
                🎵
                </div>
                <div class="fw-bold p-1">${song.name}</div>
                <div class="p-1">${song.artist}</div>
                <div class="p-1">${song.genre}</div>
            </div>
            <div class="card-footer">
                <button onclick="recentlyAdded('${song.name}')" class="d-flex justify-content-center align-content-center btn btn-primary w-100">Add to Playlist</button>
            </div>
            `;
            playlistSummery();
            document.getElementById("count").innerHTML=`${songs.length} Songs`
            document.getElementById("cards").appendChild(div);

        })
        
    }

    function sortAZ(){
    songs.sort((a, b) => a.name.localeCompare(b.name));
    SongsLoad();
    }

    function AddSong(){
        let newsong = prompt("Enter Song name : ");
        let songArtist = prompt("Enter Song Artist : ");
        let songType = prompt("Enter Song Genre : ");
        if(newsong || songArtist || songType !== null){
            songs.push(
                {
                name: newsong,
                artist: songArtist,
                genre: songType
                }
            );
            SongsLoad();
            playlistSummery();
   
        }else{
            alert("Enter Valid data");
        }
    }

    function removeSong(){
        songs.pop();
        SongsLoad();
    }

    function latestSong(){
        songs.reverse();
        SongsLoad();
    }


    function recentlyAdded(name){

        let span = document.createElement("span");
        span.innerHTML = `<span class="bg-black p-2 rounded-pill my-3">${name}</span>`;
        alert(name + " is Added to Playlist")
        document.getElementById("recentlyAdded").appendChild(span);
    }

    

    function playlistSummery() {
    let recentSongs = songs.slice(-3);
    let container = document.getElementById("PlaylistSummery");

    container.innerHTML = "";
    recentSongs.forEach(function(song) {

        container.innerHTML += `<span class="bg-black p-2 rounded-pill">${song.name}</span>`;
    });
}