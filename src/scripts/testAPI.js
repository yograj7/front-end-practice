// var display = document.getElementById("display");

function fetch(){

    let http = new XMLHttpRequest();
    http.open("GET","../../src/scripts/JSON/employee.json",true);
    http.send();
    
    http.onreadystatechange = function(){
        if(http.readyState==4){
            // display.innerHTML = http.responseText;
    			
            console.log(http.responseText);
		}

    }




}