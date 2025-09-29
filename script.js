// Set up  
const malenames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const femalenames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Event Listener
document.addEventListener ('DOMContentLoaded', () => {
    const form = document.getElementById('akan-form');
    const dobPicker = document.getElementById('dob');
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    // If user picks a date, disable manual fields
    dobPicker.addEventListener('input', ()=> {
        if (dobPicker.value) {
            dayInput.disabled = true;
            monthInput.disabled = true;
            yearInput.disabled = true;
        } else {
            dayInput.disabled = false;
            monthInput.disabled = false;
            yearInput.disabled = false;
        }
    });
    // If user types in manual fields, disable date picker
    [dayInput, monthInput, yearInput].forEach(input => {
        input.addEventListener('input', () => {
            if (dayInput.value || monthInput.value || yearInput.value) {
                dobPicker.disabled = true;
            } else {
                dobPicker.disabled = false;
            }
        });
    });
    
form.addEventListener('submit', function(event) {
    event.preventDefault();

    let day, month, year;


    // Date picker
    if (dobPicker.value) {
        const dateParts = dobPicker.value.split("-");
        year = parseInt(dateParts[0]);
        month = parseInt(dateParts[1]);
        day = parseInt(dateParts[2]);
    }  else { // Manual input
        day = parseInt(dayInput.value);
        month = parseInt(monthInput.value);
        year = parseInt(yearInput.value);
    }

   
    const gender = document.getElementById("gender").value;

    // Validate inputs
    if (!day || !month || !year || !gender) {
        alert("Please fill in all fields.");
        return;
    }

        if (month < 1 || month > 12) {
        alert("Invalid month! Please enter a month between 1 and 12.");
        return;
    }
    if (day < 1 || day > 31) {
        alert("Invalid day! Please enter a day between 1 and 31.");
        return;
    }
    if (year < 1900 || year > new Date().getFullYear()) {
        alert("Invalid year! Please enter a valid year.");
        return;
    }
    // real calendar validation
    const testDate = new Date(year, month - 1, day);
    if (testDate.getFullYear() !== year || 
        testDate.getMonth() + 1 !== month || 
        testDate.getDate() !== day) {
        alert("The date entered is not valid. Please check the day, month, and year.");
        return;
    }

    // Basic date validation
    let calcYear = year;
    let calcMonth = month;
   if (calcMonth < 3) {
        month += 12;
        year -= 1;  
   }

    // split year into cc and yy
    const cc = Math.floor(year / 100);
    const yy = year % 100;

    // apply formula
    let formula = (day + 
    Math.floor((13 * (month + 1)) / 5) + yy + 
    Math.floor(yy / 4) + 
    Math.floor(cc / 4) - (2 * cc)) % 7;

    // index for day of the week
    let dayIndex = (formula + 6) % 7; 
    


    // Get Akan name
    let akanName = gender === "male" ? malenames[dayIndex] : 
    femalenames[dayIndex];

    // Display result
   const nameElement = document.getElementById("akan-name");
   const resultBox = document.getElementById("result-box");

   resultBox.innerHTML = `
   <h2>Your Akan Name is: 
   <span style="color:${gender === 
   "male" ? "blue" : "deeppink"};">
   ${akanName.toUpperCase()}
    </span> 
    </h2>
    
   <h3>You were born on a ${days[dayIndex]}</h3>
   `;

      
    document.getElementById("day-of-week").textContent = days[dayIndex];
    document.getElementById("result-box").style.display = "block";
    });


// Reset
form.addEventListener('reset', ()=> {
    dobPicker.disabled = false;
    dayInput.disabled = false;
    monthInput.disabled = false;
    yearInput.disabled = false;
});
});
   
