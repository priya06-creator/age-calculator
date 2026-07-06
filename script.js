const button = document.getElementById("btn");

button.addEventListener("click", calculateAge);

function calculateAge(){

    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if(dob===""){
        result.innerHTML="Please select your date of birth.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    if(birthDate>today){
        result.innerHTML="Date cannot be in the future.";
        return;
    }

    let years = today.getFullYear()-birthDate.getFullYear();
    let months = today.getMonth()-birthDate.getMonth();
    let days = today.getDate()-birthDate.getDate();

    if(days<0){
        months--;
        const previousMonth=new Date(today.getFullYear(),today.getMonth(),0);
        days+=previousMonth.getDate();
    }

    if(months<0){
        years--;
        months+=12;
    }

    result.innerHTML=
    `
    ${years} Years <br>
    ${months} Months <br>
    ${days} Days
    `;
}