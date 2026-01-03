/**
 * Updates the fee and institution list based on user selection
 */
function updateInfo() {
    const gender = document.getElementById('gender').value;
    const grade = document.getElementById('classLevel').value;
    
    // 1. Calculate and Update Price
    const selectedRadio = document.querySelector('input[name="prepOption"]:checked');
    let total = selectedRadio ? selectedRadio.value : 0;
    document.getElementById('totalPrice').innerText = Number(total).toLocaleString();

    // 2. Logic for Eligible Institutions
    let colleges = "Both gender and class selection is necessary.";

    if (grade !== "0" && gender !== "no") {
        if (gender === "female") {
            if (grade === "1-8") colleges = "Army Burn Hall College for Girls";
            else if (grade === "9") colleges = "Army Burn Hall College, Cadet College Mardan";
            else if (grade === "11") colleges = "Cadet College Mardan for Girls";
        } else {
            if (grade === "1-8") colleges = "Lawrence College";
            else if (grade === "9") colleges = "Atchison College, Military Colleges";
            else if (grade === "11") colleges = "Military Colleges, PAF Colleges";
        }
    }
    document.getElementById('collegeList').innerText = colleges;
}

// Set initial state on page load
updateInfo();

/**
 * Handle Form Submission
 */
document.getElementById('admissionForm').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    alert("Application for " + name + " submitted successfully!");
};