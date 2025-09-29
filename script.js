// Set up  
const malenames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femalenames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Event Listener
document.addEventListener ('DOMContentLoaded', () => {
    const form = document.getElementById('akan-form');
    
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

    const dateParts = dob.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    // Basic date validation
   if (month < 3) {
        month += 12;
        year -= 1;  
   }

    // split year into cc and yy
    const cc = Math.floor(year / 100);
    const yy = year % 100;

    // apply formula
    let formula = (day + Math.floor((13 * (month + 1)) / 5) + yy + Math.floor(yy / 4) + Math.floor(cc / 4) - (2 * cc)) % 7;

    // index for day of the week
    let dayIndex = (formula + 6) % 7; 
    


    // Get Akan name
    let akanName = "";
    if (gender === "male") {
        akanName = malenames[dayIndex];
    } else if (gender === "female") {
        akanName = femalenames[dayIndex];  
    }

    // Display result
    document.getElementById("akan-name").textContent =akanName;
    document.getElementById("day-of-week").textContent = days[dayIndex];
    document.getElementById("result-box").style.display = "block";
    });
}); 
