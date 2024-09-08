document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();  // Preventing form submission

    // Type assertions (form fields)
    const nameElement = document.getElementById('name') as HTMLInputElement;

    const emailElement = document.getElementById('email') as HTMLInputElement;

    const phoneElement = document.getElementById('phone') as HTMLInputElement;

    const educationElement = document.getElementById('education') as HTMLInputElement;

    const experienceElement = document.getElementById('experience') as HTMLInputElement;

    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    const resumeOutputElement = document.getElementById('resumeOutput');

    // Errors messages
    const clearPreviousErrors = () => {
        const errorElements = document.querySelectorAll('.error-message');
        errorElements.forEach(error => error.remove());
    };

    clearPreviousErrors();

    // display error messages

    const showError = (element: HTMLInputElement, message: string) => {
        const errorElement = document.createElement('p');
        errorElement.className = 'error-message'; // Assign a class for easy selection
        errorElement.style.color = 'red';
        errorElement.innerText = message;
        element.parentElement?.appendChild(errorElement);  // Add error message after the field
    };

    // validation checks
    let formValid = true;
    if (!nameElement.value.trim()) {
        showError(nameElement, 'Name field is required.');
        formValid = false;
    }
    if (!emailElement.value.trim()) {
        showError(emailElement, 'Email field is required.');
        formValid = false;
    }
    if (!phoneElement.value.trim()) {
        showError(phoneElement, 'Phone field is required.');
        formValid = false;
    }
    if (!educationElement.value.trim()) {
        showError(educationElement, 'Education field is required.');
        formValid = false;
    }
    if (!experienceElement.value.trim()) {
        showError(experienceElement, 'Experience field is required.');
        formValid = false;
    }
    if (!skillsElement.value.trim()) {
        showError(skillsElement, 'Skills field is required.');
        formValid = false;
    }

    // if form is not valid, don't do further operations!
    if (!formValid) {
        return;
    }

    // If form is valid, generate the resume output

    const name = nameElement.value;

    const email = emailElement.value;

    const phone = phoneElement.value;

    const education = educationElement.value;

    const experience = experienceElement.value;

    const skills = skillsElement.value;

    const resumeOutput = `
        <h2>Resume</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Phone number:</strong> ${phone}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // resume output
    
    if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
    } else {
        console.error('The Resume Output Element is missing.');
    }
});
