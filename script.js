// Set up  
const malenames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femalenames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const daysofweek=[0,1,2,3,4,5,6];
// Event Listener
document.addEventListener ('DOMContentLoaded', () => {
    const form = document.getElementById('akan-form');
    const resultBox = document.getElementById("result");
    const resultText = document.getElementById("akan-name");


form.addEventListener('submit', function(event) {
    event.preventDefault();


    // Get form values
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    // Validate inputs
    if (!dob || !gender) {
        alert("Please select both date of birth and gender!");
        return;
    }

    // Calculate day of the week
    const birthDate = new Date(dob);
    const dayOfWeek = birthDate.getDay(); // 0 (Sunday) to 6 (Saturday)

    // Get Akan name
    let akanName = "";
    if (gender === "male") {
        akanName = malenames[dayOfWeek];
    } else if (gender === "female") {
        akanName = femalenames[dayOfWeek];  
    }

    // Display result
    resultText.innerHTML = `<strong>${akanName}</strong>, <br> You were born on a <strong>${days[dayOfWeek]}</strong>.`;
    resultBox.style.display = "block";
    form.reset();
});
});
