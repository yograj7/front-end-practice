function BookClick(){

    document.getElementById("ButtonContainer").style.display = "none";
    document.getElementById("SummaryContainer").style.display = "block";

    document.getElementById("lblMovie").textContent = document.getElementById("lstMovie").value;
    document.getElementById("lblDate").textContent = document.getElementById("lstDate").value;
    document.getElementById("lblCinema").textContent = document.getElementById("lstCinema").value;
    document.getElementById("lblTiming").textContent = document.getElementById("lstTiming").value;

    imgPoster = document.getElementById("imgPoster");
    movieName = document.getElementById("lstMovie").value; 

    if(movieName==="HANUMAN ANSH"){
        imgPoster.src = "../public/images/hanuman.png";
    } else {
        imgPoster.src = "../public/images/mirzapur.png";
    }

}



function ModifyClick(){

    document.getElementById("lblHeader").textContent = "Modify Booking";
    document.getElementById("btnBook").textContent = "Save";
    document.getElementById("btnBook").className = "btn btn-success";

}