console.log("binded correctly");

// stop page from reloading
// get all the information and place it in an object

// example {
//     name: "value";
//     password: "value";
//     ...
// }

let submitBtn = document.getElementById("submitButton");
let cancelBtn = document.getElementById("cancelButton");

submitBtn.addEventListener("click", submitValidation);
cancelBtn.addEventListener("click", cancelValidation);


function submitValidation(e){
    e.preventDefault();
    var name, email, password, passconf, country, gender = "";

    name = document.getElementById("nameInput").value;
    email = document.getElementById("emailInput").value;

    password = document.getElementById("passwordInput").value;
    passconf = document.getElementById("passConfInput").value;

    let patternNum = new RegExp("[0-9]+");
    let patternLetter = new RegExp("[a-zA-z]+");

    if(!(password.match(patternNum) && password.match(patternLetter) && password == passconf)){
        alert("Passwords do not match");
    } else {
        var c = document.getElementById("country");
        if(c.selectedIndex == 0){
            alert("Please select a country");
        }else{
            country = c.value;
        }

        var radios = document.getElementsByName("gender");
        for(var i = 0; i < radios.length; i++){
            if(radios[i].checked){
                gender = radios[i].value;
                break;
            }
        }
        if(gender == ""){
            alert("Please select a gender");
        }

        var Person = {
            myName: name,
            myEmail: email,
            myPassword: password,
            myPasswordConf: passconf,
            myCountry: country,
            myGender: gender 
        };

        console.log(Person.myCountry);
    }
}

function cancelValidation(e){    
    e.preventDefault();
    document.getElementById("myForm").reset();
}
