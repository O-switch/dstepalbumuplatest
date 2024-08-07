// profile pic function 
let profileImg = document.getElementById('profilePicInput')
profileImg.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profilePicture').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// ninImage function 
let ninImg = document.getElementById('ninInput')
ninImg.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('ninImage').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// fingerprintImage function 
let fingerImg = document.getElementById('fingerprintInput')
fingerImg.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('fingerprintPicture').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

// collecting data form 
const form = document.querySelector('#myForm')
form.addEventListener('submit', function (e) {
    e.preventDefault()

    // Get form data
    const profileImage = document.getElementById('profilePicture').src;
    const ninImage = document.getElementById('ninImage').src;
    const fingerprintImage = document.getElementById('fingerprintPicture').src;
    const date = document.getElementById('date').value;

    const nin = document.getElementById('ninNumber').value;
    const firstname = document.getElementById('firstName').value;
    const middlename = document.getElementById('middleName').value;
    const lastname = document.getElementById('lastName').value;
    const dstepRegNo = document.getElementById('dstepRegNo').value;
    const admittedCourse = document.getElementById('admittedCourse').value;
    const personalEmail = document.getElementById('personalEmail').value;
    const officialEmail = document.getElementById('officialEmail').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phoneNumber').value;
    const whatsapp = document.getElementById('whatsappNo').value;
    const dob = document.getElementById('dateOfBirth').value;
    const age = document.getElementById('age').value;
    const physicalChallenge = document.getElementById('physicalChallenge').value;
    const employmentStatus = document.getElementById('employmentStatus').value;
    const stateOfResidence = document.getElementById('stateOfResidence').value;
    const stateOfOrigin = document.getElementById('stateOfOrigin').value;
    const highestQualification = document.getElementById('highestQualification').value;
    const institutionAttended = document.getElementById('lastInstitutionAttended').value;
    const courseOfStudy = document.getElementById('TertiaryCourseOfStudy').value;
    const occupation = document.getElementById('Occupation').value;

    // profile declared
    document.getElementById('profile_picture').src = profileImage;
    document.getElementById('profile_nin').src = ninImage;
    document.getElementById('profile_fingerprint').src = fingerprintImage;
    document.getElementById('profile_date').textContent = `Date: ${date}`;

    document.getElementById('ninNumber').textContent = `NIN: ${nin}`;
    document.getElementById('profile_firstname').textContent = `First Name: ${firstname}`;
    document.getElementById('profile_middlename').textContent = `Middle Name: ${middlename}`;
    document.getElementById('profile_lastname').textContent = `Last Name: ${lastname}`;
    document.getElementById('profile_dstepRegNo').textContent = `DSTEP Reg. No.: ${dstepRegNo}`;
    document.getElementById('profile_admittedCourse').textContent = `DSTEP Admitted Course: ${admittedCourse}`;
    document.getElementById('profile_personalEmail').textContent = `Personal Email: ${personalEmail}`;
    document.getElementById('profile_officialEmail').textContent = `Official Email: ${officialEmail}`;
    document.getElementById('profile_gender').textContent = `Gender: ${gender}`;
    document.getElementById('profile_phone').textContent = `Phone Number: ${phone}`;
    document.getElementById('profile_whatsapp').textContent = `Whatsapp Number: ${whatsapp}`;
    document.getElementById('profile_dob').textContent = `Date of Birth: ${dob}`;
    document.getElementById('profile_age').textContent = `Age: ${age}`;
    document.getElementById('profile_physicalChallenge').textContent = `Physical Challenge: ${physicalChallenge}`;
    document.getElementById('profile_employmentStatus').textContent = `Employment Status: ${employmentStatus}`;
    document.getElementById('profile_stateOfResidence').textContent = `State of Residence: ${stateOfResidence}`;
    document.getElementById('profile_stateOfOrigin').textContent = `State of Origin: ${stateOfOrigin}`;
    document.getElementById('profile_highestQualification').textContent = `Qualification: ${highestQualification}`;
    document.getElementById('profile_institutionAttended').textContent = `Institution: ${institutionAttended}`;
    document.getElementById('profile_courseOfStudy').textContent = `Course: ${courseOfStudy}`;
    document.getElementById('profile_occupation').textContent = `Occupation: ${occupation}`;

    alert('woking')

    document.getElementById('profile').style.display = 'block';

    // Optionally hide the form after submission
    document.getElementById('upload-form').style.display = 'none';

    // Show PDF download button
    document.getElementById('download-btn').style.display = 'block';
})

document.getElementById('download-btn').addEventListener('click', function () {
    const element = document.getElementById('profile');
    html2pdf().from(element).save('profile.pdf');
});



// Reg no. js script
document.addEventListener('DOMContentLoaded', function () {
    var inputField = document.getElementById('dstepRegNo');
    var prefix = 'IDEAS/IGF/NPCU/92/B/OYO-NHC/';

    inputField.addEventListener('input', function (event) {
        var inputValue = event.target.value;

        if (inputValue.startsWith(prefix)) {
            // Remove the prefix from the value
            var suffix = inputValue.substring(prefix.length);

            // Remove any non-numeric characters
            var cleanedSuffix = suffix.replace(/\D/g, '');

            // Limit the suffix to 4 digits
            var finalSuffix = cleanedSuffix.substring(0, 4);

            // Update the input value with the prefix and cleaned suffix
            event.target.value = prefix + finalSuffix;
        } else {
            // If the input doesn't start with the prefix, reset the value to just the prefix
            event.target.value = prefix;
        }
    });
});
