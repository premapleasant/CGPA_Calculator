function addEventListenersForRow(rowNumber) {
  document
    .getElementById(`credits_${rowNumber}`)
    .addEventListener("keyup", function () {
      let credits = document.getElementById(`credits_${rowNumber}`).value;
      let grade_points = document.getElementById(`grade_points_${rowNumber}`).value;
      let credit_points = credits * grade_points;
      document.getElementById(`credit_points_${rowNumber}`).value = credit_points;
    });

  document
    .getElementById(`grade_points_${rowNumber}`)
    .addEventListener("keyup", function () {
      let credits = document.getElementById(`credits_${rowNumber}`).value;
      let grade_points = document.getElementById(`grade_points_${rowNumber}`).value;
      let credit_points = credits * grade_points;
      document.getElementById(`credit_points_${rowNumber}`).value = credit_points;
    });
}

// Add event listeners for initial rows
for (let i = 1; i <= 5; i++) {
  addEventListenersForRow(i);
}

function addRow() {
  let table = document.getElementById("table");
  let length_t = table.rows.length;
  let newRow = table.insertRow(length_t);

  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  cell1.innerHTML = length_t;
  cell2.innerHTML = `<input type="number" id="credits_${length_t}">`;
  cell3.innerHTML = `<input type="number" id="grade_points_${length_t}">`;
  cell4.innerHTML = `<input type="number" id="credit_points_${length_t}" readonly>`;

  addEventListenersForRow(length_t);
}

function deleteRow() {
  let table = document.getElementById("table");
  let length_t = table.rows.length;
  if (length_t > 1) {
    table.deleteRow(length_t - 1);
  }
}

function reset() {
  let table = document.getElementById("table");
  let length_t = table.rows.length;
  if (length_t > 5) {
    for (let i = length_t - 1; i > 5; i--) {
      table.deleteRow(i);
    }
  }
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`credits_${i}`).value = "";
    document.getElementById(`grade_points_${i}`).value = "";
    document.getElementById(`credit_points_${i}`).value = "";
  }
}

function calculateGPA() {
   
    let table = document.getElementById("table");
    let length_t = table.rows.length;
    let total_credit_points = 0;
    let total_credits = 0;
    
    for (let i = 1; i < length_t; i++) {
      let credits = document.getElementById(`credits_${i}`).value.trim();
      let grade_points = document.getElementById(`grade_points_${i}`).value.trim();
      let credit_points = document.getElementById(`credit_points_${i}`).value.trim();
  
      // Check if any input is empty
      if (credits === "" || grade_points === "") {
        alert("Please fill all input boxes or delete empty rows before calculating GPA.");
        return;
      }
  
      total_credit_points += parseFloat(credit_points);
      total_credits += parseFloat(credits);
    }
  
    let gpa = total_credit_points / total_credits;
    document.getElementById("gpa").textContent = `GPA: ${gpa.toFixed(2)}`;
  }
  

