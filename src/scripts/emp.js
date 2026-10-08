let emplyees = [
    {
        name:"bharat",
        role:"devloper"
    },
]

function empLoad(){
    document.getElementById("displayEmp").innerHTML="";
    emplyees.map(function(employee){
        let div = document.createElement("div");
        div.className = "m-2 bg-success-subtle d-flex flex-column gap-2 p-3 rounded-4 border-1 border-success border";
        div.innerHTML=`
            <div>
            <b>Employee Name : </b> ${employee.name}
            </div>
            <div>
            <b>Employee Role : </b> ${employee.role}
            </div>
            <div class="p-1 d-flex gap-2">
            <button onclick="deleteEmp('${employee.name}')" class="btn btn-danger bi bi-trash-fill p-2"> Delete</button>
            <button onclick="editClick('${employee.name}')" class="btn btn-warning bi bi-pen-fill p-2"> Edit</button>
            </div>
        `;
        document.getElementById("displayEmp").appendChild(div);
    })

}

function addEmp(){
    let empName = document.getElementById("lblname").value;
    let empRole = document.getElementById("lblrole").value;

    emplyees.push({
        name:empName.toLowerCase(),
        role:empRole
    });

    empLoad();
}

function deleteEmp(name){
       
        let i=0;
        
        emplyees.forEach(function(employee){
        if(name==employee.name)
            {  
                emplyees.splice(i,1);   
            }
            i++;
    })
        empLoad();
}

function editClick(name){
    //let empIndex = emplyees.indexOf(name.toLowerCase());

    let empIndex = emplyees.findIndex(function(employee) {
    return employee.name === name.toLowerCase();
});

    if(empIndex===-1){
        alert(name +" Not exist");
    }else{
        let newName = prompt("Enter Employee Name : ");
        let newRole = prompt("Enter Employee Role : ");

        emplyees[empIndex].name = newName.toLowerCase();
        emplyees[empIndex].role = newRole.toLowerCase();
    }
    empLoad();
}



// function searchClick(){
//     let search = document.getElementById("search").value;
//     emplyees.findIndex(function(search));

//     if(search ===-1){
//         alert("is not Exist")
//     }
// }

function searchClick() {

    // let search = document.getElementById("search").value.toLowerCase();

    // let employee = emplyees.find(function(employee) {
    //     return employee.name === search;
    // });

    // if (employee === undefined) {
    //     alert(search + " is not exist");
    //     return;
    // }

    //
    let search = document.getElementById("search").value.toLowerCase();

    let employee = emplyees.find(function(employee) {
        return employee.name.toLowerCase().includes(search);
    });

    if (employee === undefined) {
        alert(search + " is not exist");
        return;
    }

    document.getElementById("result").innerHTML = `
        <div class="m-2 bg-success-subtle d-flex flex-column gap-2 p-3 rounded-4 border border-success">
            <div>
                <b>Employee Name : </b> ${employee.name}
            </div>

            <div>
                <b>Employee Role : </b> ${employee.role}
            </div>

            <div class="p-1 d-flex gap-2">
                <button onclick="deleteEmp('${employee.name}')" 
                    class="btn btn-danger bi bi-trash-fill p-2"> Delete </button>

                <button onclick="editClick('${employee.name}')" 
                    class="btn btn-warning bi bi-pen-fill p-2"> Edit </button>
            </div>
        </div>
    `;
}