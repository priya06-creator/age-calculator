const button = document.getElementById("btn");

button.addEventListener("click", calculateAge);

function calculateAge() {

    const dob = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (dob === "") {
        result.innerHTML = "Please select your date of birth.";
        return;
    }

    // Save the selected date in localStorage
    localStorage.setItem("birthDate", dob);

    const birthDate = new Date(dob);
    const today = new Date();

    if (birthDate > today) {
        result.innerHTML = "Date cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML = `
        <h3>Your Age</h3>
        <p>${years} Years</p>
        <p>${months} Months</p>
        <p>${days} Days</p>
    `;
}

// Load the saved date when the page opens
window.onload = function () {
    const savedDate = localStorage.getItem("birthDate");

    if (savedDate) {
        document.getElementById("dob").value = savedDate;
        calculateAge(); // Automatically display the age
    }
};