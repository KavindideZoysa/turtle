//Ticket page 

const dateInput = document.getElementById('dateInput');
const Save = document.getElementById('saveBtn');

// Initialize selectedDate with the current date
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const formattedCurrentDate = `${year}-${month}-${day}`;
let selected_Date = formattedCurrentDate;


// Update the date input value
dateInput.value = selected_Date;

// Set the minimum allowed date for the date input
dateInput.min = formattedCurrentDate;

// Add an event listener to update selectedDate
dateInput.addEventListener('input', function() {
    selected_Date = dateInput.value;
});

Save.addEventListener('click', function(event) {
    localStorage.setItem('selectedDate', selected_Date);
    console.log('Selected date saved:', selected_Date);
});
//-------------------------------------------------------------------------------
function decreaseQuantity(type) {
  var quantityElement = document.getElementById(type + 'Quantity');
  var quantity = parseInt(quantityElement.textContent);
  if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      saveDataToLocalStorage(type, quantity);
  }
}

function increaseQuantity(type) {
  var quantityElement = document.getElementById(type + 'Quantity');
  var quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
  saveDataToLocalStorage(type, quantity);
}

function saveDataToLocalStorage(type, quantity) {
  localStorage.setItem(type, quantity);
}

function saveDataAndDisplayConsole() {
    var types = ['foreignerAdult', 'foreignerChild', 'slAdult', 'slChild'];
    var hasAtLeastOne = false;
    
    types.forEach(function(type) {
        var quantity = parseInt(localStorage.getItem(type));
        if (quantity >= 1) {
            hasAtLeastOne = true;
        }
    });

    if (!hasAtLeastOne) {
        alert('Please enter your guest count.');
        return;
    }
    console.log('Guest Count:');
            types.forEach(function(type) {
                var quantity = parseInt(localStorage.getItem(type));
                console.log(type + ': ' + quantity);
            });
        }

        // Add event listener to the Save button
    
    saveBtn.addEventListener('click', function() {
    var types = ['foreignerAdult', 'foreignerChild', 'slAdult', 'slChild'];
  
    // Save the number of each guest type to local storage and display in console
    types.forEach(function(type) {
      var quantity = parseInt(document.getElementById(type + 'Quantity').textContent);
      localStorage.setItem(type, quantity);
      console.log(type + ': ' + quantity);
    });
  });
  /*
  // Load data from local storage and update the UI
  function loadFromLocalStorage() {
    var types = ['foreignerAdult', 'foreignerChild', 'slAdult', 'slChild'];
    types.forEach(function(type) {
      var quantity = localStorage.getItem(type);
      if (quantity !== null) {
        document.getElementById(type + 'Quantity').textContent = quantity;
      }
    });
  }
  */
//-------------------------------------------------------------------------

const timeSelect = document.getElementById('time');
const SaveAll = document.getElementById('saveBtn');
let selectedOptions = [7.00, 8.00,9.00,10.00, 11.00,12.00, 13.00, 14.00, 15.00, 16.00, 17.00];


timeSelect.addEventListener('change', function() {
    selectedOptions = Array.from(timeSelect.selectedOptions, option => option.value);
});

SaveAll.addEventListener('click', function() {
    if (selectedOptions.length === 0) {
        alert('Select the time duration you want to spend.');
        return;
    }
    let numOfHours = 1;
        for (let i = 1; i < selectedOptions.length; i++) {
            if (selectedOptions[i] - selectedOptions[i - 1] === 1) {
                numOfHours++;
            } else {
                break;
            }
        }

        localStorage.setItem('numOfHours', numOfHours);
        console.log('Number of hours:', numOfHours);


        const foreignerAdultQuantity = parseInt(document.getElementById("foreignerAdultQuantity").textContent);
        const foreignerChildQuantity = parseInt(document.getElementById("foreignerChildQuantity").textContent);
        const slAdultQuantity = parseInt(document.getElementById("slAdultQuantity").textContent);
        const slChildQuantity = parseInt(document.getElementById("slChildQuantity").textContent);

        // Selected Time Slots
        const selected_TimeSlots = Array.from(document.getElementById("time").selectedOptions, option =>
            parseFloat(option.value)
        );

        // Calculate total cost based on guest count and selected time slots
        const charges = {
            "Foreigner Adult": [10, 13],
            "Foreigner Child": [5, 8],
            "SL Adult": [4, 6],
            "SL Child": [2, 3],
        };
        let totalCost = 0;
        for (const type in charges) {
            const normalCharge = charges[type][0];
            const peakCharge = charges[type][1];
            const quantity = eval(`${type.toLowerCase()}Quantity`);
            
            totalCost +=s
                quantity * selectedTimeSlots.reduce((acc, time) => {
                    return acc + (time >= 10 && time <= 13 ? peakCharge : normalCharge);
                }, 0);
        }
        // Update the summary table
        const currentDateElement = document.getElementById("currentDate");
        const timeslotsElement = document.getElementById("timeslots");
        const durationElement = document.getElementById("t_duration");
        const guestTypeElement = document.getElementById("guest-type");
        const costElement = document.getElementById("cost");
        const totalPayableElement = document.getElementById("totalPayable");

        const selectedDate = new Date().toLocaleDateString();
        const startTime = selectedTimeSlots[0];
        const endTime = startTime + selectedTimeSlots.length;
        const duration = selectedTimeSlots.length;

        currentDateElement.textContent = selectedDate;
        timeslotsElement.textContent = `${startTime}.00 am to ${endTime}.00 am`;
        durationElement.textContent = `${duration} hrs (${duration} Normal : 0 Peak)`;

        guestTypeElement.textContent = `${foreignerAdultQuantity + foreignerChildQuantity} Guests`;
        costElement.textContent = `$${totalCost}`;
        totalPayableElement.textContent = `$${totalCost}`;

        const time_Select = document.getElementById('time');
let selectedTimeSlots = [];

time_Select.addEventListener('change', function() {
    // Get the selected options and extract their values
    selectedTimeSlots = Array.from(time_Select.selectedOptions, option => option.value);

    // Convert the values to integers (if needed)
    selectedTimeSlots = selectedTimeSlots.map(time => parseInt(time));

    console.log('Selected Time Slots:', selectedTimeSlots);
});

    });
//-------------------------------------------------------------------------
// summary table 



 // Get the current date
 const currentDateElement = document.getElementById('currentDate');
 const dtoday = new Date();
 const current_Date = dtoday.toLocaleDateString();
 currentDateElement.textContent = current_Date;


