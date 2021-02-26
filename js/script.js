function updateCountryView() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if (ddCountry.value == "Yes") {
        divCountry.classList.remove("invisible");
    }
    else {
        divCountry.classList.add("invisible");
    }
}

function validateForm() {
    // first check
    var formIsValid = true;
    var DoB = document.querySelector("#txtDOB");
    var divDoBError = document.querySelector("#divDoBError")

    if (DoB.value == "") {
        /* show error */
        divDoBError.classList.remove("invisible");
        DoB.classList.add("hasError");
        divDoBError.innerHTML = "Required!";
        formIsValid = false;
    }
    else {
        var dobDate = new Date(DoB.value);
        var todayDate = new Date();
        if (dobDate >= todayDate) {
            /* show error */
            divDoBError.classList.remove("invisible");
            DoB.classList.add("hasError");
            divDoBError.innerHTML = "Invalid!";
            formIsValid = false;
        }
        else{
            divDoBError.classList.add("invisible");
            DoB.classList.remove("hasError");
            divDoBError.innerHTML = "";
        }
    }

    //second check
    var ddCountry = document.querySelector("#ddCountry");
    if(ddCountry.value == "Yes"){
        var txtCountry = document.querySelector("#txtCountry");
        if(txtCountry.value == ""){
            /* show error */
            document.querySelector("#divCountryError").classList.remove("invisible");
            txtCountry.classList.add("hasError");
            document.querySelector("#divCountryError").innerHTML = "Invalid!";
            formIsValid = false;
        }
        else{
            document.querySelector("#divCountryError").classList.add("invisible");
            txtCountry.classList.remove("hasError");
            document.querySelector("#divCountryError").innerHTML = "";
        }
    }

    //third check
    var inputElements = document.getElementsByTagName("input");
    var invalidChars = ['#', '!', '~', '&', '<', '>', '`', "'"];
    for(let i = 0; i < inputElements.length; i++){
        for(let j = 0; j < invalidChars.length; j++){
            if(inputElements[i].value.indexOf(invalidChars[j]) != -1){
                inputElements[i].classList.add("hasError");
                formIsValid = false;
            }
        }
    }

    return formIsValid;
}